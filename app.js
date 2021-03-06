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
    layer2.style.top = value * 0.7 + 'px'
    layer3.style.top = value * 0.2 + 'px'
}))

//slider function
let currentSlide = 0;
let totalSlides = 3

let nextBtn = document.querySelector('#next')
let prevBtn = document.querySelector('#prev')
let holder = document.querySelector('.holder')

// photo containers ids
let container2 = document.querySelector('#imgDivTwo')
let container3 = document.querySelector('#imgDivThree')
let container4 = document.querySelector('#imgDivFour')
// holders container ids
let holder2 = document.querySelector('#holderDivTwo')
let holder3 = document.querySelector('#holderDivThree')
let holder4 = document.querySelector('#holderDivFour')
// text color
let textTwo = document.querySelector('#textTwo')
let textThree = document.querySelector('#textThree')
let textFour = document.querySelector('#textFour')
// border div animation div
let slideImageHeadingTwo = document.querySelector('#slideImageHeadingTwo')
let slideImageHeadingThree = document.querySelector('#slideImageHeadingThree')
let slideImageHeadingFour = document.querySelector('#slideImageHeadingFour')
// slide buttons
let slideBtn2 = document.querySelector('#slideBtn2')
let slideBtn3 = document.querySelector('#slideBtn3')
let slideBtn4 = document.querySelector('#slideBtn4')
//slideBtn2



let previousSlide = () => {
    currentSlide = currentSlide - 1;
    nextBtn.disabled= false
    if (currentSlide <= 3){
        if (currentSlide === 0){
            container2.classList.remove('slide--next')
            holder2.classList.add('holder--prev')
            textTwo.classList.remove('slide__text--next')
            slideImageHeadingTwo.classList.remove('slide__image-heading--next')
            slideBtn2.classList.remove('slide__button--next')
            let unit = -currentSlide*1405
            let leftPosition = unit+'px'
            holder.style.left = leftPosition
        } else if (currentSlide === 1){
            container3.classList.remove('slide--next')
            holder3.classList.add('holder--prev')
            textThree.classList.remove('slide__text--next')
            slideImageHeadingThree.classList.remove('slide__image-heading--next')
            slideBtn3.classList.remove('slide__button--next')
            let unit = -currentSlide*1405
            let leftPosition = unit+'px'
            holder.style.left = leftPosition
        } else if (currentSlide ===2) {
            container4.classList.remove('slide--next')
            holder4.classList.add('holder--prev')
            textFour.classList.remove('slide__text--next')
            slideImageHeadingFour.classList.remove('slide__image-heading--next')
            slideBtn4.classList.remove('slide__button--next')
            let unit = -currentSlide*1405
            let leftPosition = unit+'px'
            holder.style.left = leftPosition

        } else {
            console.log('its done')
        }

    }
}
let nextSlide = () => {
    currentSlide = currentSlide + 1;
    if(currentSlide <= 3){
        if(currentSlide === 1){
            nextBtn.disabled= false
            slideImageHeadingTwo.classList.add('slide__image-heading--next')
            container2.classList.add('slide--next')
            holder2.classList.remove('holder--prev')
            textTwo.classList.add('slide__text--next')
            slideBtn2.classList.add('slide__button--next')

            let unit = -currentSlide*1405
            let leftPosition = unit+'px'
            holder.style.left = leftPosition
            console.log('it worked')
        }  else if (currentSlide === 2) {
            console.log('two')
            slideImageHeadingThree.classList.add('slide__image-heading--next')
            container3.classList.add('slide--next')
            holder3.classList.remove('holder--prev')
            textThree.classList.add('slide__text--next')
            slideBtn3.classList.add('slide__button--next')
            let unit = -currentSlide*1405
            let leftPosition = unit+'px'
            holder.style.left = leftPosition
        } else if (currentSlide === 3){
            console.log('three')
            slideImageHeadingFour.classList.add('slide__image-heading--next')
            container4.classList.add('slide--next')
            holder4.classList.remove('holder--prev')
            textFour.classList.add('slide__text--next')
            slideBtn4.classList.add('slide__button--next')
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

// team click function 

let teambutton1 = document.querySelector('#teamBtn1');
let teambutton2 = document.querySelector('#teamBtn2');
let teambutton3 = document.querySelector('#teamBtn3');
let teambutton4 = document.querySelector('#teamBtn4');

let avatar1 = document.querySelector('#avatar')


teambutton1.addEventListener('click', ()=> {
    node.removeChild()
    console.log('parcels')
})

//elem.parentNode.removeChild(elem)

// draggable slider  using jQuery

$('.owl-carousel').owlCarousel({
    loop:true,
    autoWidth:true,
    items:4
})


