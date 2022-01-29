// FEATURES FOR THE GAME
// Allow the player to continually be prompted to enter their guess at the secret number until they guess correctly
// IF there is a wrong guess tell them if it was too high or too low
// IF guessed correctly display an alert and congratulate them, along with how many guesses it took to guess the number

// TASKS
// add a prevGuesses property to the game obj initialized to an empty array
// add getGuess method to game that prompts the player to enter a guess "Enter a guess between [smallestNum] and [biggestNum]"
//ensure that the getGuess method returns a value that isnt a string and is between the smallest and biggest number






const game = {
  title: 'Guess the Number!',
  largestNum: 100,
  smallestNum: 1,
  secretNum: null,
  play: function() {
    this.secretNum = Math.floor(Math.random() * 
      (this.largestNum - this.smallestNum + 1)) + this.smallestNum
      return this.secretNum;
    },
    getGuess: function() {
      let guess = null

      while (isNaN (guess) || guess < this.smallestNum || guess > this.largestNum) {
        guess = parseInt(prompt(`'Enter a guess between' ${this.smallestNum} 'and' ${this.largestNum}`))
      }
      return guess
    }, 
    
  }
game.prevGuesses = []






game.getGuess()







console.log(game)