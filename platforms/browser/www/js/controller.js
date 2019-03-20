
function integrateEvents(){
    var elementsWithEvents = getEventElements();
    createEvents(elementsWithEvents);
}

function getEventElements(){
    var quickRollButton = document.getElementById("quickRollButton");
    var calculateAttackButton = document.getElementById("calculateAttack");
    var elementsWithEvents = {"quickRollButton":quickRollButton, "calculateAttack":calculateAttackButton};

    return elementsWithEvents;

}

function createEvents(elementsWithEvents){

    var quickRollButton = elementsWithEvents.quickRollButton;
   // quickRollButton.addEventListener("click", quickAttack);

    for(var i=0; i < elementsWithEvents.length; i++){

    }
}

// Main
document.onload = integrateEvents();