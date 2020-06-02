// All code should be written in this file.

let playerOneMoveOneType,
    playerOneMoveTwoType,
    playerOneMoveThreeType,
    playerTwoMoveOneType,
    playerTwoMoveTwoType,
    playerTwoMoveThreeType,
    playerOneMoveOneValue,
    playerOneMoveTwoValue,
    playerOneMoveThreeValue,
    playerTwoMoveOneValue,
    playerTwoMoveTwoValue,
    playerTwoMoveThreeValue;

    function setPlayerMoves(player, moveOneType, moveOneValue, moveTwoType, moveTwoValue, moveThreeType, moveThreeValue) {
        if (!moveOneType || !moveOneValue || !moveTwoType || !moveTwoValue || !moveThreeType || !moveThreeValue) {
            return;
        }

        if (!isValidMoveType(moveOneType) || !isValidMoveType(moveTwoType) || !isValidMoveType(moveThreeType)){
            return;
        }

        if (!isValidMoveValue(moveOneValue) || !isValidMoveValue(moveTwoValue) || !isValidMoveValue(moveThreeValue)) {
            return;
        }

        if (moveOneValue + moveTwoValue + moveThreeValue > 99){
            return;
        }
        if(player === 'palyer one'){
            playerOneMoveOneType = moveOneType;
            playerOneMoveOneValue = moveOneValue;
            playerTwoMoveTwoType = moveTwoType;
            playerTwoMoveTwoValue  = moveTwoValue;
            playerThreeMoveThreeType = moveThreeType;
            playerThreeMoveThreeValue = moveThreeValue;
        }

    }

    function isValidMoveType(moveType){
        return (moveType === 'rock') || (moveType === 'paper') || (moveType === 'scissors');
    }

    function isValidMoveValue(moveValue){
        return (moveValue >= 1) && (moveValue <= 99);
    }