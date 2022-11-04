
$(window).on('load', function () {
  $('#loading').hide(2000);
})
let modal = document.getElementById("myModal");
let btn = document.getElementById("myBtn");
let span = document.getElementsByClassName("close")[0];
btn.onclick = function () {
  modal.style.display = "block";
}
span.onclick = function () {
  modal.style.display = "none";
}
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
$('.slick-prev').hide();
$('.slider').slick({
  dots: true,
  arrows: false,
  autoplaySpeed: 2000,
});
$(function () {
  $('.slider1').slick({
    slidesToShow: 3.0,
    slidesToScroll: 1,
    dots: false,
    arrows: true,
    autoplaySpeed: 2000,

  });
  $('.slider-2').slick({
    slidesToShow: 3.8,
    slidesToScroll: 1,
    dots: false,
    arrows: false,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 1.9,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 650,
        settings: {
          slidesToShow: .96,
          slidesToScroll: 1,
        },
      },
    ]


  });
});

// // stckey navbar
$(document).ready(function () {

  $(window).scroll(function () {
    $(window).scroll(function () {
      var scroll = $(window).scrollTop();
      if (scroll > 200) {
        $(".dropup-content1").css("display" , "none");


      }
      else {
        $(".dropup-content1").css("display", "");
      }
    })
    var scroll = $(window).scrollTop();
   

  
    if (scroll > 200) {
      $(".navbar").css("background", "#1D1D1D");
      $(".navbar").css("height", "130px");
    }
    else {
      $(".navbar").css("background", "none");
      $(".navbar").css("height", "170px");
    }

   
  })

  $(window).scroll(function () {
    var scroll = $(window).scrollTop();
    if (scroll > 500) {
      $("#myBtn , #myBtn1").css("display", "none");


    }
    else {
      $("#myBtn , #myBtn1").css("display", "");
    }
  })


})

// var width = $(window).width();

// if ((width > "500px")) {
     
//   $(".navbar").css("background", "#1D1D1D");
//   $(".navbar").css("height", "30px");
// }
// else {
// $(".navbar").css("background", "none");
// $(".navbar").css("height", "70px");
// }

// if (screen.width < 460) {
//   $(".navbar").css("height", "30px");
// }
// else {

//   $(".navbar").css("height", "70px");
// }






