let navbar=document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick= () =>{
    navbar.classList.toggle('active');
}
const headerSection = document.querySelector('.header-section');
const video = document.getElementById('background-video');

window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY;
    const headerHeight = headerSection.offsetHeight;

    if (scrollPosition > headerHeight) {
        video.pause();
    } else {
        video.play();
    }
});  
// navbar changes 
jQuery(function($){
    var $navbar =$('.header');
    $(window).scroll(function(event){
      var $current= $(this).scrollTop();
      if($current > 0){
        $navbar.addClass('navbar-color');
      }
      else{
        $navbar.removeClass('navbar-color');
      }
    })
  });


//  our clients
let userTexts = document.getElementsByClassName("user-text");
let userPics = document.getElementsByClassName("user-pic");
  function showReview(){
   for(userPic of userPics){
       userPic.classList.remove("active-pic");
   }
   for(userText of userTexts){
     userText.classList.remove("active-text");
   }
   let i =Array.from(userPics).indexOf(event.target);
    userPics[i].classList.add("active-pic");
    userTexts[i].classList.add("active-text");

}
// latest news
$('.post-wrapper').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    nextArrow: $('.next'),
    prevArrow: $('.prev'),
  });
  
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
   
  ]
  document.addEventListener("DOMContentLoaded", function () {

  //   // Header bar animation

  //   function header() {
  //     let headerBg = document.getElementById('visible-bg');
  //     let scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
  //     let barHeight = Math.min(scrollPosition, 100);
  //     headerBg.style.height = barHeight + 'px';
    
  //     requestAnimationFrame(header);
  //   }
    
  //   requestAnimationFrame(header);

    // Fading animation
      const video = document.getElementById('bgVideo');
  const minOpacity = 0.3; // Minimum opacity (half-black)
  const maxOpacity = 1; // Maximum opacity (fully visible)
  const maxScroll = 300; // Adjust the scroll distance at which the video becomes fully black

  function updateVideoOpacity() {
    const scrollPosition = window.scrollY;
    const newOpacity = 3.5 - (scrollPosition / maxScroll);

    // Interpolate between newOpacity and minOpacity (half-black)
    const interpolatedOpacity = (newOpacity * (1- minOpacity)) + minOpacity;

    video.style.opacity = Math.max(minOpacity, Math.min(maxOpacity, interpolatedOpacity));
    requestAnimationFrame(updateVideoOpacity);
  }

  window.addEventListener('scroll', updateVideoOpacity);
  updateVideoOpacity();


    
  });