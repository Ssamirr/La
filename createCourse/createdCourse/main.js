// var upload = document.getElementById('video');
////////////////////////////// PAGE LINKS /////////////////////
const target = document.querySelector("#target");
const structure = document.querySelector(".structure__page");
const setup = document.querySelector(".setup__test");
const film = document.querySelector(".film__edit");
const curriculum = document.querySelector(".curriculum")
const captions = document.querySelector(".captions");
const courseLanding = document.querySelector(".course__landing");
const pricing = document.querySelector(".pricing");
const promotions = document.querySelector(".promotions");
const messages = document.querySelector(".course__message");

////////////////////////// PAGES ////////////////////////
const targetPage = document.querySelector('.target__students--content');
const coursePage = document.querySelector('.course__landing--content');
const pricePage = document.querySelector('.pricing--content');
const promotionPage = document.querySelector('.promotions--content');
const messagePage = document.querySelector('.course__message--content');

const structurePage = document.querySelector('.content__coursestructure');
const setupPage = document.querySelector('.content__setup');
const filmPage = document.querySelector('.content__film');
const curriculumPage = document.querySelector('.content__curriculum');

const pageArrays = [
    targetPage,
    coursePage,
    pricePage,
    promotionPage,
    messagePage,
    structurePage,
    setupPage,
    filmPage,
    curriculumPage
]




target.addEventListener('click', () => {
    targetPage.style.display = 'block';
    for (const page of pageArrays) {
        if (page !== targetPage) {
            page.style.display = 'none'
        }
    }
})

structure.addEventListener('click', () => {
    structurePage.style.display = 'block';
    for (const page of pageArrays) {
        if (page !== structurePage) {
            page.style.display = 'none'
        }
    }
})

setup.addEventListener('click', () => {
    setupPage.style.display = 'block';
    for (const page of pageArrays) {
        if (page !== setupPage) {
            page.style.display = 'none'
        }
    }
})

film.addEventListener('click', () => {
    filmPage.style.display = 'block';
    for (const page of pageArrays) {
        if (page !== filmPage) {
            page.style.display = 'none'
        }
    }
})

curriculum.addEventListener('click', () => {
    curriculumPage.style.display = 'block';
    for (const page of pageArrays) {
        if (page !== curriculumPage) {
            page.style.display = 'none'
        }
    }
})

// captions.addEventListener('click', () => {
//     targetPage.style.display = 'block';
//     for (const page of pageArrays) {
//         if (page !== ) {
//             page.style.display = 'none'
//         }
//     }
// })

courseLanding.addEventListener('click', () => {
    coursePage.style.display = 'block';
    for (const page of pageArrays) {
        if (page !== coursePage) {
            page.style.display = 'none'
        }
    }
})

pricing.addEventListener('click', () => {
    pricePage.style.display = 'block';
    for (const page of pageArrays) {
        if (page !== pricePage) {
            page.style.display = 'none'
        }
    }
})

promotions.addEventListener('click', () => {
    promotionPage.style.display = 'block';
    for (const page of pageArrays) {
        if (page !== promotionPage) {
            page.style.display = 'none'
        }
    }
})

messages.addEventListener('click', () => {
    messagePage.style.display = 'block';
    for (const page of pageArrays) {
        if (page !== messagePage) {
            page.style.display = 'none'
        }
    }
})




