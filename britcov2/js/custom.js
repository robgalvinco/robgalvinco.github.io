var swiper = new Swiper('#testi_slider', {
      loop: true,
      slidesPerView:3,
      spaceBetween: 10,
       navigation: {
        nextEl: '.new-arrow-next',
        prevEl: '.new-arrow-prev',
      },
      breakpoints: {
        640: {
          slidesPerView: 1,
          spaceBetween: 10,
        },
        768: {
          slidesPerView: 1,
          spaceBetween: 10,
        },
        991: {
          slidesPerView: 2,
          spaceBetween: 10,
        },
        1400: {
          slidesPerView: 3,
          spaceBetween: 10,
        },
        1600: {
          slidesPerView: 3,
          spaceBetween: 10,
        },
      }
    });

var swiper = new Swiper('#last_slider', {
      loop: true,
      slidesPerView:5,
      spaceBetween: 10,
       navigation: {
        nextEl: '.new-arrow-next-1',
        prevEl: '.new-arrow-prev-1',
      },
      breakpoints: {
        640: {
          slidesPerView: 1,
          spaceBetween: 10,
        },
        768: {
          slidesPerView: 1,
          spaceBetween: 10,
        },
        1400: {
          slidesPerView: 5,
          spaceBetween: 10,
        },
        1600: {
          slidesPerView: 5,
          spaceBetween: 10,
        },
      }
    });



// Lesson tab js code start

$(document).ready(function(){
  
  $('ul.tabs li').click(function(){
    var tab_id = $(this).attr('data-tab');

    $('ul.tabs li').removeClass('current');
    $('.tab-content').removeClass('current');

    $(this).addClass('current');
    $("#"+tab_id).addClass('current');
  })

});


// Radio button js code
$( document ).ready(function() {
  $('.lesson-radio-block input[type=radio]').click(function() {
  $('input:not(:checked)').parent().removeClass("active");
  $('input:checked').parent().addClass("active");
  });



// Popup open clsoe js code 


$(".banner-btn").click(function(){
        $(".custom-popup-main").addClass("open-popup");
    });

    $(".close-icon svg").click(function(){
        $(".custom-popup-main").removeClass("open-popup");
    });
    $(".custom-overlay-poup").click(function(){
        $(".custom-popup-main").removeClass("open-popup");
    });


// Mobile menu Open js code

$(".menu-icon").click(function(){

  $(this).toggleClass("change-icon");
  $(".mobile-content-main").toggleClass("mobile-menu-open");

  });
});