var attackSideEnum = {FRONT:"front", LEFT:"left", RIGHT:"right", REAR:"rear"};
var side = "front";
var direction = document.getElementById("direction");
// var totalNumsRolled = {two:0,three:0,four:0,five:0,six:0,seven:0,eight:0,nine:0,ten:0,eleven:0,twelve:0};

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
    var total = 0;
    var randomInt = 0;
    for(var i = 0; i < 2; i++){
        min = 1;
        max = 6;
        min = Math.ceil(min);
        max = Math.floor(max);
        randomInt = Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is exclusive and the minimum is inclusive
        total += randomInt;
    }
    console.log(total);
    var totalNumsRolled;
    totalNumsRolled.one = 5;
    console.log(totalNumsRolled.one);
    console.log(totalNumsRolled)
    console.log(typeof(totalNumsRolled))
    return total; 
}

function asdf(num){
    switch(num){
        case num === 2:
            totalNumsRolled.two += 1;
            break;
        case num === 3:
            totalNumsRolled.three += 1;
            break;
        case num === 4:
            totalNumsRolled.four += 1;
            break;
        case num === 5:
            totalNumsRolled.five += 1;
            break;
        case num === 6:
            totalNumsRolled.six += 1;
            break;
        case num === 7:
            totalNumsRolled.seven += 1;
            break;
        case num === 8:
            totalNumsRolled.eight += 1;
            break;
        case num === 9:
            totalNumsRolled.nine += 1;
            break;
        case num === 10:
            totalNumsRolled.ten += 1;
            break;
        case num === 11:
            totalNumsRolled.eleven += 1;
            break;
        case num === 12:
            totalNumsRolled.twelve += 1;
            break;
        default:
            console.error("Invalid roll");
            break;
    }
}

function rollHitLocation(side, locationsHit, hitLocations){
    var hitLocation = getRandomRoll(2,12);
    addToRolls(hitLocation);
    console.log(locationsHit)
    switch(hitLocation){
        case 2:
            if(side == attackSideEnum.FRONT){
                locationsHit.CTORSO += 1;
                // Add Critical Here
            }else if(side == attackSideEnum.LEFT){
                locationsHit.LTORSO += 1;
                // Add Critical Here
            }else if(side == attackSideEnum.RIGHT){
                locationsHit.RTORSO += 1;
                // Add Critical Here
            }
            break;
        case 3:
            if(side == attackSideEnum.FRONT){
                locationsHit.RARM += 1;
            }else if(side == attackSideEnum.LEFT){
                locationsHit.LLEG += 1;
            }else if(side == attackSideEnum.RIGHT){
                locationsHit.RLEG += 1;
            }
            break;
        case 4:
            if(side == attackSideEnum.FRONT){
                locationsHit.RARM += 1;
            }else if(side == attackSideEnum.LEFT){
                locationsHit.LARM += 1;
            }else if(side == attackSideEnum.RIGHT){
                locationsHit.RARM += 1;
            }
            break;
        case 5:
            if(side == attackSideEnum.FRONT){
                locationsHit.RLEG += 1;
            }else if(side == attackSideEnum.LEFT){
                locationsHit.LARM += 1;
            }else if(side == attackSideEnum.RIGHT){
                locationsHit.RARM += 1;
            }
            break;
        case 6:
            if(side == attackSideEnum.FRONT){
                locationsHit.RTORSO += 1;
            }else if(side == attackSideEnum.LEFT){
                locationsHit.LLEG += 1;
            }else if(side == attackSideEnum.RIGHT){
                locationsHit.RLEG += 1;
            }
            break;
        case 7:
            if(side == attackSideEnum.FRONT){
                locationsHit.CTORSO += 1;
            }else if(side == attackSideEnum.LEFT){
                locationsHit.LTORSO += 1;
            }else if(side == attackSideEnum.RIGHT){
                locationsHit.RTORSO += 1;
            }
            break;
        case 8:
            if(side == attackSideEnum.FRONT){
                locationsHit.LTORSO += 1;
            }else if(side == attackSideEnum.LEFT){
                locationsHit.CTORSO += 1;
            }else if(side == attackSideEnum.RIGHT){
                locationsHit.CTORSO += 1;
            }
            break;
        case 9:
            if(side == attackSideEnum.FRONT){
                locationsHit.LLEG += 1;
            }else if(side == attackSideEnum.LEFT){
                locationsHit.RTORSO += 1;
            }else if(side == attackSideEnum.RIGHT){
                locationsHit.LTORSO += 1;
            }
            break;
        case 10:
            if(side == attackSideEnum.FRONT){
                locationsHit.LARM += 1;
            }else if(side == attackSideEnum.LEFT){
                locationsHit.RARM += 1;
            }else if(side == attackSideEnum.RIGHT){
                locationsHit.LARM += 1;
            }
            break;
        case 11:
            if(side == attackSideEnum.FRONT){
                locationsHit.LARM += 1;
            }else if(side == attackSideEnum.LEFT){
                locationsHit.RLEG += 1;
            }else if(side == attackSideEnum.RIGHT){
                locationsHit.LLEG += 1;
            }
            break;
        case 12:
            if(side == attackSideEnum.FRONT){
                locationsHit.HEAD += 1;
            }else if(side == attackSideEnum.LEFT){
                locationsHit.HEAD += 1;
            }else if(side == attackSideEnum.RIGHT){
                locationsHit.HEAD += 1;
            }
            break;
        default:
            console.error("invalid hit location roll! hitLocation = " + hitLocation);
            break;
    }

    return locationsHit;
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
    rollHitLocation(direction.value)
}


//highlightSide(side);