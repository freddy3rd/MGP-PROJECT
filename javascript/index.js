const images = document.getElementsByClassName('image-container');
let activeIndex = 0;
let intervalID;

function startCount(){
    if( activeIndex > images.length){
        activeIndex = 0
    }
   activeIndex += 1;
//    console.log(activeIndex);
};

intervalID = setInterval (startCount,1000);

let submit_button = document.querySelector('.submit')

document.addEventListener('click', e =>{
    let handle
    if(e.target.matches('.close')){
        handle = e.target
        closePopUp(handle)
    }else{
        handle = e.target.closest('.close')
    }
    if(handle != null ) closePopUp(handle)
});

function closePopUp(handle){    
    let handleParent =  $(handle).parent(),
    handleGrandma = $(handleParent).parent();
    $(handleParent).removeAttr('data-status');
    $(handleGrandma).removeAttr('data-status')
}

const carouselButton = document.querySelectorAll('[data-carousel-button]');

carouselButton.forEach(button => {
    button.addEventListener("click", () =>{
        const offset = button.dataset.carouselButton === "next" ? 1 : -1
        const slide  = button
            .closest("[data-carousel]")
            .querySelector("[data-slides]")


        const activeSlide = slide.querySelector("[data-active]")
        let newIndex = [...slide.children].indexOf(activeSlide) + offset
        if (newIndex < 0) newIndex = slide.children.length - 1
        if(newIndex >= slide.children.length) newIndex = 0

        
        slide.children[newIndex].dataset.active = true
        delete activeSlide.dataset.active
        
    })
})

// const objectEnter = {
//     threshold: 0,
//     rootMargin: "0px 0px 300px 0px" 
// }

// const observer = new IntersectionObserver((entries,observer) =>{
//     entries.forEach(entry =>{
//         if(!entry.isIntersecting){
//             return;
//         }else{
            
//         }
//     })
// },objectEnter)
