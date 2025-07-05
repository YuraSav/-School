
 $('.course__list').bxSlider({
    minSlides: 3,
    maxSlides: 3,
    slideWidth: 440,
    slideMargin: 200
  });

  // $('.block__reviews').bxSlider({
  //   minSlides: 3,
  //   maxSlides: 3,
  //   slideWidth: 440,
  //   slideMargin: 200
  // });

  $('.block__reviews').bxSlider({
    minSlides: 3,
    maxSlides: 3,
    slideWidth: 440,
    slideMargin: 200,
    preventDefaultSwipeX: false,
    preventDefaultSwipeY: false
});

   $('.work-list').bxSlider({
    minSlides: 4,
    maxSlides: 4,
    slideWidth: 290,
    slideMargin: 120
  });

  let directions = document.querySelector("#directions");
  let links = document.querySelectorAll(".directions-link");
  function opendirections(){
    links.forEach(function(link){
      link.style.transform="scale(1)";
    })
  }
  directions.addEventListener("mouseover",opendirections)
  function clousedirections(){
    links.forEach(function(link){
      link.style.transform="scale(0)";
    })
  }
  directions.addEventListener("mouseout",clousedirections)

  let menu__link = document.querySelectorAll(".menu__link");
  let targetId;
  menu__link.forEach(function(element){
    element.addEventListener("click",function(event){
      event.preventDefault();
      targetId=element.getAttribute("href");
      document.querySelector(targetId).scrollIntoView({
        behavior:"smooth",
        block:"start"
      })
    })
  })

  // let slideup = document.querySelector("#slideup");
  // document.addEventListener("mousemove",function(event){
  //   if (event.pageY>790){
  //     slideup.style.display="inline";
  //   }
  //   else{
  //     slideup.style.display="none";
  //   }
  // })
  let slideup = document.querySelector("#slideup");

document.addEventListener("scroll", function() {
    if (window.scrollY > 790) {
        slideup.style.display = "inline";
    } else {
        slideup.style.display = "none";
    }
});

let dragging = false;

$('.course__list, .block__reviews').on('touchstart mousedown', function() {
    dragging = false;
}).on('touchmove mousemove', function() {
    dragging = true;
});

$('.course__list a, .block__reviews a').on('click', function(e) {
    if (dragging) {
        e.preventDefault();
    }
});

