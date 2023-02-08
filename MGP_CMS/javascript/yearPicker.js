let yearList = document.querySelector('.yearList')
let yearSelection = document.querySelector('.yearSelection')
let yearInput = document.querySelector('input[type="text"].yearInput')

let currentDate = new Date().getFullYear();
// console.log(currentDate)

// beforeCurrentDate = currentDate - 1;
let li = document.createElement('li')
let beforeCurrentDate = currentDate - 1 + 1

for(let x = 0 ; x < 5 ; x++){
    beforeCurrentDate -= 1
    li.innerHTML +=`<a class="dropdown-item year" href="#">${beforeCurrentDate}</a>`
}
yearList.appendChild(li)
yearSelection.appendChild(li.cloneNode(true))

document.addEventListener('click',function(e){
    let date 
    if(e.target.classList.contains('year')){
        date = e.target
        selectedDate(date)
    }
})

function selectedDate(date){
    yearInput.setAttribute('value',date.innerText)
}