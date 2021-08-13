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