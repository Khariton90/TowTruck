const navLinks = document.querySelectorAll('.nav-link');
const toggleCheck = document.querySelectorAll('.toggleCheck');
const form = document.querySelectorAll('.help-form input');



const scrollTo = (e) => {
    e.preventDefault();
    let navBar = document.querySelector('.navbar').offsetHeight;
    console.log(navBar)
    let target = e.target.getAttribute('data-link');
    let section = document.querySelector(`.${target}`).offsetTop;
    window.scrollTo({
        top: section - 90,
        behavior: 'smooth',
    })
}

const toggleCheckBox = (e) => {
    if (!e.target.getAttribute('checked')) {
        e.target.setAttribute('checked', 'checked')
        e.target.classList.remove('notActive')
    } else {
        e.target.removeAttribute('checked', 'checked')
        e.target.classList.add('notActive')
    }
}
toggleCheck.forEach(el => el.addEventListener('click', toggleCheckBox))
navLinks.forEach(nav => nav.addEventListener('click', scrollTo));


//  Behavior smooth in Safari  //
function init() {
    uss.setPageScroller(window);
    uss.hrefSetup();
    uss.setStepLengthCalculator(EASE_IN_OUT_QUART(1000));
    window.addEventListener(
        "wheel",
        () => uss.stopScrolling()
    );
}

$(document).ready(function () {
    let accordion = $('.accordion');
    $(accordion).click(function () {
        $('.accordion p').slideUp('fast');
        if ($(this).children('p').is(':hidden')) {
            $(this).children('p').slideDown('fast');
        }
    });
})