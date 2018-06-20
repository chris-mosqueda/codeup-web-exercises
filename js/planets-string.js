(function(){
    "use strict";

    var planetsString = "Mercury|Venus|Earth|Mars|Jupiter|Saturn|Uranus|Neptune";
    console.log(planetsString);
    var planetsArray;

    /**
     * TODO:
     * Convert planetsString to an array, and save it in a variable named
     * planetsArray.
     * console.log planetsArray to check your work
     */
    planetsArray = planetsString.split("|");
    console.log(planetsArray);

    /**
     * TODO:
     * Create a string with <br> tags between each planet. console.log() your
     * results. Why might this be useful?
     *
     * BONUS:
     * Create another string that would display your planets in an undordered
     * list. You will need an opening AND closing <ul> tags around the entire
     * string, and <li> tags around each planet.
     */
    var planetBreak = planetsArray.join("<br>");
    console.log(planetBreak);
    console.log("BONUS...");
    //----------------------------------------------------------------------

    var listPlanets = "";
    console.log(planetsArray);
    for(var i =0; i < planetsArray.length; i++) {
        listPlanets += ("\t" + "<li>" + planetsArray[i] + "</li>,");
    }

    //console.log(listPlanets);
    planetsArray = listPlanets.split(",");
    planetsArray.pop();
    //console.log(planetsArray);

    planetsArray.unshift("<ul>");
    planetsArray.push("</ul>")
    //console.log(planetsArray);

    listPlanets = planetsArray.join("\n");
    console.log(listPlanets);

    // //INSTRUCTORS-------------------------------------
    // var planetsHTML = "<ul><li>";
    // planetsHTML += planetsArray.join("</li><li>");
    // planetsHTML += "</li></ul>";
    //
    // console.log(planetsHTML);
    //
    // document.body.innerHTML = planetsHTML;


    // //SECOND WAY
    // var planetsHTML = "<ul>";
    // planetsArray.forEach(function(planet) {
    //     planetsHTML += "<li>" + planet + "</li>";
    // });
    // planetsHTML += "</ul>";
})();