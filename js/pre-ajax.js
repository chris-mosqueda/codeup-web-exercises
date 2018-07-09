$(document).ready(function() {
    "use strict;"
    var people = [
        {
            name: "Fred",
            favColor: "red"
        },
        {
            name: "Sally",
            favColor: "blue"
        },
        {
            name: "Tom",
            favColor: "yellow"
        }
    ];

    function sortNames(arr){
        arr.forEach(function(person){
            $("#names-list").append("<ul><li style='color:"+ person.favColor +"'>" + person.name + "<br>"
                + person.favColor + "</li></ul>");
        });
    }

    $("#add-names-btn").click(function(){
        sortNames(people);
    });
});
