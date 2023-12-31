function doAction(nomDiv) {
    // var nouvellePage = 'action.html';
    // window.open(nouvellePage, "_self");

    // Masquer toutes les divs
    var divs = document.getElementsByClassName("div-cachee");
    for (var i = 0; i < divs.length; i++) {
        divs[i].style.display = "none";
        divs[i].classList.remove("div-affichee");
    }

    // Afficher la div spécifique
    var div = document.getElementById(nomDiv);
    if (div) {
        div.style.display = "block";
        setTimeout(function () {
            div.classList.add("div-affichee");
        }, 10); // Ajout de la classe avec un délai pour déclencher l'animation
    }
}

document.getElementById("buttonDatabase").addEventListener("click", function() {
    doAction("database_id");
});

document.getElementById("buttonMap").addEventListener("click", function() {
    doAction("mapid");
    map.invalidateSize();

});

document.getElementById("buttonDatavis").addEventListener("click", function() {
    doAction("dataviz_id");
});

document.getElementById("buttonArchives").addEventListener("click", function() {
    doAction("archives_id");
});

document.getElementById("buttonProjects").addEventListener("click", function() {
    doAction("projects_id");
});

document.getElementById("buttonUsers").addEventListener("click", function() {
    doAction("users_id");
});