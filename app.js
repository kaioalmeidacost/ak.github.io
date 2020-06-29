// Efeitos no scroll
const fadeOut = document.querySelector('.header');
const fadeOutImg = document.querySelector('.fullBanner__imgOne');
const fadeOutImgT = document.querySelector('.fullBanner__imgTwo');
const fadeOutText = document.querySelector('.fullBanner__txt > h1');
const fadeOutTexta = document.querySelector('.fullBanner__txt span');
const fadeImage = document.querySelector('.fadeImage');


window.addEventListener('scroll', function () {
    const value = 1 + window.scrollY / -400;
    const valueTwo = 1 + window.scrollY / -2000;
    const valueTwod = 1 + window.scrollY / -1000;
    const valueThree = 1 + window.scrollY / -8000;
    // fadeOut.style.opacity = value;
    fadeImage.style.opacity = valueThree;
    fadeImage.style.filter = 'scale(' + (valueTwo) + ')';
    fadeImage.style.transform = 'scale(' + (valueThree) + ')';


    fadeOutText.style.transform = 'translateY(-' + (value) + 'px)';

    fadeOutImg.style.opacity = value;
    fadeOutImg.style.opacity = value;
    fadeOutImg.style.filter = 'scale(' + (valueTwo) + ')';
    fadeOutImg.style.transform = 'scale(' + (valueTwod) + ')';

    fadeOutImgT.style.opacity = value;
    fadeOutImgT.style.opacity = value;
    fadeOutImgT.style.filter = 'scale(' + (valueTwo) + ')';
    fadeOutImgT.style.transform = 'scale(' + (valueTwod) + ')';
})


//Menu mobile
var openMenu = document.querySelector('.hamburguer__open')
var hideHeader = document.querySelector('.header')
function openMobileMenu() {
    if ( openMenu.style.display == 'none') {
        hideHeader.style.display = 'none'

        openMenu.style.display = 'flex';
    } else {
        openMenu.style.display = 'none'
        hideHeader.style.display = 'block'

    }
}

// Menu Stick
window.onscroll = function() {
    scrollFunction()
};

function scrollFunction() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 0) {
        document.querySelector("nav").style.height = "60px";
        document.querySelector("nav .logo img").style.maxWidth = "60px";
        document.querySelector(".nav").style.position = "sticky";
        document.querySelector(".nav").style.backgroundColor = "#FFF";
        document.querySelector(".nav").style.zIndex = "20";
        document.querySelector(".nav").style.position = "sticky";
        document.querySelector(".nav").style.position = " -webkit-sticky";
        document.querySelector(".nav").style.top = "0";



    } else {
        document.querySelector(".nav").style.backgroundColor = "#FFF4EB";
        document.querySelector("nav").style.height = "120px";
        document.querySelector("nav .logo img").style.maxWidth = "unset";

    }
}