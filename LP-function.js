
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
//************PROJECTS SEARCH******************
function myFunction() {
    // Declare variables
    var input, filter, ul, li, a, i;
    input = document.getElementById('myInput');
    filter = input.value.toUpperCase();
    ul = document.getElementById("myUL");
    li = ul.getElementsByTagName('li');

    // Loop through all list items, and hide those who don't match the search query
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}

//TODO: Photography Slide Show
var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
}
//TODO: Photography Slide Show End

//TODO MODAL
// Get the modal
var modal = document.getElementById('myModal');

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
    modal.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
};

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