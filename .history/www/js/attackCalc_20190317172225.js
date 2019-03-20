var attackSideEnum = {FRONT:"front", LEFT:"left", RIGHT:"right", REAR:"rear"};
var side = "front";
var direction = document.getElementById("direction");
var numShotsFired = document.getElementById("numShotsFired");
var possibleHitLocations = {LTORSO: "Left Torso", RTORSO:"Right Torso", CTORSO:"Center Torso", LLEG:"Left Leg", RLEG:"Right Leg", LARM:"Left Arm", RARM:"Right Arm", HEAD:"Head"};
var eachNumRolled = {two:0,three:0,four:0,five:0,six:0,seven:0,eight:0,nine:0,ten:0,eleven:0,twelve:0};
var locationsHitArray = {LT:0, RT:0, CT:0, LL:0, RL:0, LA:0, RA:0, H:0};

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

function clusterAttack(){
    var shotsHit = clusterShotsHit(numShotsFired.value);
    locationsHitArray = {LT:0, RT:0, CT:0, LL:0, RL:0, LA:0, RA:0, H:0};
    for(var i = 0; i < shotsHit; i++){
        var hitLoc = rollHitLocation(direction.value);
        addToLocationsHitArray(hitLoc);
    }

    var hitText = createHitText();
    document.getElementById("rollResults").innerHTML += hitText;
    
}

function createHitText(){
    var hitText;
    if( locationsHitArray.LT > 0 ){
        hitText += possibleHitLocations.LTORSO + " x " + locationsHitArray.LT + "<br>";
    }
    if( locationsHitArray.RT > 0 ){
        hitText += possibleHitLocations.RTORSO + " x " + locationsHitArray.RT + "<br>";
    }
    if( locationsHitArray.CT > 0 ){
        hitText += possibleHitLocations.CTORSO + " x " + locationsHitArray.CT + "<br>";
    }
    if( locationsHitArray.LL > 0 ){
        hitText += possibleHitLocations.LLEG + " x " + locationsHitArray.LL + "<br>";
    }
    if( locationsHitArray.RL > 0 ){
        hitText += possibleHitLocations.RLEG + " x " + locationsHitArray.RL + "<br>";
    }
    if( locationsHitArray.LA > 0 ){
        hitText += possibleHitLocations.LARM + " x " + locationsHitArray.LA + "<br>";
    }
    if( locationsHitArray.RA > 0 ){
        hitText += possibleHitLocations.RARM + " x " + locationsHitArray.RA + "<br>";
    }
    if( locationsHitArray.H > 0 ){
        hitText += possibleHitLocations.HEAD + " x " + locationsHitArray.H + "<br>";
    }
}

function addToLocationsHitArray(hitLoc){
    if(hitLoc === possibleHitLocations.LTORSO){
        locationsHitArray.LT += 1;
    }else if ( hitLoc === possibleHitLocations.RTORSO ){
        locationsHitArray.RT += 1;
    }else if ( hitLoc === possibleHitLocations.CTORSO ){
        locationsHitArray.CT += 1;
    }else if ( hitLoc === possibleHitLocations.LLEG ){
        locationsHitArray.LL += 1;
    }else if ( hitLoc === possibleHitLocations.RLEG ){
        locationsHitArray.RL += 1;
    }else if ( hitLoc === possibleHitLocations.LARM ){
        locationsHitArray.LA += 1;
    }else if ( hitLoc === possibleHitLocations.RARM ){
        locationsHitArray.RA += 1;
    }else if ( hitLoc === possibleHitLocations.HEAD ){
        locationsHitArray.H += 1;
    }else{
        console.error("Invalid hit location! " + hitLoc);
    }
}

function clusterShotsHit(shotsFired){
    var num = getRandomRoll();
    var shotsHit = 0;
    console.log(num);
    switch(shotsFired){
        case 2:
            if( num <= 7 ){
                onsole.log("case 2 <= 7")
                shotsHit = 1;
            }else{
                onsole.log("case 2 else")
                shotsHit = 2;
            }
            console.log("case 2")
            break;
        case 3:
            if( num <= 4 ){
                shotsHit = 1;
            }else if ( num <= 9 ){
                shotsHit = 2;
            }else{
                shotsHit = 3;
            }
            break;
        case 4:
            if( num <= 2 ){
                shotsHit = 1;
            }else if ( num <= 6 ){
                shotsHit = 2;
            }else if ( num <= 8){
                shotsHit = 3;
            }else{
                shotsHit = 4;
            }
            break;
        case 5:
            if( num <= 2 ){
                shotsHit = 1;
            }else if ( num <= 4 ){
                shotsHit = 2;
            }else if ( num <= 8 ){
                shotsHit = 3;
            }else if ( num <= 10 ){
                shotsHit = 4;
            }else{
                shotsHit = 5;
            }
            break;
        case 6:
            if( num <= 3 ){
                shotsHit = 2;
            }else if ( num <= 5 ){
                shotsHit = 3;
            }else if ( num <= 8 ){
                shotsHit = 4;
            }else if ( num <= 10 ){
                shotsHit = 5;
            }else{
                shotsHit = 6;
            }
            break;
        case 9:
            if( num <= 3 ){
                shotsHit = 3;
            }else if ( num <= 4 ){
                shotsHit = 4;
            }else if ( num <= 8 ){
                shotsHit = 5;
            }else if ( num <= 10 ){
                shotsHit = 7;
            }else{
                shotsHit = 9;
            }
            break;
        case 10:
            if( num <= 3 ){
                shotsHit = 3;
            }else if ( num <= 4 ){
                shotsHit = 4;
            }else if ( num <= 8 ){
                shotsHit = 6;
            }else if ( num <= 10 ){
                shotsHit = 8;
            }else{
                shotsHit = 10;
            }
            break;
        case 12:
            if( num <= 3 ){
                shotsHit = 4;
            }else if ( num <= 4 ){
                shotsHit = 5;
            }else if ( num <= 8 ){
                shotsHit = 6;
            }else if ( num <= 10 ){
                shotsHit = 10;
            }else{
                shotsHit = 12;
            }
            break;
        case 15:
            if( num <= 3 ){
                shotsHit = 5;
            }else if ( num <= 4 ){
                shotsHit = 6;
            }else if ( num <= 8 ){
                shotsHit = 9;
            }else if ( num <= 10 ){
                shotsHit = 12;
            }else{
                shotsHit = 15;
            }
            break;
        case 20:
            if( num <= 3 ){
                shotsHit = 6;
            }else if ( num <= 4 ){
                shotsHit = 9;
            }else if ( num <= 8 ){
                shotsHit = 12;
            }else if ( num <= 10 ){
                shotsHit = 16;
            }else{
                shotsHit = 20;
            }
            break;
        case 30:
            if( num <= 3 ){
                shotsHit = 9;
            }else if ( num <= 4 ){
                shotsHit = 13;
            }else if ( num <= 8 ){
                shotsHit = 18;
            }else if ( num <= 10 ){
                shotsHit = 24;
            }else{
                shotsHit = 30;
            }
            break;
        case 40:
            if( num <= 3 ){
                shotsHit = 12;
            }else if ( num <= 4 ){
                shotsHit = 18;
            }else if ( num <= 8 ){
                shotsHit = 24;
            }else if ( num <= 10 ){
                shotsHit = 32;
            }else{
                shotsHit = 40;
            }
            break;
    }

    console.log("Your cluster attack fired " + shotsFired + " missiles. It rolled a " + num + " and hit with " + shotsHit + " missiles.");

    return shotsHit;
}

function rollMultiple(num){
    eachNumRolled = {two:0,three:0,four:0,five:0,six:0,seven:0,eight:0,nine:0,ten:0,eleven:0,twelve:0};
    for(var i = 0; i < num; i++){
        tallyNums(getRandomRoll());
    }
    console.log(eachNumRolled);
    return eachNumRolled;
}

function tallyNums(num){
    switch(num){
        case 2:
            eachNumRolled.two += 1;
            break;
        case 3:
            eachNumRolled.three += 1;
            break;
        case 4:
            eachNumRolled.four += 1;
            break;
        case 5:
            eachNumRolled.five += 1;
            break;
        case 6:
            eachNumRolled.six += 1;
            break;
        case 7:
            eachNumRolled.seven += 1;
            break;
        case 8:
            eachNumRolled.eight += 1;
            break;
        case 9:
            eachNumRolled.nine += 1;
            break;
        case 10:
            eachNumRolled.ten += 1;
            break;
        case 11:
            eachNumRolled.eleven += 1;
            break;
        case 12:
            eachNumRolled.twelve += 1;
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
    document.getElementById("rollResults").innerHTML += locationHit +"<br>";
}


//highlightSide(side);