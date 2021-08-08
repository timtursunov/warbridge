//on scroll function
let lastScrollTop = 0;
let header = document.querySelector('#head');

window.addEventListener('scroll', (() => {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if(scrollTop>lastScrollTop){
        header.style.top = '-91px'
    } else {
        header.style.top = '0'
    }
    lastScrollTop = scrollTop
}))
//parallax effect
let layer1 = document.querySelector('#layer1')
let layer2 = document.querySelector('#layer2')
let layer3 = document.querySelector('#layer3')
let text = document.querySelector('#text')

window.addEventListener('scroll', (() => {
    let value = window.scrollY;
    layer1.style.top = value * 0.5 + 'px'
    layer2.style.top = value * 0.15 + 'px'
    layer3.style.top = value * 0.8 + 'px'
}))

//slider function
let currentSlide = 0;
let totalSlides = 3

let nextBtn = document.querySelector('#next')
let prevBtn = document.querySelector('#prev')
let holder = document.querySelector('.holder')

// photo containers ids
let container1 = document.querySelector('#imgDivOne')
let container2 = document.querySelector('#imgDivTwo')
let container3 = document.querySelector('#imgDivThree')
let container4 = document.querySelector('#imgDivFour')
// holders container ids
let holder2 = document.querySelector('#holderDivTwo')
let holder3 = document.querySelector('#holderDivThree')
let holder4 = document.querySelector('#holderDivFour')
let holder5 = document.querySelector('#holderDivFour')
// text color
let textTwo = document.querySelector('#textTwo')
let textThree = document.querySelector('#textThree')
let textFour = document.querySelector('#textFour')
// border div animation div
let slideImageHeadingTwo = document.querySelector('#slideImageHeadingTwo')
let slideImageHeadingThree = document.querySelector('#slideImageHeadingThree')
let slideImageHeadingFour = document.querySelector('#slideImageHeadingFour')

let previousSlide = () => {
    currentSlide = currentSlide - 1;
    if (currentSlide >= 0){
        container2.classList.remove('slide--next')
        holder2.classList.add('holder--prev')
        textTwo.classList.remove('slide__text--next')
        slideImageHeadingTwo.classList.remove('slide__image-heading--next')
        let unit = -currentSlide*1405
        let leftPosition = unit+'px'
        holder.style.left = leftPosition
        if(currentSlide === 1){
            let unit = -currentSlide*1405
            let leftPosition = unit+'px'
            holder.style.left = leftPosition
            container3.classList.remove('slide--next')
            holder3.classList.add('holder--prev')
            textThree.classList.remove('slide__text--next')
            slideImageHeadingThree.classList.remove('slide__image-heading--next')

        } else if (currentSlide === 2){
            let unit = -currentSlide*1405
            let leftPosition = unit+'px'
            holder.style.left = leftPosition
            container4.classList.remove('slide--next')
            holder4.classList.add('holder--prev')
            textFour.classList.remove('slide__text--next')
            slideImageHeadingFour.classList.remove('slide__image-heading--next')
        } 
    } else {
        console.log('its done')
    }
}
let nextSlide = () => {
    currentSlide = currentSlide + 1;
    if(currentSlide <= 3){
        if(currentSlide === 1){
            container2.classList.add('slide--next')
            holder2.classList.remove('holder--prev')
            textTwo.classList.add('slide__text--next')
            slideImageHeadingTwo.classList.add('slide__image-heading--next')
            let unit = -currentSlide*1405
            let leftPosition = unit+'px'
            holder.style.left = leftPosition
            console.log('it worked')
        }  else if (currentSlide === 2) {
            console.log('two')
            container3.classList.add('slide--next')
            textThree.classList.add('slide__text--next')
            slideImageHeadingThree.classList.add('slide__image-heading--next')
            let unit = -currentSlide*1405
            let leftPosition = unit+'px'
            holder.style.left = leftPosition
        } else if (currentSlide === 3){
            console.log('three')
            container4.classList.add('slide--next')
            slideImageHeadingFour.classList.add('slide__image-heading--next')
            textFour.classList.add('slide__text--next')
            let unit = -currentSlide*1405
            let leftPosition = unit+'px'
            holder.style.left = leftPosition
            nextBtn.disabled= true
        }
    } else {
        console.log('other')
    }
}
prevBtn.addEventListener('click', ()=> {
    previousSlide()
})
nextBtn.addEventListener('click', ()=> {
    nextSlide()
} )

