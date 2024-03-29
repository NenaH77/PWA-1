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

     var minDamage1 = player1[1] * .5; //min damage should be 1/2 the damage 20 * .5 = 10
     var minDamage2 = player2[1]* .5
     var f1 = Math.floor(Math.random()*(player1[1]-minDamage1)+minDamage1);
     var f2 = Math.floor(Math.random()*(player2[1]-minDamage2)+minDamage2);

     console.log(f1);
     console.log(f2);

     //damage that was inflicted
     player1[2] -= f1;
     player2[2] -= f2;

     console.log(player1[0]+":" +player1[2]+ " " + player2[0]+":" +player2[2]);

     //at end of each round, need to check for winner so we need to call winnerCheck
     var results = winnerCheck();
     console.log(results);

     if(results === "no winner"){
     round++; //if no winner add another round
     alert(player1[0]+":"+player1[2]+" *Round "+round+" Over"+"* "+player2[0]+":"+player2[2]);

     }else{
     alert(results);
     break;
     };

     };
     };

     function winnerCheck(){
     var result ="no winner";

     if(player1[2] < 1 && player2[2] < 1){  //needed to change if(player1[0]< 1 && player2[0] < 1) to ...
     result="You Both Die";                 //.. if(player1[2] < 1 && player2[2] < 1).    player1[2]represents health
     }else if(player1[2] < 1){
     result = player2[2]+ "Wins!!";
     }else if(player2[2] < 1){
     result = player1[2]+ "Wins!!";
     };
     return result;
     };

     console.log('program starts');
     fight(); //calling the fight function...program begins here

})();
