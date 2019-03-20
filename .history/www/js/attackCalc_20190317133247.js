var attackSideEnum = {FRONT:"front", LEFT:"left", RIGHT:"right", REAR:"rear"};
var side = "front";
var direction = document.getElementById("direction");

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
    console.log(randomInt);
    return randomInt; 
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