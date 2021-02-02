
// just for testing
window._playeah = {
    celebrations :[
        {
            id:-1,
            type:"full",
            progress: 10,
            lottie:"https://assets8.lottiefiles.com/packages/lf20_agk79xb1.json",
            heading:"",
            copy:"",
            cta_text:"",
            cta_link:"",
            played: false

        },

        {
            id:-1,
            type:"full",
            progress: 100,
            lottie:"https://assets5.lottiefiles.com/packages/lf20_t1qvgine.json",
            heading:"",
            copy:"",
            cta_text:"",
            cta_link:"",
            played: false

        }
    ]
};

//(function () {
    var celebrations = window._playeah.celebrations;
    var _playeah_lottie = null;
    const hide_fs_lottie = function (){
        console.log("complete"); 
        $("#playeah").hide();
        _playeah_lottie.removeEventListener('complete', hide_fs_lottie);

    }

    const show_celebration = function(index){
        var celebration = celebrations[index];
        if(!celebration.played){
            _playeah_lottie=document.querySelector("lottie-player");
            _playeah_lottie.addEventListener('complete', hide_fs_lottie);
    
            $("#playeah").show();
            _playeah_lottie.load(celebration.lottie);
            celebrations[index].played = true;            

        }

    }

    const init = function(){
        $( document ).ready(function() {
        });
    }

    const inject_lottie= function(){
        var f = document.getElementsByTagName("script")[0],
           j = document.createElement("script");
           j.async = false;
           j.src = "https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js";
           f.parentNode.insertBefore(j, f);
   }

    const inject_uikit= function(){
         var f = document.getElementsByTagName("script")[0],
            j = document.createElement("script");
            j.async = false;
            j.src = "https://cdn.jsdelivr.net/npm/uikit@3.6.5/dist/js/uikit.min.js";
            f.parentNode.insertBefore(j, f);

            j3 = document.createElement("link");
            j3.rel = "stylesheet";
            j3.href = "https://cdn.jsdelivr.net/npm/uikit@3.6.5/dist/css/uikit.min.css";
            f.parentNode.insertBefore(j3, f);
    }
    const inject_fa= function(){
        var f = document.getElementsByTagName("script")[0],
           j = document.createElement("script");
           j.async = true;
           j.src = "https://robgalvinco.github.io/fapro/js/all.js";
           f.parentNode.insertBefore(j, f);
           
           j2 = document.createElement("script");
           j2.async = true;
           j2.src = "https://robgalvinco.github.io/fapro/js/v4-shims.min.js";
           f.parentNode.insertBefore(j2, f);

           j3 = document.createElement("link");
           j3.rel = "stylesheet";
           j3.href = "https://robgalvinco.github.io/fapro/css/all.css";
           f.parentNode.insertBefore(j3, f);

   }    
   const inject_html= function(){
       console.log("injecting html");
       var html = '<lottie-player id="playeah" background="transparent" speed="1" style="position: absolute;top: 0;left: 0;width: 100%;height: 100%;z-index: 9999999999;" autoplay=""></lottie-player>';
        $("body").append(html)       
   }
   const inject_styles = function(){
       var style = '<style>#playeah{display:none;</style>';
       $("body").prepend(style);       
   }
   $( document ).ready(function() {
        if(typeof(CoursePlayerV2) !== 'undefined') {
            
                inject_styles();
                inject_lottie();
                inject_uikit();
                inject_html();
        }
        CoursePlayerV2.on('hooks:contentWasCompleted', function(data) {
            console.log(data);
        });
        CoursePlayerV2.on('hooks:enrollmentWasCompleted', function(data) {
            console.log(data);
        });                
    });

        
    
//}());
