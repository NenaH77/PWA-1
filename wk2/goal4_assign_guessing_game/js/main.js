/**
 * GUESSING GAME:
 *
 * Created By: Angelica Dinh
 * Date: March 19, 2014
 * Class: PWA1-01
 * Assignment: Goal4: Guessing Game
 */

//Game variables
(function (){
    var genNumber = Math.floor(Math.random()* 10 + 1); //generates #'s from  1-10
    //console.log(genNumber);

    //Dom(html) elements
    var dom = {
        button: document.querySelector('button'),
        output: document.querySelector('#output'),
        input: document.querySelector('#input')};

    //console.log(dom.button);
    //console.log(dom.input);
    //console.log(dom.output);

    var guesses = 3;

    //Event that calls the onClick function enter the button is clicked
    dom.button.addEventListener('click', onClick);

    function onClick(e){

        //console.log(dom.input.value);
        //console.log(onClick);
        validate();

        e.preventDefault();//prevents default/stop action from happening
        return true;//must be true for button to be enabled
    };

    //function validates if the input is a number between 1 - 10
    function validate(){
        var input = dom.input.value //.value is property of input that holds the text

        if(input < 1 || input > 10){
            dom.output.innerHTML = 'Invalid! Enter a number between 1-10';
        }else if(isNaN(input)){
            dom.output.innerHTML = 'Invalid! Enter a number';//isNaN is not a number. Only numbers are accepted
        }else if(input == " "){
            dom.output.innerHTML = 'Invalid! Enter a value';
        }else{
            play(input);//play function from below is called here
        }
    };

    function play(guessNum){//function play. Increase guessing. Decrease chances remaining.
        if(guessNum < genNumber){
            guesses--;
            dom.output.innerHTML = 'Your guess is too low! You have ' + guesses + 'guesses left!';
        }else if(guessNum > genNumber){
            guesses--;
            dom.output.innerHTML = 'Your guess is too high! You have '+ guesses + 'guesses left!';
        }else if(guessNum === genNumber){
            dom.output.innerHTML = 'You win!. Your guess is correct';
            dom.button.removeEventListener('click', onClick);//Game Over therefore EventListener no longer needed
        }else{
            dom.output.innerHTML = 'You guessed right!';
        }
        if(guesses == 0){
            dom.button.removeEventListener('click', onClick);//Game Over so EventListener no longer needed
            dom.output.innerHTML = 'Game Over';
        }
    };
})();