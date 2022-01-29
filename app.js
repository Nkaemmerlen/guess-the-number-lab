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
      // return this.secretNum;
    do {
      this.prevGuesses.push(this.getGuess())
      this.highLowRight()
      //^ DO push the previous guesses into the array and run the highLowRight function to compare the current guess to the secretNum
    } 
      while (this.prevGuesses[this.prevGuesses.length -1] !== this.secretNum)
      //^ DO above while current guess doesnt equal the secret num
      // return this.sercretNum
    },
    getGuess: function() {
      let originalGuess = 0
      //^ assigning the original guess a value of 0 to start the functions
      while (originalGuess < this.smallestNum || originalGuess > this.largestNum || isNaN (originalGuess)) {
        //^WHILE the guess is less than the smallest number possible, bigger than the biggest number possible, and is a string do below 
        originalGuess = parseInt(prompt(`Enter a guess between ${this.smallestNum} and ${this.largestNum}`))
        // prompting the user to enter in an appropriate guess that abides by the set rules
      }
      return originalGuess
      // console.log(game.prevGuesses.length)
    }, 
    highLowRight: function() {
      //^ the function to compare the guess to the random number. if it is right/low/high
      let txt = ''
      //^assigning text to an empty string
      if (this.prevGuesses[this.prevGuesses.length - 1] === this.secretNum) {
        //^ IF the last inserted guess equals the secret number
        txt = `YAY! You guessed correctly! It took you ${this.prevGuesses.length} tries!`
        alert(txt)
        //^ re assigning txt to the you won message and sending out a browser alert()
      } 
      else if (this.prevGuesses[this.prevGuesses.length -1] > this.secretNum){
        //^ comapring the last inserted guess to the secret number and if it is higher
        txt = `your guess was too ⇧HIGH⇧, here are you previous guesses: ${this.prevGuesses}`
        alert(txt)
        //^ Re assigning txt to the higher message and sending a browser alert if it is along with the prev guesses
      } 
      else {
        txt = `Your guess was too ⇩LOW⇩, here are your previous guesses: ${this.prevGuesses}` 
        alert(txt)
        //^ if it is not equal to or higher by proccess of elimination it is lower and elert too low with the prev guesses
      }
    }
  }


game.prevGuesses = []


game.play()







//console.log(game)