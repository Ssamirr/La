///////////////////// PROGRESS BAR ///////////////////////

const next2 = document.querySelector('#next2')
const back1 = document.querySelector('#back1')
const next3 = document.querySelector('#next3')
const back2 = document.querySelector('#back2')
const next4 = document.querySelector('#next4')
const back3 = document.querySelector('#back3')
const createCourse = document.querySelector('#create__course')

const firstStep = document.querySelector('#first__step')
const secondStep = document.querySelector('#second__step')
const thirdStep = document.querySelector('#third__step')
const fourthStep = document.querySelector('#fourth__step')

var count = 1



next2.addEventListener('click', (e) => {
    count = 2
    document.querySelector('#progress').style.width = '50%'
    document.querySelector('#progress').style.transition = '1s'
    document.getElementById('counter').innerText = count
    firstStep.style.display = 'none'
    secondStep.style.display = 'block'
    back1.style.display = 'block'
    console.log(e)
});


next3.addEventListener('click', (e) => {
    count = 3
    document.querySelector('#progress').style.width = '75%'
    document.querySelector('#progress').style.transition = '1s'    
    document.getElementById('counter').innerText = count
    secondStep.style.display = 'none'
    thirdStep.style.display = 'block'
    back2.style.display = 'block'
    console.log(e)
})

next4.addEventListener('click', (e) => {
    count = 4
    document.querySelector('#progress').style.width = '100%'
    document.querySelector('#progress').style.transition = '1s'    
    document.getElementById('counter').innerText = count
    thirdStep.style.display = 'none'
    fourthStep.style.display = 'block'
    back3.style.display = 'block'
    console.log(e)
})

back1.addEventListener('click', (e) => {
    count = 1
    document.querySelector('#progress').style.width = '25%'
    document.querySelector('#progress').style.transition = '1s'    
    document.getElementById('counter').innerText = count
    firstStep.style.display = 'block'
    secondStep.style.display = 'none'
    console.log(e)
})

back2.addEventListener('click', (e) => {
    count = 2
    document.querySelector('#progress').style.width = '50%'
    document.querySelector('#progress').style.transition = '1s'    
    document.getElementById('counter').innerText = count
    secondStep.style.display = 'block'
    thirdStep.style.display = 'none'
    console.log(e)
})

back3.addEventListener('click', (e) => {
    count = 3
    document.querySelector('#progress').style.width = '75%'
    document.querySelector('#progress').style.transition = '1s'    
    document.getElementById('counter').innerText = count
    thirdStep.style.display = 'block'
    fourthStep.style.display = 'none'
    console.log(e)
})


////////////////////// FIRST STEP PAGE CARTS //////////////////////

const firstCart = document.querySelector('.first__cart');
const secondCart = document.querySelector('.second__cart');

firstCart.addEventListener('click', () => {
    next2.disabled = false
    firstCart.style.color = 'black'
    secondCart.style.color = 'gray'
    next2.style.backgroundColor = '#ec5252'
    next2.style.color = 'white'
    
});

secondCart.addEventListener('click', () => {
    next2.disabled = false
    firstCart.style.color = 'gray';
    secondCart.style.color = 'black';
    next2.style.backgroundColor = '#ec5252'
    next2.style.color = 'white'
    
});


/////////////////// SECOND STEP PAGE /////////////////

const input = document.getElementById('input')
const inputCounter = document.querySelector('#input__counter')
input.value = " "

input.addEventListener('keyup', (e) => {
    next3.disabled = false
    next3.style.backgroundColor = '#ec5252'
    next3.style.color = 'white'
    const valueLength = e.target.value.length
    const maxChars = parseInt(e.target.getAttribute("data-max-chars"))
    const remainChars = maxChars - valueLength
    inputCounter.innerHTML = remainChars     
})



/////////////////// THIRD STEP PAGE /////////////////

const selectCategory = document.querySelector('#select__category')
const selectedElement = document.querySelector('#selected__element')
const categoryLabel = document.querySelector('#categories')
const categories = document.querySelectorAll('.select__category')

selectCategory.addEventListener('click', () => {
    categoryLabel.style.display = 'block'
})

for (const element of categories) {
    element.addEventListener('click', (e) => {
        next4.disabled = false
        next4.style.backgroundColor = '#ec5252'
        next4.style.color = 'white'
        selectedElement.innerText = e.target.innerText
        categoryLabel.style.display = 'none'

    })
}


/////////////////// FOURTH STEP PAGE /////////////////

const firstRadioButton = document.querySelector('#radio__input1');
const secondRadioButton = document.querySelector('#radio__input2');
const thirdRadioButton = document.querySelector('#radio__input3');

firstRadioButton.addEventListener('click', (e) => {
    console.log(e.target.nextElementSibling.innerText)
    createCourse.style.backgroundColor = '#ec5252'
    document.querySelector('#link').style.color = 'white'
});

secondRadioButton.addEventListener('click', (e) => {
    console.log(e.target.nextElementSibling.innerText)
    createCourse.style.backgroundColor = '#ec5252'
    document.querySelector('#link').style.color = 'white'
});

thirdRadioButton.addEventListener('click', (e) => {
    console.log(e.target.nextElementSibling.innerText)
    createCourse.style.backgroundColor = '#ec5252'
    document.querySelector('#link').style.color = 'white'
});
