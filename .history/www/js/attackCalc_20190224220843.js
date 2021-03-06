var attackSideEnum = {FRONT:"front", LEFT:"left", RIGHT:"right", REAR:"rear"};
var side = "front";

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
    }else if(sideId == "leftSide"){
        attackSideEnum.LEFT;
    }else if(sideId == "rightSide"){
        attackSideEnum.RIGHT;
    }else if(sideId == "rear"){
        attackSideEnum.REAR;
    }

}


function rollAttack(side, number, damage, toHit){
    var attackRoll;
    var locationsHit = {LTORSO:0, RTORSO:0, CTORSO:0, LLEG:0, RLEG:0, LARM:0, RARM:0, HEAD:0};
    var rolls = "";
    for(var i = 1; i <= number; i++){
        attackRoll = (getRandomInt(2, 12));
        console.log("attack roll = " + attackRoll +" toHit = " + toHit);
        if(attackRoll >= toHit){
            console.log("Attack Success!");
            locationsHit = rollHitLocation(side,locationsHit, rolls);
        }
    }
    
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is exclusive and the minimum is inclusive
}

function rollHitLocation(side, locationsHit, rolls){
    var hitLocation = getRandomInt(2,12);
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

function addToRolls(roll){
    rolls += ", " + roll;
}

function rollMissilesHit(numMissiles){
    missileTable = {1:2, 20:4};
    console.log(missileTable)
    var missilesHit = missileTable
}

function getAttackType(){
    var attackType = document.getElementById("cluster")
    return attackType;
}


highlightSide(side);