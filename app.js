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




let previousSlide = () => {
    currentSlide = currentSlide - 1;
    if (currentSlide >= 0){
        holder2.classList.add('holder--prev')
        container2.classList.remove('slide--next')
        let unit = -currentSlide*1405
        let leftPosition = unit+'px'
        holder.style.left = leftPosition
        if(currentSlide === 1){
            holder3.classList.add('holder--prev')
            container3.classList.remove('slide--next')
            let unit = -currentSlide*1405
            let leftPosition = unit+'px'
            holder.style.left = leftPosition
        } else if (currentSlide === 2){
            holder4.classList.add('holder--prev')
            container4.classList.remove('slide--next')
            let unit = -currentSlide*1405
            let leftPosition = unit+'px'
            holder.style.left = leftPosition
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
            let unit = -currentSlide*1405
            let leftPosition = unit+'px'
            holder.style.left = leftPosition
            console.log('it worked')
        }  else if (currentSlide === 2) {
            console.log('two')
            container3.classList.add('slide--next')
            holder3.classList.remove('holder--prev')
            let unit = -currentSlide*1405
            let leftPosition = unit+'px'
            holder.style.left = leftPosition
        } else if (currentSlide === 3){
            console.log('three')
            container4.classList.add('slide--next')
            holder4.classList.remove('holder--prev')
            let unit = -currentSlide*1405
            let leftPosition = unit+'px'
            holder.style.left = leftPosition
        }
    } else {
        console.log('its done')
    }
}
prevBtn.addEventListener('click', ()=> {
    previousSlide()
})
nextBtn.addEventListener('click', ()=> {
    nextSlide()
} )

