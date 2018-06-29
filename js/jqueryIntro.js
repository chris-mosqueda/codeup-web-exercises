"use strict";
$(function () {
    // // $("#playButton").click(function () {
    // //     $("#playOutput").text($("#playInput").val());
    // //     $("h1").toggle(3000);
    // //
    // // }); //.on = like using addEventLlistener
    // //
    // // $(".importante").mouseover(function() {
    // //     $(this).css("background-color","yellow");
    // // })
    //
    // // alert($("#german").text());
    // // alert($("#corgi").text());
    // // alert($("#double").text());
    // $(".codeup").css("border","1px solid red");

    // $("li").css("font-size", "20px").css("background-color","grey")
    // $("p").css("background-color","yellow");
    $("h1, p, li").css("background-color","tan");
    //alert($("h1").text());
    $("#box").hover(function () {
       $("#box").animate({height:"300px"},{duration: 5000});
    });
});