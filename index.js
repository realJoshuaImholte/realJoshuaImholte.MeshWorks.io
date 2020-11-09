document.getElementById("on_AB").addEventListener("click", on_AB);
document.getElementById("on_TMM_EXP").addEventListener("click", on_TMM_EXP);
document.getElementById("on_AddN").addEventListener("click", on_AddN);
document.getElementById("on_AddR").addEventListener("click", on_AddR);
document.getElementById("on_AddC").addEventListener("click", on_AddC);
document.getElementById("on_MassEmail").addEventListener("click", on_MassEmail);
document.getElementById("on_Other").addEventListener("click", on_Other());

function on_AB() {
    var type = "AB"
    determineTutorial(type)
}

function on_TMM_EXP() {
    var type = "TMM_EXP"
    determineTutorial(type)
}

function on_AddN() {
    var type = "AddN"
    determineTutorial(type)
}

function on_AddR() {
    var type = "AddR"
    determineTutorial(type)
}

function on_AddC() {
    var type = "AddC"
    determineTutorial(type)
}

function on_MassEmail() {
    var type = "MassEmail"
    determineTutorial(type)
}

function on_Other() {
    var type = "Other"
    determineTutorial(type)
}



function off() {
  document.getElementById("overlay").style.display = "none";
}



function determineTutorial(tutType) {
    console.log("Type: " + tutType);
    
    if tutType == "AB" {
        show_AB();
    }
    
    if tutType == "TMM_EXP" {
        show_TMM_EXP();
    }
    
    if tutType == "AddN" {
        show_AddN();
    }
    
    if tutType == "AddR" {
        show_AddR();
    }
    
    if tutType == "AddC" {
        show_AddC();
    }
    
    if tutType == "MassEmail" {
        show_MassEmail();
    }
    
    if tutType == "Other" {
        show_O();
    }
    
}



function show_AB() {
    console.log("Creating: AB");
    document.getElementById("overlay").style.display = "block";
    
}

function show_TMM_EXP() {
    console.log("Creating: Time Management Matrix Explanation");
    document.getElementById("overlay").style.display = "block";
    
}

function show_AddN() {
    console.log("Creating: Add Note");
    document.getElementById("overlay").style.display = "block";
    
}

function show_AddR() {
    console.log("Creating: Add Reminder");
    document.getElementById("overlay").style.display = "block";
    
}

function show_AddC() {
    console.log("Creating: Add Contact");
    document.getElementById("overlay").style.display = "block";
    
}

function show_MassEmail() {
    console.log("Creating: Mass Email Interface");
    document.getElementById("overlay").style.display = "block";
    
}

function show_O() {
    console.log("Creating: Other Techs");
    document.getElementById("overlay").style.display = "block";
    
}