//Scans for Unchecked and Checked...sets overlays accordingly
function toggleSet() {
    var radioOn = document.getElementsByClassName('radioToggle');
    for (var i = 0; i < radioOn.length; i++) {
        if (radioOn[i].checked) {
            document.getElementById(radioOn[i].value + 'Show').click();
        } else {
            document.getElementById(radioOn[i].value + 'Hide').click();
        }
    };
};

//Carousel script
//simple carousel script
var slideIndex = 1;
var slideClass = document.getElementsByClassName('slideshow-container');
if (slideClass.length > 0) {
    showSlides(slideIndex);


    function plusSlides(n) {
        showSlides(slideIndex += n);
    }

    function currentSlide(n) {
        showSlides(slideIndex = n);
    }

    function showSlides(n) {
        var i;
        var slides = document.getElementsByClassName("mySlides");
        if (n > slides.length) { slideIndex = 1 }
        if (n < 1) { slideIndex = slides.length }
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        slides[slideIndex - 1].style.display = "block";
    }
    //Plus Carousel Eventlistern class=plusSlidesClass
    var plusSlidesClass = document.getElementsByClassName("plusSlidesClass");
    for (var i = 0; i < plusSlidesClass.length; i++) {
        plusSlidesClass[i].addEventListener('click', function () {
            plusSlides(1);
            changeOverlay();
        }, false);
    };
    //Minus Carousel Eventlistern class=minusSlidesClass
    var minusSlidesClass = document.getElementsByClassName("minusSlidesClass");
    for (var i = 0; i < minusSlidesClass.length; i++) {
        minusSlidesClass[i].addEventListener('click', function () {
            plusSlides(-1);
            changeOverlay();
        }, false);
    };
    function changeOverlay() {
        var LinkHide = document.getElementsByClassName('hidelink');
        for (var i = 0; i < LinkHide.length; i++) {
            document.getElementById(LinkHide[i].click())
        };
        var mySlidesBlock = document.getElementsByClassName('mySlides');
        for (var n = 0; n < mySlidesBlock.length; n++) {
            display = mySlidesBlock[n].style.display;
            if (display == 'block') {
                var overlayClick = mySlidesBlock[n].getAttribute('value');
                document.getElementById(overlayClick).click();
            }
        };
    };
};
//End Carousel Functions

//Radio Button Eventlistern class=radioToggle
var toggleRadioClick = document.getElementsByClassName("radioToggle");

for (var i = 0; i < toggleRadioClick.length; i++) {
    toggleRadioClick[i].addEventListener('click', clickRadio, false);
};

//Radio Button Click
function clickRadio() {
    var radioOn = document.getElementsByClassName('radioToggle');
    var clicked_id = this.getAttribute("value");
    for (var i = 0; i < radioOn.length; i++) {
        document.getElementById(radioOn[i].value + 'Hide').click();
        document.getElementById(clicked_id + 'Show').click();
        document.getElementById("kmlSelect").setAttribute("kmlid", clicked_id);
    };
};