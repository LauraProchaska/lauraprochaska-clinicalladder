
//
// document.getElementById("button1").onclick = function() {
//     window.location.href ="https://www.github.com/lalepro", target="_blank";
// };
//
// document.getElementById("button2").onclick = function() {
//     window.location.href ="https://www.linkedin.com/in/laura-prochaska/"; target="_blank";
// };
//
// document.getElementById("button3").onclick = function() {
//     window.location.href ="https://www.instagram.com/lalepro/", target="_blank";
// };
//
// document.getElementById("button4").onclick = function() {
//     window.location.href ="https://www.facebook.com/proartphotos/", target="_blank";
// };

'use-strict';
$(document).ready(function() {

    $('#infoshow').click(function (event) {
        event.preventDefault();
        $('dd').toggleClass('invisible');
    });

    $("dt").on("click", function () {
        $(this).css("background-color", "yellow");
    });

    $("dt").on("click", function () {
        if ($(this).hasClass("highlight")) {
            $(this).removeClass("highlight");
        }
        else {
            $(this).addClass('highlight');
        }
    });

    $("dt").each(function (index, element) {
        $(element).css("background-color", "cyan");
    });


    $("#buttonColor").click(function () {
        $("ul").each(function () {
            $('li:last-child').css("background-color", "yellow")
        });
    });


    $("#quote").delay(5000).fadeIn(2000);


    //---_-_------_--_------------------------extra


    // setTimeout(function () {
    //     $("myModal").modal("show");
    // }, 2000;

    //--__--__-_--_-__-_--_-_-_-____----_-__-_-__-_

    $.ajax("https://www.reddit.com/r/development/json").done(function (data) {
        console.log(data)
    });


});