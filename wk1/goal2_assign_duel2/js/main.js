/*
 Name: Angelica Dinh
 Date: March 11, 2014
 Class: PWA1-01
 Assignment: Goal 2_Duel Fight
 */

//Fight Game, part 2

//self-executing function
(function(){

     console.log('Fight!!!');

     //player name, damage, health
     var player1 = ["Spiderman", 20, 100]; //index 0,1,2
     var player2 = ["Batman", 20, 100]; //index 0,1,2


     //initial round
     var round = 1;

     function fight(){
     console.log('in the fight function');

     alert(player1[0]+":"+player1[2]+" *START* "+player2[0]+":"+player2[2]);

     for(var i=0; i < 10; i++){
     //random formula is - Math.floor(Math.random() * (max-min) + min);
     //Math.random number ranges from 0 to 1

     var minDamage1 = damage1 * .5; //min damage should be 1/2 the damage 20 * .5 = 10
     var minDamage2 = damage2 * .5
     var f1 = Math.floor(Math.random()*(player1[1]-minDamage1)+minDamage1);
     var f2 = Math.floor(Math.random()*(damage2-minDamage2)+minDamage2);

     console.log(f1);
     console.log(f2);

     //damage that was inflicted
     health1 -= f1;
     health2 -= f2;

     console.log(player1+":" +health1+ " " + player2+":" +health2);

     //at end of each round, need to check for winner so we need to call winnerCheck
     var results = winnerCheck();
     console.log(results);

     if(results === "no winner"){
     round++; //if no winner add another round
     alert(player1+":"+health1+" *Round "+round+" Over"+"* "+player2+":"+health2);

     }else{
     alert(results);
     break;
     };

     };
     };

     function winnerCheck(){
     var result ="no winner";

     if(player1 < 1 && player2 < 1){
     result="You Both Die";
     }else if(player1 < 1){
     result = player2+ "Wins!!";
     }else if(player2 < 1){
     result = player1+ "Wins!!";
     };
     return result;
     };

     console.log('program starts')
     fight(); //calling the fight function...program begins here

})();
