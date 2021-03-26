// check if values match
Array.prototype.allValuesSame = function() {
	for(let i = 1; i < this.length; i++) {
		if(this[i] !== this[0]) return false;
	}
	return true;
};
//from https://gist.github.com/axelpale/3118596
function k_combinations(set, k) {
	let i, j, combs, head, tailcombs;
	if(k > set.length || k <= 0) {
		return [];
	}
	if(k == set.length) {
		return [set];
	}
	if(k == 1) {
		combs = [];
		for(i = 0; i < set.length; i++) {
			combs.push([set[i]]);
		}
		return combs;
	}
	// Assert {1 < k < set.length}
	combs = [];
	for(i = 0; i < set.length - k + 1; i++) {
		head = set.slice(i, i + 1);
		tailcombs = k_combinations(set.slice(i + 1), k - 1);
		for(j = 0; j < tailcombs.length; j++) {
			combs.push(head.concat(tailcombs[j]));
		}
	}
	return combs;
}
// generate cards used in game after deal started
function Card(int) {
	const values = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
	const suits = ['&clubs;', '&diams;', '&hearts;', '&spades;'];
	this.suit = Math.floor(int / 13);
	this.value = Math.floor(int % 13);
	this.string = values[this.value] + "" + suits[this.suit] + ' '
}
// Player hand
function Hand(fiveCards) {
	this.fiveCards = fiveCards;
	let values = fiveCards.map(function(card) {
		return card % 13
	});
	let suits = fiveCards.map(function(card) {
		return Math.floor(card / 13)
	});
	this.isFlush = suits.allValuesSame();
	this.cardValueCount = [];
	this.addCards(values);
	this.uniqValues = this.cardValueCount.length;
	this.rank_int = this.rank()
}
/// add cards to the table
Hand.prototype.addCards = function(cards) {
	this_hand = this;
	cards.forEach(function(card) {
		let found = false;
		for(let i in this_hand['cardValueCount']) {
			if(this_hand['cardValueCount'][i][0] == card) {
				this_hand['cardValueCount'][i][1] += 1;
				found = true;
				break;
			}
		} //end for in loop
		if(!found) {
			this_hand['cardValueCount'].push([card, 1]);
		}
	}); //end for each loop
};
// returns hand rank value
Hand.prototype.rank = function() {
	return this.uniqValues == 5 ? this.checkSrtFls.call(this) : this.checkPairs.call(this)
};
//check for straight flush
Hand.prototype.checkSrtFls = function() {
	let isStraight = (this.checkStraight.call(this));
	if(this.isFlush && isStraight) {
		return 9
	} else if(this.isFlush) {
		return 6
	} else if(isStraight) {
		return 5
	} else {
		return 1
	}
};
//check for pairs
Hand.prototype.checkPairs = function() {
	pair_count = this.cardValueCount[0][1];
	//four of kind or full house
	if(this.uniqValues === 2) {
		return pair_count == 4 ? 8 : 7
	}
	//three of kind and two pair
	else if(this.uniqValues === 3) {
		return pair_count == 3 ? 4 : 3
	}
	//pair
	else {
		return 2
	}
};
//check for straight hand
Hand.prototype.checkStraight = function() {
	return this.cardValueCount[0][0] - this.cardValueCount[4][0] === 4;
};
Hand.prototype.toString = function() {
	const strings = ['nil', 'High Card', 'Pair', "Two pair", "Three of a Kind", "Straight", "Flush", "Full House", "Four of a Kind", "Straight Flush"];
	let cards = this.fiveCards.map(function(card) {
		pokerCard = new Card(card);
		return " " + pokerCard.string;
	});
	return strings[this.rank_int];
};

function sort_poker_hands(hand1, hand2) {
	if(hand1.rank_int < hand2.rank_int) {
		return -1
	} else if(hand1.rank_int > hand2.rank_int) {
		return 1;
	}
	//tie-breaker
	else {
		for(let i = 0; i < hand1.cardValueCount.length; i++) {
			if(hand1.cardValueCount[i][0] < hand2.cardValueCount[i][0]) {
				return 1
			} else if(hand1.cardValueCount[i][0] > hand2.cardValueCount[i][0]) {
				return -1
			}
		}
		return 3;
	}
}
//create deck arr [0..9]
//just need nine cards for two players
let deck = [],
	i, player_hand, computer_hand,
	allPlayerHands, allComputerHands, playersHands,
	computerHands, playerBest, computersBest, winner,
	player_full_hand, computer_full_hand, playerMoney;
playerMoney = 100;

function createHands() {
	//get and create all hand combination
	player_hand = [deck.pop(), deck.pop()];
	computer_hand = [deck.pop(), deck.pop()];
	player_full_hand = player_hand.concat(deck);
	computer_full_hand = computer_hand.concat(deck);
	allPlayerHands = k_combinations(player_full_hand, 5);
	allComputerHands = k_combinations(computer_full_hand, 5);
	//get best hands from each player -- currently not working correctly - issue with sorting
	playersHands = allPlayerHands.map(function(hand) {
		return new Hand(hand)
	});
	computerHands = allComputerHands.map(function(hand) {
		return new Hand(hand)
	});
	playerBest = playersHands.sort(sort_poker_hands)[0];
	computersBest = computerHands.sort(sort_poker_hands)[0];
}

function show_cards(hand_el, hand) {
	for(i = 0; i < hand.length; i++) {
		if(hand[i] == null) {
			hand_el[i].innerHTML = '&#10042';
		} else {
			let current_card = new Card(hand[i]);
			hand_el[i].innerHTML = current_card.string;
		}
	}
}
const allCards = document.getElementsByClassName('card');
show_cards(allCards, [null, null, null, null, null, null, null, null, null]);
const sharedCards = document.getElementsByClassName("table-card");
const playersCards = document.getElementsByClassName("player-card");
const computersCards = document.getElementsByClassName("computer-card");
$(document).on('click', '.deal', function(e) {
	deck = [];
	while(deck.length <= 8) {
		let randomNum = Math.floor((Math.random() * 52));
		//if not in deck
		if(deck.indexOf(randomNum) == -1) {
			deck.push(randomNum)
		}
	}
	createHands();
	show_cards(sharedCards, [null, null, null, null, null]);
	show_cards(playersCards, player_hand);
	show_cards(computersCards, [null, null]);
	document.getElementById("pregame-controls").style.display = 'none';
	document.getElementById("in-game-controls").style.display = 'flex';
	document.getElementById("player-message").innerHTML = 'Place Bet';
	document.getElementById("player-hand").innerHTML = "";
	document.getElementById("computer-hand").innerHTML = "";
});

function winningMessage(int) {
	winner = sort_poker_hands(playerBest, computersBest);
	if(winner === 1) {
		playerMoney += int;
		return "Player Wins";
	} else if(winner === -1) {
		playerMoney -= int;
		return "Computer Wins"
	} else {
		return "Tie";
	}
}

function displayResults(int) {
	document.getElementById("player-message").innerHTML = winningMessage(int);
	document.getElementById("player-hand").innerHTML = "Player has: " + playerBest.toString();
	document.getElementById("computer-hand").innerHTML = "Computer has: " + computersBest.toString();
	document.getElementById("player-money").innerHTML = "£" + playerMoney;
}
$(document).on('click', '.bet, .raise, .allIn ', function(e) {
	if(playerMoney <= 0) {
		alert('no more money. £100 has been added to your account');
		playerMoney = 100;
		document.getElementById("player-money").innerHTML = "£" + playerMoney;
		return;
	}
	let clickedClass = $(this).attr("class");
	if(clickedClass === "bet") {
		my_bet = 5;
	} else if(clickedClass = "raise") {
		my_bet = 20;
	} else if(clickedClass = "allIn") {
		my_bet = playerMoney;
	}
	show_cards(sharedCards, deck);
	show_cards(computersCards, computer_hand);
	document.getElementById("pregame-controls").style.display = 'flex';
	document.getElementById("in-game-controls").style.display = 'none';
	displayResults(my_bet);
});