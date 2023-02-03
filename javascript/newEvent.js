
window.fbAsyncInit = function() {
  FB.init({
    appId            : '900620591376183',
    autoLogAppEvents : true,
    xfbml            : true,
    version          : 'v16.0'
  });


testAPI();
};

(function(d){
  var js, id = 'facebook-jssdk'; if (d.getElementById(id)) {return;}
  js = d.createElement('script'); js.id = id; js.async = true;
  js.src = "https://connect.facebook.net/es_LA/all.js";
  d.getElementsByTagName('head')[0].appendChild(js);
}(document));




 function testAPI(){
  FB.api('/me/feed', function(response){
        if(response && !response.error){
          buildFeed(response);
         }
      });

    }
 
      function buildFeed(feed){
        let output = '<h3>Latest Posts</h3>';
        for(let i in feed.data){
          if(feed.data[i].message){
            output += `
              <div class="well">
                ${feed.data[i].message} <span>${feed.data[i].created_time}</span>
              </div>
            `;
          }
        }

        document.getElementById('feed').innerHTML = output;
      }


