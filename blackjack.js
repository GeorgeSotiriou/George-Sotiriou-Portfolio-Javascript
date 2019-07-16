
// variables area

const dealButton = document.getElementById("deal");
const hitButton = document.getElementById("hit");
const stopButton = document.getElementById("stop");

const resultText = document.querySelector(".result");
const playerCount = document.querySelector(".player-count");
const dealerCount = document.querySelector(".dealer-count");

const betTen = document.getElementById("tenB");
const betFifty = document.getElementById("fiftyB");
const betHalf = document.getElementById("halfB");
const allIn = document.getElementById("allin");

const newGame = document.querySelector(".newGame");

const balance = document.querySelector(".balance");

const cardPlayer = document.querySelector('.card-player');
const cardDealer = document.querySelector('.card-dealer');
const deck = [
           'cards/2_of_hearts.png',
           'cards/3_of_hearts.png',
           'cards/4_of_hearts.png',
           'cards/5_of_hearts.png',
           'cards/6_of_hearts.png',
           'cards/7_of_hearts.png',
           'cards/8_of_hearts.png',
           'cards/9_of_hearts.png',
           'cards/10_of_hearts.png',
           'cards/jack_of_hearts2.png',
           'cards/queen_of_hearts2.png',
           'cards/king_of_hearts2.png',
           'cards/ace_of_hearts.png',
           'cards/2_of_diamonds.png',
           'cards/3_of_diamonds.png',
           'cards/4_of_diamonds.png',
           'cards/5_of_diamonds.png',
           'cards/6_of_diamonds.png',
           'cards/7_of_diamonds.png',
           'cards/8_of_diamonds.png',
           'cards/9_of_diamonds.png',
           'cards/10_of_diamonds.png',
           'cards/jack_of_diamonds2.png',
           'cards/queen_of_diamonds2.png',
           'cards/king_of_diamonds2.png',
           'cards/ace_of_diamonds.png',
           'cards/2_of_clubs.png',
           'cards/3_of_clubs.png',
           'cards/4_of_clubs.png',
           'cards/5_of_clubs.png',
           'cards/6_of_clubs.png',
           'cards/7_of_clubs.png',
           'cards/8_of_clubs.png',
           'cards/9_of_clubs.png',
           'cards/10_of_clubs.png',
           'cards/jack_of_clubs2.png',
           'cards/queen_of_clubs2.png',
           'cards/king_of_clubs2.png',
           'cards/ace_of_clubs.png',
           'cards/2_of_spades.png',
           'cards/3_of_spades.png',
           'cards/4_of_spades.png',
           'cards/5_of_spades.png',
           'cards/6_of_spades.png',
           'cards/7_of_spades.png',
           'cards/8_of_spades.png',
           'cards/9_of_spades.png',
           'cards/10_of_spades.png',
           'cards/jack_of_spades2.png',
           'cards/queen_of_spades2.png',
           'cards/king_of_spades2.png',
           'cards/ace_of_spades.png'
          ];


let playerHand = 0;
let dealerHand = 0;
let playerChips = 1000;

let betAmount = 0;

//------------------------------------------------------------------
//functions area

// User random card generator function. 

function dealPlayer() {

  let randomCard = Math.floor(Math.random() * deck.length);
  cardPlayer.src = deck[randomCard];
  
  if(deck[randomCard] == deck[0] || deck[randomCard] == deck[13] || deck[randomCard] == deck[26] || deck[randomCard] == deck[39])
  {
    addCardsPlayer(2);
  }
  else if(deck[randomCard] == deck[1] || deck[randomCard] == deck[14] || deck[randomCard] == deck[27] || deck[randomCard] == deck[40])
  {
	addCardsPlayer(3);
  }
  else if(deck[randomCard] == deck[2] || deck[randomCard] == deck[15] || deck[randomCard] == deck[28] || deck[randomCard] == deck[41])
  {
	addCardsPlayer(4);
  }
  else if(deck[randomCard] == deck[3] || deck[randomCard] == deck[16] || deck[randomCard] == deck[29] || deck[randomCard] == deck[42])
  {
	addCardsPlayer(5);
  }
  else if(deck[randomCard] == deck[4] || deck[randomCard] == deck[17] || deck[randomCard] == deck[30] || deck[randomCard] == deck[43])
  {
	addCardsPlayer(6);
  }
  else if(deck[randomCard] == deck[5] || deck[randomCard] == deck[18] || deck[randomCard] == deck[31] || deck[randomCard] == deck[44])
  {
	addCardsPlayer(7);
  }
  else if(deck[randomCard] == deck[6] || deck[randomCard] == deck[19] || deck[randomCard] == deck[32] || deck[randomCard] == deck[45])
  {
	addCardsPlayer(8);
  }
  else if(deck[randomCard] == deck[7] || deck[randomCard] == deck[20] || deck[randomCard] == deck[33] || deck[randomCard] == deck[46])
  {
	addCardsPlayer(9);
  }
  else if(deck[randomCard] == deck[8] || deck[randomCard] == deck[21] || deck[randomCard] == deck[34] || deck[randomCard] == deck[47])
  {
	addCardsPlayer(10);
  }
  else if(deck[randomCard] == deck[9] || deck[randomCard] == deck[22] || deck[randomCard] == deck[35] || deck[randomCard] == deck[48])
  {
	addCardsPlayer(10);
  }
  else if(deck[randomCard] == deck[10] || deck[randomCard] == deck[23] || deck[randomCard] == deck[36] || deck[randomCard] == deck[49])
  {
	addCardsPlayer(10);
  }
  else if(deck[randomCard] == deck[11] || deck[randomCard] == deck[24] || deck[randomCard] == deck[37] || deck[randomCard] == deck[50])
  {
	addCardsPlayer(10);
  }
  else if(deck[randomCard] == deck[12] || deck[randomCard] == deck[25] || deck[randomCard] == deck[38] || deck[randomCard] == deck[51])
  {
	addCardsPlayer(11);
  }

}

// dealer random card generator function

function stop_button() {
	let randomnn = Math.floor(Math.random() * deck.length);

	cardDealer.src = deck[randomnn];

	if(deck[randomnn] == deck[0] || deck[randomnn] == deck[13] || deck[randomnn] == deck[26] || deck[randomnn] == deck[39])
	{
		addCardsDealer(2);
	}
	else if(deck[randomnn] == deck[1] || deck[randomnn] == deck[14] || deck[randomnn] == deck[27] || deck[randomnn] == deck[40])
	{
		addCardsDealer(3);
	}
	else if(deck[randomnn] == deck[2] || deck[randomnn] == deck[15] || deck[randomnn] == deck[28] || deck[randomnn] == deck[41])
	{
		addCardsDealer(4);
	}
	else if(deck[randomnn] == deck[3] || deck[randomnn] == deck[16] || deck[randomnn] == deck[29] || deck[randomnn] == deck[42])
	{
		addCardsDealer(5);
	}
	else if(deck[randomnn] == deck[4] || deck[randomnn] == deck[17] || deck[randomnn] == deck[30] || deck[randomnn] == deck[43])
	{
		addCardsDealer(6);
	}
    else if(deck[randomnn] == deck[5] || deck[randomnn] == deck[18] || deck[randomnn] == deck[31] || deck[randomnn] == deck[44])
	{
		addCardsDealer(7);
	}
	else if(deck[randomnn] == deck[6] || deck[randomnn] == deck[19] || deck[randomnn] == deck[32] || deck[randomnn] == deck[45])
	{
		addCardsDealer(8);
	}
	else if(deck[randomnn] == deck[7] || deck[randomnn] == deck[20] || deck[randomnn] == deck[33] || deck[randomnn] == deck[46])
	{
		addCardsDealer(9);
	}
	else if(deck[randomnn] == deck[8] || deck[randomnn] == deck[21] || deck[randomnn] == deck[34] || deck[randomnn] == deck[47])
	{
		addCardsDealer(10);
	}
    else if(deck[randomnn] == deck[9] || deck[randomnn] == deck[22] || deck[randomnn] == deck[35] || deck[randomnn] == deck[48])
	{
		addCardsDealer(10);
	}
	else if(deck[randomnn] == deck[10] || deck[randomnn] == deck[23] || deck[randomnn] == deck[36] || deck[randomnn] == deck[49])
	{
		addCardsDealer(10);
	}
	else if(deck[randomnn] == deck[11] || deck[randomnn] == deck[24] || deck[randomnn] == deck[37] || deck[randomnn] == deck[50])
	{
		addCardsDealer(10);
	}
	else if(deck[randomnn] == deck[12] || deck[randomnn] == deck[25] || deck[randomnn] == deck[38] || deck[randomnn] == deck[51])
	{
		addCardsDealer(11);
	}
}

// Player and dealer hand count. The parameters hand and dhand are being replaced by the value of random card dealt, 
// while the function is being called inside each if statement in the above functions, adding the value of the hand 
// to the player's or dealer's hand. Once the count has reached a certain point, the corresponding action will occur.

function addCardsPlayer(hand) {

  playerHand += hand;
  playerCount.innerHTML = ("Player count:" + playerHand);
  resultText.classList.add('resultQ');

  if(playerHand > 21) {
    resultText.innerHTML = (`Dealer wins. Play again!  ↓`);
    
  }
  else if(playerHand == 21) {
    resultText.innerHTML = ("Blackjack! Play again!  ↓");
  }

}


function addCardsDealer(dhand) {

  dealerHand += dhand;
  dealerCount.innerHTML = ("Dealer count:" + dealerHand);
  resultText.classList.add('resultQ');

  if(dealerHand > 21) {
	resultText.innerHTML = ("Player wins! Next game!  ↓");
  }
  else if(dealerHand == 21) {
	resultText.innerHTML = ("Dealer hit Blackjack.. Play again! ↓");
  }
  else if(dealerHand == playerHand && dealerHand > 16) {
	resultText.innerHTML = ("It's a push. Play again!   ↓");
  }
  else if(dealerHand > playerHand && dealerHand < 21 && dealerHand > 16) {
	resultText.innerHTML = ("Dealer wins.. Play again!  ↓");
  }
  else if(dealerHand < playerHand && dealerHand > 16) {
	resultText.innerHTML = ("Player wins! Next game!  ↓");
  }

}

// This small function allows the dealer's cards to be dealt automatically based on the set of rules that are predefined.
// The dealer will have its cards dealt instantly until it reaches a certain hand count ( if 17 card count is reached, then 
// there will be no more cards dealt. The dealer can surpass 17 by drawing from 16 and below. The two above functions contain
// all the rules for the case in which the dealer's hand count is more than 17)

function dealerTurn() {
  while (dealerHand < 17) {
	stop_button();
  }
}


//------------------------------------------------------------------
// Button interactions functions


function iniciate() {
  playerHand = 0;
  dealerHand = 0;
  resultText.classList.add('resultQ');

  dealPlayer();
  stop_button();
  resultText.innerHTML = "Now playing...";
  balance.innerHTML = "Player chips :    " + playerChips;
}

function new_game() {
  resultText.classList.add('resultQ');
	resultText.innerHTML = ("Select your bet.");
	balance.innerHTML = "Player chips :    " + playerChips;
	cardPlayer.src = cardPlayer;
	cardDealer.src = cardDealer;
	playerCount.innerHTML = ("Player count:" + 0);
	dealerCount.innerHTML = ("Dealer count:" + 0);
}


function bet_Ten() {
	playerChips -= 10;
  betAmount = 10;
  resultText.classList.add('resultQ');
  resultText.innerHTML = "You bet 10. Select Deal!";
}

function bet_Fifty() {
	playerChips -= 50;
  betAmount = 50;
  resultText.classList.add('resultQ');
  resultText.innerHTML = "You bet 50. Select Deal!";
}

function bet_TwoHundred() {
	playerChips -= 200;
  betAmount = 200;
  resultText.classList.add('resultQ');
  resultText.innerHTML = "You bet 200. Select Deal!";
}

function bet_fiveHundred() {
	playerChips -= 500;
  betAmount = 500;
  resultText.classList.add('resultQ');
  resultText.innerHTML = "You bet 500. Select Deal!";
}

// This function will run only if the dealer's count is identical to the user's. (tie)

function push() {
  if(dealerHand == playerHand && dealerHand > 16) {
    playerChips += betAmount;
  }
  balance.innerHTML = "Player chips :    " + playerChips;
}


// The chips are being removed from the user once the bet amount has been selected and 'deal' has been iniciated. There is no
// lose function because if the user loses, the amount that was removed from the balance will simply not return. On the other hand,
// if the user wins, the bet amount will return to the balance x2.
 
function win() {
    if(playerHand == 21 || dealerHand > 21 || (dealerHand < playerHand && dealerHand > 16)) {
    	//resultText.innerHTML = ("Player wins");
    	playerChips += (betAmount*2);
    }
    balance.innerHTML = "Player chips :    " + playerChips;
}



function main() {
  dealButton.addEventListener('click', () => {
	  iniciate();
  })

  hitButton.addEventListener('click', () => {
	  dealPlayer();
  })

  stopButton.addEventListener('click', () => {
	  dealerTurn();
  })

  betTen.addEventListener('click', () => {
	  console.log("you bet 10");
	  bet_Ten();
	})

	betFifty.addEventListener('click', () => {
	  console.log("you bet fifty");
	  bet_Fifty();
	})

  betHalf.addEventListener('click', () => {
		console.log("you go all in");
    bet_TwoHundred();
	})

	allIn.addEventListener('click', () => {
		console.log("you go all in");
    bet_fiveHundred();
	})

	newGame.addEventListener('click', () => {
		console.log("Next game!");
    new_game();
    win();
    push();
  })

}


main();








//let p = new Promise((resolve, reject) => {
  //playerChips += 10;
//})