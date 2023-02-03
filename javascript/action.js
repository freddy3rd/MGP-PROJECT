


$(document).ready(function(){
    $(document).on('click','.choices',function(){
        var image = $(this).attr('name') + '_tbl';
        var name = $(this).attr('name');
        $.ajax({
                    url	:	"get_images.php",
                    method:	"POST",
                    data	:	{get_var:1, image:image,name:name},
                    beforeSend: function(){
                        location.href = "./gallery.php"
                    },
                    success	:	function(reps){
                        
                        fetch_images();
                    }
                })
        })

    function fetch_images(){
        $.ajax({
        // url	:"  get_images.php",
        url: "gallery.php",
        method:	"GET",
        data	:	{get_var:1},
        success: function(data){
            
            }       
        })
    }
    // $(document).on('click','.year',function(){ 
    //     $.ajax({
    //                 url	:	"get_images.php",
    //                 method:	"POST",
    //                 data	:	{candidate_list:1},
    //                 success	:	function(){
    //                     location.href = 'candidate_list.php';
    //                     fetch_images2();
    //                 }
    //             })

    // })
    // function fetch_images2(){
    //     $.ajax({
    //     // url	:"  get_images.php",
    //     url: "gallery.php",
    //     method:	"GET",
    //     data	:	{candidate_list:1},
    //     success: function(data){
    //          $("#candidate_list").html(data);
    //         }       
    //     })
    // }

    //skeleton loading

})//end

const clearInput = () =>{
    let inputs = document.querySelectorAll('.input')
            inputs.forEach(input => {
                if(input.value != ""){
                    input.value = "";
                }
            });
}

const validateEmail = (emailField) => {
    return String(emailField).match(
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
  };
  
  const validate = () => {
  const email = $('#email').val();

  if (!validateEmail(email)) {
    $('#email').addClass('error');
    return false;

  } else{
    return true;
  }
 
}

var inputs = document.querySelectorAll('.input')

const validateInputs = (inputIsNotEmpty) =>{

    inputs.forEach(input =>{
        if(input.value !== ""){
            inputIsNotEmpty = true;
        }else{
            $(input).addClass('error');
            inputIsNotEmpty = false;
        }

        input.addEventListener('focus',()=>{
            $(input).removeClass('error')
        })
    }) 
    return inputIsNotEmpty
}



$(document).on('click',"#submit",function(e){
        e.preventDefault();

        const inputIsNotEmpty = false;
        
        validateInputs(inputIsNotEmpty);
        validate()

        console.log("inputs " + validateInputs(inputIsNotEmpty) + 
        " email " + validate());

        if(validate() === true && validateInputs(inputIsNotEmpty) === true){
            
            var email = $('#email').val();
            var name = $('#name').val();
            var body = $('#inquiry').val();
            $.ajax({
            url: "send-email.php",
            method:	"POST",
            data	:	{
                name:name,
                email:email,
                message:body
            },
            success: function(){  
                $('.popup-container').attr('data-status','active')  
                clearInput();
             
             }
        })   
    }
})

var initial = 0, last = 10;

const sqlQuery = {
    start: 0,
    end: 10,
    selectFucntion() {
        var select =  "SELECT * FROM candidate_tbl WHERE id BETWEEN "+ this.start  + " and "+ this.end +" AND year = 2022 ";
        return select
    }
}

imageQuery(sqlQuery.selectFucntion());

function imageQuery(query){
    $.ajax({
        // url	:"  get_images.php",
    url: "get_images.php",
    method:	"POST",
    data	:	{candidate:1,query:query},
    beforeSend: function(){
        $('#candidate_list').html(skeleton_loading())
    },
    success: function(data){
        $('#candidate_list').html(data);
     }
    })
}

function skeleton_loading(){
    var output = '';
    for(var x = 0; x < 10; x++){
        output += '<div class="candidate-container skeleton_loading"></div>';
    }
    return output
}

const buttonStatus = () => {
    let next = document.querySelector('#next');
    let prev = document.querySelector('#prev');

    (sqlQuery.start === 0) ? prev.disabled = true :  prev.disabled = false;
    (sqlQuery.end === 30) ? next.disabled = true :next.disabled = false;
}

// imageQuery(sqlQuery.selectFucntion())


$(document).on('click','#next',() =>{
    initial += 11
    last += 10

    Object.assign(sqlQuery,{
        start: initial,
        end : last
    });
    buttonStatus();
    imageQuery(sqlQuery.selectFucntion())
  
})
$(document).on('click','#prev',() =>{
    initial -= 11
    last -= 10

    Object.assign(sqlQuery,{
        start: initial,
        end : last
    });
    imageQuery(sqlQuery.selectFucntion())
    buttonStatus();
})

// next.addEventListener("click",function(){
 
//     console.log(sqlQuery.selectFucntion());
// })


// prev.addEventListener("click",function(){
 
//     console.log(sqlQuery.selectFucntion());
// });




