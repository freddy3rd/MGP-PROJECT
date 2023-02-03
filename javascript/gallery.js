// let activeIndex = 0;


// const image_list = document.querySelectorAll('.grid-wrapper > div')

// var arr_class = ["tall","wide","big",null]


// getClass();

// function getClass(){
//     for(let i = 0 ; i < image_list.length ; i++){
//         let assigned_class = Math.floor(Math.random() * arr_class.length)
//         console.log(image_list[i].classList.add(arr_class[assigned_class]));
//     }
// }


const container = document.querySelector('.container');

const imgList = localStorage.getItem('Img path')
var paths = JSON.parse(imgList)


// paths.forEach(path => {
//     console.log(path);
// });


// generateMasonryGrid(3,paths)

function generateMasonryGrid(columns,paths){
    container.innerHTML = '';


    let columnWrappers = {}

    for(let i = 0; i < columns; i++){
        columnWrappers[`column${i}`] = [];
    }

    for(let i = 0; i < paths.length; i++){
        const column = i % columns;
        columnWrappers[`column${column}`].push(paths[i]);
        
    }

        for(let i = 0; i < columns; i++){
        let columnPosts = columnWrappers[`column${i}`];
        let div = document.createElement('div');
        div.classList.add('column');

        columnPosts.forEach(post => {
            let postDiv = document.createElement('div');
            postDiv.classList.add('post');
            let image = document.createElement('img');
            image.src = post;
            let hoverDiv = document.createElement('div');
            hoverDiv.classList.add('overlay');
            let title = document.createElement('h3');
            title.innerText = 'View Image';
            hoverDiv.appendChild(title);
    
            
            postDiv.append(image, hoverDiv)
            div.appendChild(postDiv) 

        });
        container.appendChild(div);
    }
}




let previousScreenSize = window.innerWidth;

window.addEventListener('resize', () => {
    imageIndex = 0;
    if(window.innerWidth < 600 && previousScreenSize >= 600){
        generateMasonryGrid(1, paths);
    }else if(window.innerWidth >= 600 && window.innerWidth < 1000 && (previousScreenSize < 600 || previousScreenSize >= 1000)){
        generateMasonryGrid(2, paths);

    }else if(window.innerWidth >= 1000 && previousScreenSize < 1000){
        generateMasonryGrid(3, paths)
    }
    previousScreenSize = window.innerWidth;

})

if(previousScreenSize < 600){
    generateMasonryGrid(1, paths)
}else if(previousScreenSize >= 600 && previousScreenSize < 1000){
    generateMasonryGrid(2, paths)
}else{
    generateMasonryGrid(3, paths)
}

document.addEventListener('click', e =>{
    let img
    if(e.target.matches('post')){
        img = e.target
        viewImage(img.cloneNode('true'))
        // console.log(img);
    }
    console.log(e.target)

});

function viewImage(img){
    const viewImageContainer = document.querySelector('.view-image')
    const image_container = document.createElement('div');
    image_container.classList.add('image-container')
    image_container.appendChild(img)
    viewImageContainer.appendChild(image_container)
    viewImageContainer.classList.add('active')

}

