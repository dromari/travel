/*burger*/
(function () {
    const burgerItem = document.querySelector('.burger');
    const menu = document.querySelector('.header__navigation-mobile');
    const menuCloseItem = document.querySelector('.header__nav-close');
    burgerItem.addEventListener('click', () => {
        menu.classList.add('header__navigation-mobile_active')
    });
    menuCloseItem.addEventListener('click', () => {
        menu.classList.remove('header__navigation-mobile_active')
    });
}());

/*Pop-up*/
const buttonLogin = document.getElementById('buttonLogin');
const popup = document.querySelector('.pop-up');

buttonLogin.addEventListener('click', () => {
    document.getElementById('popupID').style.display = 'flex';
    popup.classList.toggle('hidden')

})

popup.addEventListener('click', (event) => {
    if (event.target.classList.contains('pop-up')) {
        popup.classList.toggle('hidden')
    }
})

function closePopup() {
    document.getElementById('popupID').style.display = 'none';
}

/*Sign-up*/
const registerSU = document.getElementById('registerSU');
const signup = document.querySelector('.sign-up');

registerSU.addEventListener('click', () => {
    signup.classList.toggle('hidden')
})

signup.addEventListener('click', (event) => {
    if (event.target.classList.contains('sign-up')) {
        signup.classList.toggle('hidden')
    }
})

/*alert*/
function alertPopup() {
    let login = 'login= ' + document.getElementById('email').value;
    let password = 'password= ' + document.getElementById('password').value;
    alert(login + '\n' + password);
}

/*slider*/
var slideIndex = 1;
showSlides(slideIndex);

function plusSlide() {
    showSlides(slideIndex += 1);
}
function minusSlide() {
    showSlides(slideIndex -= 1);
}
function currentSlide(n) {
    showSlides(slideIndex = 1);
}

function showSlides(n) {
    var i;
    const slides = document.querySelectorAll(".item");
    const dots = document.querySelectorAll(".dots_item");
    if (n > slides.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}

