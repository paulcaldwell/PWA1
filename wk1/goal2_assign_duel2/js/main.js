// Paul Caldwell
// 2/13/14
// Duel week 2
(function(){

    console.log("Fight!");

// set array as var array = ['name', health, damage],

    var playerOneArr = ['Lytes', 100, 50];
    var playerTwoArr = ['Pints', 100, 50];
   

/*p1
    p1 damage use playerOneArr[2]
    p1 name playerOneArr[0]
    p1 health playerOneArr[1]
    
    p2 name use playerTwoArr[0]
    p2 health use playerTwoArr[1]
    p2 damage use playerTwoArr[2]   


   //player name
    var playerOneArr[0] = "Lytes";
    var playerTwoArr[0] = "Pints";

    //player health
    var playerOneArr[1] = 100;
    var playerTwoArr[1] = 100;

    //player damage
    var playerOneArr[2] = 50;
    var playerTwoArr[2] = 50;
  */
    var round=1;

    function fight(){
        alert(playerOneArr[0]+":"+playerOneArr[1]+"  *START*  "+playerTwoArr[0]+":"+playerTwoArr[1]);
        for (var i = 0; i < 10; i++)
        {
            //to get random number- Math.floor(Math.random()*(max - min)+min);
            var minDamage1 = playerOneArr[2] * .5;
            var minDamage2 = playerTwoArr[2] * .5;
            var f1 = Math.floor(Math.random()*(playerOneArr[2]-minDamage1)+minDamage1);
            var f2 = Math.floor(Math.random()*(playerTwoArr[2]-minDamage2)+minDamage2);

            //damage taken
            playerOneArr[1]-=f1;
            playerTwoArr[1]-=f2;

          //check if winner if not change round
            var result = winnerCheck();
            console.log(result);
            if (result==="no winner")
            {
                round++;
                alert(playerOneArr[0]+":"+playerOneArr[1]+"  *Round "+round+" Over* "+playerTwoArr[0]+":"+playerTwoArr[1]);

            } else{
                alert(result);
                break;
            };

          };
    };

    function winnerCheck(){
        var result="no winner";
        if (playerOneArr[1]<1 && playerTwoArr[1]<1)
        {
            result = "Womp Womp Womp, Both Die";
        } else if(playerOneArr[1]<1){
            result =playerTwoArr[0]+" Wins!"
        } else if (playerTwoArr[1]<1)
        {
            result = playerOneArr[0]+" Wins!"
        };
       return result;
    };

    fight();

})();