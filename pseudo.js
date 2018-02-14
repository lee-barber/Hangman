// # Rules
// 6 initial attempts to guess word correctly
// Player wins if he/she guesses word before 6 attemps are used
// Player loses when attempts == 0

// # Definitions
// array of words = wordbank
// array of letters = alphabet
// attempts remaining = 6

// # Functionality
// Game starts upon page load

// # Display
// Rules
// Blank spaces
// Alphabet
// Number of attempts

// As long as (attempts > 0){
// Game is live...
// 	Display to user: "Guess a letter"
// 	User guesses letter by clicking letter in displayed alphabet
// 	if (letter exists word){
// 		for each instance of that letter in word{
// 			change blank space to guessed letter
// 			mark letter as used in the alphabet and make it unclickable
// 		}
// 	}
// 	elseif (letter does NOT exist in word){
// 			mark letter as used in the alphabet and make it unclickable
// 			deduct 1 from number of attempts remaining
// 	}
	
// 	if (guessed word == current word from wordbank){
// 		Stop program / exit loop
// 		Display "Game is over. You win."
// 		Display exit options
// 	}
// }
// Otherwise{
// 	Stop program / exit loop
// 	Display "Game is over. You lose."
// 	Display exit options
// }
