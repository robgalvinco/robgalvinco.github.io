
  $( document ).ready(function() {
    $(".main-link").click(function(){
        event.stopPropagation();
         $(".emoji-hover-bar-inner").addClass("emoji-box-open");
     });
     $(".emoji-hover-bar-inner li").click(function(){
         event.stopPropagation();
         $(".emoji-hover-bar-inner").removeClass("emoji-box-open");
     });
     $(document).click(function(event) {
         if (!$(event.target).closest('.emoji-hover-bar-inner').length) {
             $(".emoji-hover-bar-inner").removeClass("emoji-box-open");
         }
     });
     $(".fav-link").click(function(){
         $(this).toggleClass("icon-change");
     });
 });
 