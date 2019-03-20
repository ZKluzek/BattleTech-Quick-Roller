var attackSideEnum = {FRONT:"front", LEFT:"left", RIGHT:"right", REAR:"rear"};
var side = "front";
var direction = document.getElementById("direction");
var possibleHitLocations = {LTORSO: "Left Torso", RTORSO:"Right Torso", CTORSO:"Center Torso", LLEG:"Left Leg", RLEG:"Right Leg", LARM:"Left Arm", RARM:"Right Arm", HEAD:"Head"};

function highlightSide(subSide){
    var attackSideEles = document.getElementsByClassName("attackSides");
    for(var i = 0; i < attackSideEles.length; i++){
        attackSideEles[i].style.background="none";
    }
    document.getElementById(subSide).style.background
}



function setSide(ele){
    var sideId = ele.getAttribute("id");
    if(sideId == "front"){
        attackSideEnum.FRONT;
    }else if(sideId == "left"){
        attackSideEnum.LEFT;
    }else if(sideId == "right"){
        attackSideEnum.RIGHT;
    }else if(sideId == "rear"){
        attackSideEnum.REAR;
    }

}


function rollAttack(side, number, damage, toHit){
    var attackRoll;
    var locationsHit = {LTORSO:0, RTORSO:0, CTORSO:0, LLEG:0, RLEG:0, LARM:0, RARM:0, HEAD:0};
    var hitLocations = [];
    for(var i = 1; i <= number; i++){
        attackRoll = (getRandomRoll(2, 12));
        console.log("attack roll = " + attackRoll +". toHit = " + toHit);
        if(!toHit){
            locationsHit = rollHitLocation(side, locationsHit, hitLocations);
        }else if(attackRoll >= toHit){
            console.log("Attack Success!");
            locationsHit = rollHitLocation(side, locationsHit, hitLocations);
        }
        
    }
    
}

function getRandomRoll(min, max) {
    if( !min || !max ){
        min = 1;
        max = 6;
    }
    var total = 0;
    var randomInt = 0;
    for(var i = 0; i < 2; i++){
        min = Math.ceil(min);
        max = Math.floor(max);
        randomInt = Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is exclusive and the minimum is inclusive
        total += randomInt;
    }
    return total; 
}

function rollMultiple(num){
    var totalNumsRolled = {two:0,three:0,four:0,five:0,six:0,seven:0,eight:0,nine:0,ten:0,eleven:0,twelve:0};
    for(var i = 0; i < num; i++){
        tallyNums(getRandomRoll());
    }
    console.log(totalNumsRolled);
}

function tallyNums(num){
    switch(num){
        case 2:
            totalNumsRolled.two += 1;
            break;
        case 3:
            totalNumsRolled.three += 1;
            break;
        case 4:
            totalNumsRolled.four += 1;
            break;
        case 5:
            totalNumsRolled.five += 1;
            break;
        case 6:
            totalNumsRolled.six += 1;
            break;
        case 7:
            totalNumsRolled.seven += 1;
            break;
        case 8:
            totalNumsRolled.eight += 1;
            break;
        case 9:
            totalNumsRolled.nine += 1;
            break;
        case 10:
            totalNumsRolled.ten += 1;
            break;
        case 11:
            totalNumsRolled.eleven += 1;
            break;
        case 12:
            totalNumsRolled.twelve += 1;
            break;
        default:
            console.error("Invalid roll");
            break;
    }
}

function rollHitLocation(side){
    var roll = getRandomRoll(1,6);
    var locationHit;
    switch(roll){
        case 2:
            if(side == attackSideEnum.FRONT){
                locationHit = possibleHitLocations.CTORSO;
                // Add Critical Here
            }else if(side == attackSideEnum.LEFT){
                locationHit = possibleHitLocations.LTORSO;
                // Add Critical Here
            }else if(side == attackSideEnum.RIGHT){
                locationHit = possibleHitLocations.RTORSO;
                // Add Critical Here
            }
            break;
        case 3:
            if(side == attackSideEnum.FRONT){
                locationHit = possibleHitLocations.RARM;
            }else if(side == attackSideEnum.LEFT){
                locationHit = possibleHitLocations.LLEG;
            }else if(side == attackSideEnum.RIGHT){
                locationHit = possibleHitLocations.RLEG;
            }
            break;
        case 4:
            if(side == attackSideEnum.FRONT){
                locationHit = possibleHitLocations.RARM;
            }else if(side == attackSideEnum.LEFT){
                locationHit = possibleHitLocations.LARM;
            }else if(side == attackSideEnum.RIGHT){
                locationHit = possibleHitLocations.RARM;
            }
            break;
        case 5:
            if(side == attackSideEnum.FRONT){
                locationHit = possibleHitLocations.RLEG;
            }else if(side == attackSideEnum.LEFT){
                locationHit = possibleHitLocations.LARM;
            }else if(side == attackSideEnum.RIGHT){
                locationHit = possibleHitLocations.RARM;
            }
            break;
        case 6:
            if(side == attackSideEnum.FRONT){
                locationHit = possibleHitLocations.RTORSO;
            }else if(side == attackSideEnum.LEFT){
                locationHit = possibleHitLocations.LLEG;
            }else if(side == attackSideEnum.RIGHT){
                locationHit = possibleHitLocations.RLEG;
            }
            break;
        case 7:
            if(side == attackSideEnum.FRONT){
                locationHit = possibleHitLocations.CTORSO;
            }else if(side == attackSideEnum.LEFT){
                locationHit = possibleHitLocations.LTORSO;
            }else if(side == attackSideEnum.RIGHT){
                locationHit = possibleHitLocations.RTORSO;
            }
            break;
        case 8:
            if(side == attackSideEnum.FRONT){
                locationHit = possibleHitLocations.LTORSO;
            }else if(side == attackSideEnum.LEFT){
                locationHit = possibleHitLocations.CTORSO;
            }else if(side == attackSideEnum.RIGHT){
                locationHit = possibleHitLocations.CTORSO;
            }
            break;
        case 9:
            if(side == attackSideEnum.FRONT){
                locationHit = possibleHitLocations.LLEG;
            }else if(side == attackSideEnum.LEFT){
                locationHit = possibleHitLocations.RTORSO;
            }else if(side == attackSideEnum.RIGHT){
                locationHit = possibleHitLocations.LTORSO;
            }
            break;
        case 10:
            if(side == attackSideEnum.FRONT){
                locationHit = possibleHitLocations.LARM;
            }else if(side == attackSideEnum.LEFT){
                locationHit = possibleHitLocations.RARM;
            }else if(side == attackSideEnum.RIGHT){
                locationHit = possibleHitLocations.LARM;
            }
            break;
        case 11:
            if(side == attackSideEnum.FRONT){
                locationHit = possibleHitLocations.LARM;
            }else if(side == attackSideEnum.LEFT){
                locationHit = possibleHitLocations.RLEG;
            }else if(side == attackSideEnum.RIGHT){
                locationHit = possibleHitLocations.LLEG;
            }
            break;
        case 12:
            if(side == attackSideEnum.FRONT){
                locationHit = possibleHitLocations.HEAD;
            }else if(side == attackSideEnum.LEFT){
                locationHit = possibleHitLocations.HEAD;
            }else if(side == attackSideEnum.RIGHT){
                locationHit = possibleHitLocations.HEAD;
            }
            break;
        default:
            console.error("invalid hit location roll! hitLocation = " + roll);
            break;
    }
    console.log("rollHitLocation: " + locationHit);
    return locationHit;
}

function addTohitLocations(locationHit){
    hitLocations.append(locationHit);
    //rolls += ", " + roll;
}

function rollMissilesHit(numMissiles){
    missileTable = {1:2, 20:4};
    console.log(missileTable)
    var missilesHit = missileTable;
}

function getAttackType(){
    var attackType = document.getElementById("cluster")
    return attackType;
}

function quickAttack(){
    var locationHit = rollHitLocation(direction.value);
    console.log(possibleHitLocations.RLEG);
    document.getElementById("rollResults").innerHTML += locationHit +"\n";
}


//highlightSide(side);