
// just for testing
window._playeah = {
    celebrations :[
        {
            id:"all",
            type:"modal",
            progress: 30,
            lottie:"https://assets8.lottiefiles.com/packages/lf20_agk79xb1.json",
            heading:"You are taking off like a rocket!!",
            copy:"Keep up the great work!!! Don't stop now - keep er going",
            cta_text:"",
            cta_link:"",
            played: false

        },
        {
            id:"1146281",
            type:"modal",
            progress: 30,
            lottie:"https://assets5.lottiefiles.com/datafiles/zc3XRzudyWE36ZBJr7PIkkqq0PFIrIBgp4ojqShI/newAnimation.json",
            heading:"You unlocked a gift!!",
            copy:"What are you waiting for??? Open it up",
            cta_text:"Claim Gift",
            cta_link:"#",
            played: false

        },

        {
            id:"all",
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
            if(celebration.type=="full"){
                _playeah_lottie=document.querySelector("lottie-player");
                _playeah_lottie.addEventListener('complete', hide_fs_lottie);
        
                $("#playeah").show();
                _playeah_lottie.load(celebration.lottie);
                celebrations[index].played = true;            
            }
            if(celebration.type=="modal" || celebration.type=="push"){
                //set modal content
                if(celebration.heading != ""){
                    $(".playeah-modal-heading").show();
                    $(".playeah-modal-heading").text(celebration.heading)
                } else {
                    $(".playeah-modal-heading").hide();
                }
                if(celebration.copy != ""){
                    $(".playeah-modal-copy").show();
                    $(".playeah-modal-copy").text(celebration.copy)
                } else {
                    $(".playeah-modal-copy").hide();
                }
                if(celebration.cta_text != "" && celebration.cta_link != ""){
                    $(".playeah-modal-cta").show();
                    $(".playeah-modal-cta").attr("href",celebration.cta_link);
                    $(".playeah-modal-cta").text(celebration.cta_text);
                } else {
                    $(".playeah-modal-cta").hide();
                }
                //load lottie
                var lottie_html = '<lottie-player  src="'+celebration.lottie+'" background="transparent"  speed="1"  style="height: 100%;"  loop  autoplay></lottie-player>';
                $(".playeah-modal-image").html(lottie_html);
                if(celebration.type=="push"){
                    UIkit.offcanvas($("#playeah-push")).show()
                } else {
                    UIkit.modal($("#playeah-modal")).show()
                }
                
                celebrations[index].played = true;            
            }

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
            j.src = "https://cdn.jsdelivr.net/npm/uikit@3.6.15/dist/js/uikit.min.js";
            f.parentNode.insertBefore(j, f);

            j3 = document.createElement("link");
            j3.rel = "stylesheet";
            j3.href = "https://cdn.jsdelivr.net/npm/uikit@3.6.15/dist/css/uikit.min.css";
            //j3.href = "https://getuikit.com/css/theme.css?1395";
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
       var style = '<style>#playeah{display:none;}.playeah-modal-image{height:200px;width: 200px;margin-left: auto!important;margin-right: auto!important;}</style>';
       $("body").prepend(style);       
   }
   const find_and_play = function(progress, courseid){
    var __allcourses_index = celebrations.findIndex(function(celebration, index) {
        if(celebration.id == "all" && celebration.progress<=progress && !celebration.played)
            return true;
    });     
    console.log("all index: "+__allcourses_index);  
    var __courses_index = celebrations.findIndex(function(celebration, index) {
        if(celebration.id == courseid && celebration.progress<=progress && !celebration.played)
            return true;
    }); 
    console.log("course index: "+__courses_index);
    if(__courses_index != -1){
            show_celebration(__courses_index);
    }  else {
        if(__allcourses_index != -1){
            show_celebration(__allcourses_index)
        }
    }
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
            find_and_play(data.enrollment.percentage_completed,data.course.id)
        });
        CoursePlayerV2.on('hooks:enrollmentWasCompleted', function(data) {
            console.log(data);
            find_and_play(100,data.course.id)
        });                
    });

        
    
//}());
