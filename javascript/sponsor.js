let video_list = document.querySelectorAll('.video-container');
let video_container = document.querySelector('.video')
let info_container = document.querySelector('.info')



document.addEventListener('click', vid =>{
    let video
    if(vid.target.matches('#play_button')){
        video = vid.target;
    }else{
       video = vid.target.closest('#play_button')
    }
    if(video != null ) onVideoClick(video)
});

// console.log(play_buttons.classList.contains(''));  

function onVideoClick(video){
    const video_content = video.closest('.video-container').querySelector(".video");
    const info_content = $(video).closest('.video-container').children()[1];
    const activeVideo = document.querySelector(".video video")
    const active_button = document.querySelector('[data-status="active"]')

    let src = $(video_content).attr('src');
    
    if(video_content.classList.contains('video')){ //Condition to change append the value of the video to hero_container
        activeVideo.setAttribute('src', src);
        $(info_container).empty().append(info_content.cloneNode(true))
        active_button.dataset.status = "inactive"
        video.children[0].setAttribute('data-status','active')
    };
};

//Create function that generate a number that based on the video list lenght 

var randomFixedInteger = function (length) {
    return Math.floor(Math.pow(video_list.length, length - 1) + Math.random() * (Math.pow(video_list.length, length) - Math.pow(video_list.length, length-1) - 1));   
}

//Create a fucntion that generate random active video

randomVideo();

function randomVideo(){

    let activeVideo = document.createElement('video');
    let randomNumber = randomFixedInteger(1)
    
    let src = video_list[randomNumber].children[0].getAttribute('src')
    let video_info = video_list[randomNumber].children[1]
    let play_button_status = () => video_list[randomNumber].children[2].children[0].setAttribute('data-status','active') //set attribute to data-status

    Object.assign(activeVideo,{
        src : src,
        className: 'hero' ,
        controls : 1
    })
    video_container.appendChild(activeVideo)
    info_container.appendChild(video_info.cloneNode(true))
    play_button_status();
}





