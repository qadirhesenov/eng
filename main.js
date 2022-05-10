var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 0,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".zz",
    prevEl: ".ee",
  },
});
var swiper = new Swiper(".mySwiperOne", {
  slidesPerView: 6,
  spaceBetween: 30,
  slidesPerGroup: 1,
  breakpoints: {
    340: {
      slidesPerGroup: 1,
      slidesPerView: 1,
      spaceBetween: 20,

    },
    568: {
      slidesPerGroup: 1,
      slidesPerView: 3,
      spaceBetween: 30
    },
    992: {
      slidesPerView: 3,
      spaceBetween: 40
    }
  },
  loop: true,
  loopFillGroupWithBlank: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
var swiper = new Swiper(".mySwiperTwo", {
  slidesPerView: 3,
  slidesPerGroup: 3,
  spaceBetween: 30,
  breakpoints: {
    340: {
      slidesPerGroup: 1,
      slidesPerView: 1,
      spaceBetween: 20,

    },
    568: {
      slidesPerGroup: 1,
      slidesPerView: 2,
      spaceBetween: 30
    },
    992: {
      slidesPerView: 3,
      spaceBetween: 40
    }
  },
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
$(function(){
  //one
  $(".one").mouseenter(function(){
    $(".submenu").addClass("sbm");

  });
  $(".one").mouseleave(function(){
    $(".submenu").removeClass("sbm");
  });
  //two
  $(".two").mouseenter(function(){
    $(".submenu1").addClass("sbm");

  });
  $(".two").mouseleave(function(){
    $(".submenu1").removeClass("sbm");
  });
  //three
  $(".three").mouseenter(function(){
    $(".submenu2").addClass("sbm");

  });
  $(".three").mouseleave(function(){
    $(".submenu2").removeClass("sbm");
  });
  //four
  $(".four").mouseenter(function(){
    $(".submenu3").addClass("sbm");

  });
  $(".four").mouseleave(function(){
    $(".submenu3").removeClass("sbm");
  });
  //five
  $(".five").mouseenter(function(){
    $(".submenu4").addClass("sbm");

  });
  $(".five").mouseleave(function(){
    $(".submenu4").removeClass("sbm");
  });
});
const btn=document.querySelector(".ham")
const haml1=document.querySelector(".haml1");
const haml2=document.querySelector(".haml2");
const haml3=document.querySelector(".haml3");
const hamburger=document.querySelector(".hamburger")
const func=()=>{
  if(haml2.style.opacity==="0"){
    haml2.style.opacity="1"
    haml1.style.transition="0.5s"
    haml2.style.transition="0.5s"
    haml3.style.transition="0.5s"   
    haml3.style.transform="rotate(0deg)"
    haml1.style.transform="rotate(0deg)"
    haml1.style.marginTop="0px";
    haml3.style.marginBottom="0px";
    hamburger.style.transform="translateY(-400px)"
    hamburger.style.transition="1s"
  }else{
    haml2.style.opacity="0"
    haml1.style.transition="0.5s"
    haml2.style.transition="0.5s"
    haml3.style.transition="0.5s"
    haml3.style.transform="rotate(45deg)"
    haml1.style.transform="rotate(-45deg)";
    haml1.style.marginTop="14px";
    haml3.style.marginBottom="14px";
    hamburger.style.transform="translateY(0px)"
    hamburger.style.transition="1s"
  }
}
btn.addEventListener("click",func)
