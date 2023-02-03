const hamburger = document.querySelector('.header i');


hamburger.addEventListener('click',() =>{
    const sidebar_menu = document.querySelector('.sidebar')
    $(sidebar_menu).toggleClass('active'  )
})

