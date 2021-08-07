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

let previousSlide = () => {
    currentSlide = currentSlide - 1;
    if (currentSlide >= 0){
        let unit = -currentSlide*1405
        let leftPosition = unit+'px'
        holder.style.left = leftPosition
    } else {
        console.log('its done')
    }
}
let nextSlide = () => {
    currentSlide = currentSlide + 1;
    if(currentSlide <= 3){
        let unit = -currentSlide*1405
        let leftPosition = unit+'px'
        holder.style.left = leftPosition
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

