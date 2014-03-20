/*
 Name: Angelica Dinh
 Date: March 19, 2014
 Class: PWA1-01
 Assignment: Goal4: The Duel - Part 3
 */

//Fight Game, part 3

//self-executing function
(function(){

     console.log('Fight!!!');

     //player = name, damage, health
     var players = [
          {name: "Spiderman", damage: 20, health: 100},
          {name: "Batman", damage: 20, health: 100}
     ];

     //initial round
     var round = 1;

    //player names & healths are displayed on screen
    var screenF1 = document.getElementById('kabal');
    screenF1.innerHTML = players[0].name + ":" + players[0].health;

    var screenF2 = document.getElementById('kratos');
    screenF2.innerHTML = players[1].name + ":" + players[1].health;


    var currentRound = document.querySelector('#round');

    var btn = document.querySelector('#fight_btn');
    console.log(btn);


    function fight(){

         var minDamage1 = players[0].damage * .5; //min damage should be 1/2 the damage 20 * .5 = 10
         var minDamage2 = players[1].damage * .5
         var f1 = Math.floor(Math.random()*(players[0].damage-minDamage1)+minDamage1);
         var f2 = Math.floor(Math.random()*(players[1].damage-minDamage2)+minDamage2);
         console.log(f1);
         console.log(f2);

         //damage that was inflicted
         players[0].health -= f1;
         players[1].health -= f2;

         console.log(players[0].name+":" +players[0].health+ " " + players[1].name+":" +players[1].health);

        screenF1.innerHTML = players[0].name + ":" + players[0].health;
        screenF2.innerHTML = players[1].name + ":" + players[1].health;
        round ++;
        currentRound.innerHTML = 'Round' + round + 'is Over!';
         var results = winnerCheck();
         console.log(results);
         /*if(results === "no winner"){
             round++; //if no winner add another round
         }else{
             output1.innerHTML=winner;
             btn.removeEventListener('click', onClick);
         };*/

     };

     function winnerCheck(){
     var result ="no winner";

     if(players[0].health < 1 && players[1].health < 1){
         screenF1.innerHTML = '';
         screenF2.innerHTML = 'You Both Die';
         btn.innerHTML = 'Done!';
         btn.onclick = function(e){
             console.log('Game Over!');
         };
         result = screenF2;
     }else if(players[0].health >1){
         screenF1.innerHTML = '';
         screenF2.innerHTML = players[1].name + 'Wins!!!';
         btn.innerHTML = 'Done!';
         btn.onclick = function(e){
             console.log('Game Over!');
         };
         result = screenF2;
     }else if(players[1].health<1){
         screenF1.innerHTML = '';
         screenF2.innerHTML = players[0].name + 'Wins!!!';
         btn.innerHTML = 'Done!';
         btn.onclick = function(e){
             console.log('Game Over!');
         };
         result = screenF2;
     }else if(round === 10){
         screenF1.innerHTML = '';
         screenF2.innerHTML = 'Game ends in Tie';
         btn.innerHTML = 'Done!';
         btn.onclick = function(e){
             console.log('Game Over!');
         };
         result = screenF2;
     };
     return result;
 };
    btn.onclick = function(e){
        console.log('program starts');
        fight(); //calling the fight function...program begins here

        e.preventDefault();
        return false;
    };
})();
