// Paul Caldwell
// 2/6/14
// Duel week 1
(function(){

    console.log("Fight!");

    //player name
    var playerOneName = "Lytes";
    var playerTwoName = "Pints";

    //player health
    var playerOneHealth = 100;
    var playerTwoHealth = 100;

    //player damage
    var playerOneDamage = 50;
    var playerTwoDamage = 50;

    var round=1;

    function fight(){
        alert(playerOneName+":"+playerOneHealth+"  *START*  "+playerTwoName+":"+playerTwoHealth);
        for (var i = 0; i < 10; i++)
        {
            //to get random number- Math.floor(Math.random()*(max - min)+min);
            var minDamage1 = playerOneDamage * .5;
            var minDamage2 = playerTwoDamage * .5;
            var f1 = Math.floor(Math.random()*(playerOneDamage-minDamage1)+minDamage1);
            var f2 = Math.floor(Math.random()*(playerTwoDamage-minDamage2)+minDamage2);

            //damage taken
            playerOneHealth-=f1;
            playerTwoHealth-=f2;

          //check if winner if not change round
            var result = winnerCheck();
            console.log(result);
            if (result==="no winner")
            {
                round++;
                alert(playerOneName+":"+playerOneHealth+"  *Round "+round+" Over* "+playerTwoName+":"+playerTwoHealth);

            } else{
                alert(result);
                break;
            };

          };
    };

    function winnerCheck(){
        var result="no winner";
        if (playerOneHealth<1 && playerTwoHealth<1)
        {
            result = "Womp Womp Womp, Both Die";
        } else if(playerOneHealth<1){
            result =playerTwoName+" Wins!"
        } else if (playerTwoHealth<1)
        {
            result = playerOneName+" Wins!"
        };
       return result;
    };

    fight();

})();