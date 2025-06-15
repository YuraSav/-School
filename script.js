  $('.course__list').bxSlider({
    minSlides: 3,
    maxSlides: 3,
    slideWidth: 440,
    slideMargin: 200
  });

  $('.block__reviews').bxSlider({
    minSlides: 3,
    maxSlides: 3,
    slideWidth: 440,
    slideMargin: 200
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