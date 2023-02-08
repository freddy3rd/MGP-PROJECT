let refs = {};
refs.imagePreviews = document.querySelector('#previews');
refs.fileSelector = document.querySelector('input[type=file]');

function addImageBox(container) {
  let imageBox = document.createElement("div");
  imageBox.classList.add('position-relative');
  let progressBox = document.createElement("progress");
  imageBox.appendChild(progressBox);
  container.appendChild(imageBox);
  
  return imageBox;
}

function processFile(file) {
  if (!file) {
    return;
  }
  // console.log(file);

  let imageBox = addImageBox(refs.imagePreviews);

  // Load the data into an image
  new Promise(function (resolve, reject) {
    let rawImage = new Image();

    rawImage.addEventListener("load", function () {
      resolve(rawImage);
    });

    rawImage.src = URL.createObjectURL(file);
  })
  .then(function (rawImage) {
    // Convert image to webp ObjectURL via a canvas blob
    return new Promise(function (resolve, reject) {
      let canvas = document.createElement('canvas');
      let ctx = canvas.getContext("2d");

      canvas.width = rawImage.width;
      canvas.height = rawImage.height;
      ctx.drawImage(rawImage, 0, 0);

      canvas.toBlob(function (blob) {
        resolve(URL.createObjectURL(blob));
      }, "image/webp");
    });
  })
  .then(function (imageURL) {
    // Load image for display on the page
    return new Promise(function (resolve, reject) {
      let scaledImg = new Image();

      scaledImg.addEventListener("load", function () {
        resolve({imageURL, scaledImg});
      });

      scaledImg.setAttribute("src", imageURL);
    });
  })
  .then(function (data) {
    // Inject into the DOM
    
  
    let inputs = document.querySelectorAll('input')
    let imageDiv = document.createElement("div");
    
    imageDiv.classList.add('image-container')
    // imageDiv.setAttribute("href", data.imageURL);
    imageDiv.appendChild(data.scaledImg);

    
    imageBox.innerHTML = "";

    document.addEventListener('click',function(e){
      let modal = document.querySelector("#addCandidate")
      if(modal.getAttribute('aria-hidden') === 'true'){
        clearInput(inputs,imageBox)
      }
    });

    imageBox.appendChild(imageDiv);


   
  });
}

function clearInput(inputs,imageBox){
  inputs.forEach(input => {
    input.value = "";
  });
  imageBox.innerHTML = ""; 
  refs.fileSelector.disabled = false
}


function processFiles(files) {
  for (let file of files) {
    processFile(file);
  }
}

function fileSelectorChanged() {
  processFiles(refs.fileSelector.files);
  // refs.fileSelector.value = `${file.name}.webp`;
  refs.fileSelector.disabled = true
}

refs.fileSelector.addEventListener("change", fileSelectorChanged);



// Set up Drag and Drop
// function dragenter(e) {
//   e.stopPropagation();
//   e.preventDefault();
// }

// function dragover(e) {
//   e.stopPropagation();
//   e.preventDefault();
// }

// function drop(callback, e) {
//   e.stopPropagation();
//   e.preventDefault();
//   callback(e.dataTransfer.files);
// }

// function setDragDrop(area, callback) {
//   area.addEventListener("dragenter", dragenter, false);
//   area.addEventListener("dragover", dragover, false);
//   area.addEventListener("drop", function (e) { drop(callback, e); }, false);
// }
// setDragDrop(document.documentElement, processFiles);