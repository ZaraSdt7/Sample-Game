class Game{
public Guesses:number = 0; //Amount of guesses
public CorrectGuesses:number = 0; //Amount of correct guesses
public IncorrectGuesses:number = 0; // Amount of incorrect guesses
public RandomNumber:number = Math.floor(Math.random() * 100) +1; // Random number

public Start():void{
this.Guesses = 0;
this.CorrectGuesses = 0;
this.IncorrectGuesses = 0;
this.RandomNumber = Math.floor(Math.random() *100) +1;
console.log("Game on! the random number is between 0 and 100");    

}
public Guess(numbers:number):void{
    this.Guesses ++;
    if(numbers === this.RandomNumber){
        console.log("Great! You guessed the number!",(this.Guesses));
        this.CorrectGuesses ++
    }else if(numbers > this.RandomNumber){
        console.log("Guessed number is big in random number");
    }else{
        console.log("Guessed number is less random number");
    }

}
public EndGame():void{
if(this.CorrectGuesses ===1){
    console.log("Great job! you guessed the number right in one guesses");
}else{
    console.log("End Game.. you guessed the number rigt",(this.CorrectGuesses));
}
}
}
const game = new Game();
game.Start();
//game.Guess(50);
game.Guess(40);
game.Guess(60)
game.EndGame();