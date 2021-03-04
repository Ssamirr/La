//////////////////// SIDEBAR //////////////////
const targetPageLink = document.querySelector('#target');
const practicePageLink = document.querySelector('#practice');
const coursePageLink = document.querySelector('#course');
const pricePageLink = document.querySelector('#price');
const promotionPageLink = document.querySelector('#promotion');
const messagePageLink = document.querySelector('#message');

const targetPage = document.querySelector('.target__students--content');
const practicePage = document.querySelector('.practice__test--content');
const coursePage = document.querySelector('.course__landing--content');
const pricePage = document.querySelector('.pricing--content');
const promotionPage = document.querySelector('.promotions--content');
const messagePage = document.querySelector('.course__message--content');

const pageArrays = [
    targetPage,
    practicePage,
    coursePage,
    pricePage,
    promotionPage,
    messagePage
]

const saveTarget = document.querySelector('#target__save');
const savePractice = document.querySelector('#practice__save');
const saveCourse = document.querySelector('#course__save');
const savePrice = document.querySelector('#price__save');
const savePromotion = document.querySelector('#promotion__save');
const saveMessage = document.querySelector('#message__save');

const buttonArrays = [
    saveTarget,
    savePractice,
    saveCourse,
    savePrice,
    savePromotion,
    saveMessage
]

saveCourse.addEventListener('click', () => {
    document.querySelector('.course__uncomplete').style.display = 'none'
    document.querySelector('.course__complete').style.display = 'block'
})

savePrice.addEventListener('click', () => {
    document.querySelector('.price__uncomplete').style.display = 'none'
    document.querySelector('.price__complete').style.display = 'block'
})

saveMessage.addEventListener('click', () => {
    document.querySelector('.message__uncomplete').style.display = 'none'
    document.querySelector('.message__complete').style.display = 'block'    
})


targetPageLink.addEventListener('click', () => {
    document.querySelector('.settings').style.display = 'none'
    saveTarget.style.display = 'block'
    for (const button of buttonArrays) {
        if (button !== saveTarget) {
            button.style.display = 'none'
        }
    }
    targetPage.style.display = 'block';
    for (const page of pageArrays) {
        if (page !== targetPage) {
            page.style.display = 'none'
        }
    }
})

practicePageLink.addEventListener('click', () => {
    document.querySelector('.settings').style.display = 'none'
    practicePage.style.display = 'block'
    savePractice.style.display = 'block'
    for (const button of buttonArrays) {
        if (button !== savePractice) {
            button.style.display = 'none'
        }
    }
    for (const page of pageArrays) {
        if (page !== practicePage) {
            page.style.display = 'none'
        }
    }
})

coursePageLink.addEventListener('click', () => {
    document.querySelector('.settings').style.display = 'none'
    coursePage.style.display = 'block'
    saveCourse.style.display = 'block'
    for (const button of buttonArrays) {
        if (button !== saveCourse) {
            button.style.display = 'none'
        }
    }
    for (const page of pageArrays) {
        if (page !== coursePage) {
            page.style.display = 'none'
        }
    }
});

pricePageLink.addEventListener('click', () => {
    document.querySelector('.settings').style.display = 'none'
    pricePage.style.display = 'block'
    savePrice.style.display = 'block'
    for (const button of buttonArrays) {
        if (button !== savePrice) {
            button.style.display = 'none'
        }
    }
    for (const page of pageArrays) {
        if (page !== pricePage) {
            page.style.display = 'none'
        }
    }
});

promotionPageLink.addEventListener('click', () => {
    document.querySelector('.settings').style.display = 'none'
    promotionPage.style.display = 'block'
    savePromotion.style.display = 'block'
    for (const button of buttonArrays) {
        if (button !== savePromotion) {
            button.style.display = 'none'
        }
    }
    for (const page of pageArrays) {
        if (page !== promotionPage) {
            page.style.display = 'none'
        }
    }
})

messagePageLink.addEventListener('click', () => {
    document.querySelector('.settings').style.display = 'none'
    messagePage.style.display = 'block'
    saveMessage.style.display = 'block'
    for (const button of buttonArrays) {
        if (button !== saveMessage) {
            button.style.display = 'none'
        }
    }
    for (const page of pageArrays) {
        if (page !== messagePage) {
            page.style.display = 'none'
        }
    }
})



//////////////////// TARGET ///////////////////



const firstInput = document.querySelector('#answer1');
const secondInput = document.querySelector('#answer2');
const thirdInput = document.querySelector('#answer3');
const del1 = document.querySelector('.del1');
const del2 = document.querySelector('.del2');
const del3 = document.querySelector('.del3');


const inputArrays = [
    firstInput,
    secondInput,
    thirdInput
]

for (const input of inputArrays) {
    input.value = ""
}

firstInput.addEventListener('keyup', () => {
    del1.style.display = 'block'
    saveTarget.disabled = false
    saveTarget.style.backgroundColor = 'white'
    saveTarget.style.color = 'blue'
    if (firstInput.value == "") {
        del1.style.display = 'none'
    }
})

secondInput.addEventListener('keyup', () => {
    del2.style.display = 'block'
    saveTarget.style.backgroundColor = 'white'
    saveTarget.style.color = 'blue'
    if (secondInput.value == "") {
        del2.style.display = 'none'
    }
});

thirdInput.addEventListener('keyup', () => {
    del3.style.display = 'block'
    saveTarget.style.backgroundColor = 'white'
    saveTarget.style.color = 'blue'
    if (thirdInput.value == "") {
        del3.style.display = 'none'
    }
})

/////////////////////////// ADD ANSWER FUNCTIONALITY ///////////////////////////////////

const firstParent = document.querySelector('#input__parent--first');
const secondParent = document.querySelector('#input__parent--second');
const thirdParent = document.querySelector('#input__parent--third');
const addFirstAnswer = document.querySelector('#add__answer--first');
const addSecondAnswer = document.querySelector('#add__answer--second');
const addThirdAnswer = document.querySelector('#add__answer--third');
const newAnswer = document.createElement('input');
newAnswer.className = "answer";

addFirstAnswer.addEventListener('click', () => {
    firstParent.appendChild(newAnswer)
});

addSecondAnswer.addEventListener('click', () => {
    secondParent.appendChild(newAnswer)
});

addThirdAnswer.addEventListener('click', () => {
    thirdParent.appendChild(newAnswer)
});



newAnswer.addEventListener('keyup', () => {
    saveTarget.style.backgroundColor = 'white'
    saveTarget.style.color = 'blue'
    del.style.display = "block"
    if (input.value == "") {
        del.style.display = "none"
    }
});

del1.addEventListener('click', (e) => {
    let parent = e.target.parentNode
    parent.removeChild(parent.childNodes[1])
    del1.style.display = 'none'
});

del2.addEventListener('click', (e) => {
    let parent = e.target.parentNode
    parent.removeChild(parent.childNodes[1])
    del2.style.display = 'none'
});

del3.addEventListener('click', (e) => {
    let parent = e.target.parentNode
    parent.removeChild(parent.childNodes[1])
    del3.style.display = 'none'
});

saveTarget.addEventListener('click', (e) => {
    console.log(e)
    document.querySelector('.target__uncomplete').style.display = 'none';
    document.querySelector('.target__complete').style.display = 'block';
});




////////////////////// COURSE LANDING PAGE ///////////////////////////////

const landingFirstInput = document.querySelector('#landing__input--first');
const landingSecondInput = document.querySelector('#landing__input--second');

const titleCounter = document.querySelector('#title__counter');
const subtitleCounter = document.querySelector('#subtitle__counter');

landingFirstInput.value = ""
landingSecondInput.value = ""

landingFirstInput.addEventListener('keyup', (e) => {
    saveCourse.disabled = false
    saveCourse.style.backgroundColor = 'white'
    saveCourse.style.color = 'blue'
    let valueLength = e.target.value.length;
    let maxChars = parseInt(e.target.getAttribute('data-max-chars'))
    let remainChars = maxChars - valueLength
    titleCounter.innerHTML = remainChars
})

landingSecondInput.addEventListener('keyup', (e) => {
    saveCourse.disabled = false
    saveCourse.style.backgroundColor = 'white'
    saveCourse.style.color = 'blue'
    let valueLength = e.target.value.length;
    let maxChars = parseInt(e.target.getAttribute('data-max-chars'))
    let remainChars = maxChars - valueLength
    subtitleCounter.innerHTML = remainChars
})


////////////////// PRICING //////////////////

document.querySelector('.save').addEventListener('click', () => {
    savePrice.disabled = false
    savePrice.style.backgroundColor = 'white'
    savePrice.style.color = 'blue'
})




////////////////// MESSAGES ////////////////////

const welcomeMessage = document.querySelector('#welcome__message')
const congratulationMessage = document.querySelector('#congratulations__message');

welcomeMessage.value = ""
congratulationMessage.value = " "

welcomeMessage.addEventListener('keyup', (e) => {
    saveMessage.disabled = false
    saveMessage.style.backgroundColor = 'white'
    saveMessage.style.color = 'blue'
    let valueLength = e.target.value.length;
    let maxChars = parseInt(e.target.getAttribute('data-max-chars'))
    let remainChars = maxChars - valueLength
    document.querySelector('.counter1').innerText = remainChars
})

congratulationMessage.addEventListener('keyup', (e) => {
    let valueLength = e.target.value.length;
    let maxChars = parseInt(e.target.getAttribute('data-max-chars'))
    let remainChars = maxChars - valueLength
    document.querySelector('.counter2').innerText = remainChars
})


/////////////////////////////////// SETTINGS PAGE ////////////////////////////

document.querySelector('.fa-cog').addEventListener('click', () => {
    for (let docc of document.querySelectorAll('.content-page')) {
        docc.style.display = 'none'
    }
    document.querySelector('.settings').style.display = 'block'
})