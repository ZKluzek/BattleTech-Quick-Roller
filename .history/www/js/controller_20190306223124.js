
function integrateEvents(){
    var elementsWithEvents = getEventElements();
    createEvents(elementsWithEvents);
}

function getEventElements(){
    var quickRollButton = document.getElementById("quickRollButton");
    var rollAttackButton = document.getElementById("rollAttack");
    var elementsWithEvents = {"quickRollButton":quickRollButton, "rollAttack":rollAttackButton};

    return elementsWithEvents;

}

function createEvents(elementsWithEvents){
    for(var i=0; i < elementsWithEvents.length; i++){

    }
}

// Main
window.onload = integrateEvents();