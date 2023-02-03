
const images = []  

 var image_name = document.querySelectorAll('li.path')
   image_name.forEach(path =>{
     images.push(path.innerHTML)
   })
  
   
   localStorage.setItem('Img path',JSON.stringify(images))
//    export default images = [];
