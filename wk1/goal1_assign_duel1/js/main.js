/*
 Name: Angelica Dinh
 Date: Nov. 2, 2013  
 Class: PWA1-01
 Assignment: Goal 1_Duel Fight
*/

//Fight Game

// self-executing function
(function(){
	
    console.log("FIGHT!!!");

    //Player Name
    var playerOneName = "Spiderman";
    var playerTwoName = "Batman";

    //Player Damage
    var player1Damage = 20;
    var player2Damage = 20;

    //Player Health
    var playerOneHealth = 100;
    var playerTwoHealth = 100;

    //Initiate Round
    var round=0;

    function fight(){
    	console.log('in the fight function');
        alert(playerOneName+":"+playerOneHealth+"  *START*  "+playerTwoName+":"+playerTwoHealth);
        
        for (var i = 0; i < 10; i++){
            //random formula is - Math.floor(Math.random() * (max - min) + min);
            var minDamage1 = player1Damage * .5;
            var minDamage2 = player2Damage * .5;
            var f1 = Math.floor(Math.random()*(player1Damage-minDamage1)+minDamage1);
            var f2 = Math.floor(Math.random()*(player2Damage-minDamage2)+minDamage2);

			console.log(f1);
			console.log(f2);
			
			//Inflict Damage
            playerOneHealth-=f1;
            playerTwoHealth-=f2;

            console.log(playerOneHealth);
            console.log(playerTwoHealth);
            
            console.log(playerOneName+": "+playerOneHealth + " " + playerTwoName+":"+playerTwoHealth);

            //check for victor
            var result = winnerCheck();
            console.log(result);
            if (result==="no winner"){
                round++;
                alert(playerOneName+":"+playerOneHealth+"  *ROUND "+round+" OVER"+"*  "+playerTwoName+":"+playerTwoHealth);
            }else{
                alert(result);
                break;
            };
        };
    };

//use the conditional statement

    function winnerCheck(){
        var result="no winner";
        if (playerOneHealth<1 && playerTwoHealth<1){
            result = "You Both Die";
        }else if(playerOneHealth<1){
            result =playerTwoName+" WINS!!!"
        }else if (playerTwoHealth<1){
            result = playerOneName+" WINS!!!"
        };
       return result;
    };
//wnt 2 rtn so it rtns info bck 2 the pt where the winner chck was called
    /*******  Program gets started below *******/
    fight();

})();