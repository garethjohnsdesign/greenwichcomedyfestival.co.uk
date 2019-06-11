$(document).ready(function() {

// 1. Foundation
// -------------

Foundation.Interchange.SPECIAL_QUERIES['medium-retina'] = 'only screen and (min-width: 40em), (min-width: 40em) and (-webkit-min-device-pixel-ratio: 2), (min-width: 40em) and (min--moz-device-pixel-ratio: 2), (min-width: 40em) and (-o-min-device-pixel-ratio: 2/1), (min-width: 40em) and (min-device-pixel-ratio: 2), (min-width: 40em) and (min-resolution: 192dpi), (min-width: 40em) and (min-resolution: 2dppx)';
Foundation.Interchange.SPECIAL_QUERIES['large-retina'] = 'only screen and (min-width: 64em), (min-width: 64em) and (-webkit-min-device-pixel-ratio: 2), (min-width: 64em) and (min--moz-device-pixel-ratio: 2), (min-width: 64em) and (-o-min-device-pixel-ratio: 2/1), (min-width: 64em) and (min-device-pixel-ratio: 2), (min-width: 64em) and (min-resolution: 192dpi), (min-width: 64em) and (min-resolution: 2dppx)';
Foundation.Interchange.SPECIAL_QUERIES['xlarge-retina'] = 'only screen and (min-width: 75em), (min-width: 75em) and (-webkit-min-device-pixel-ratio: 2), (min-width: 75em) and (min--moz-device-pixel-ratio: 2), (min-width: 75em) and (-o-min-device-pixel-ratio: 2/1), (min-width: 75em) and (min-device-pixel-ratio: 2), (min-width: 75em) and (min-resolution: 192dpi), (min-width: 75em) and (min-resolution: 2dppx)';
Foundation.Interchange.SPECIAL_QUERIES['xxlarge-retina'] = 'only screen and (min-width: 90em), (min-width: 75em) and (-webkit-min-device-pixel-ratio: 2), (min-width: 75em) and (min--moz-device-pixel-ratio: 2), (min-width: 75em) and (-o-min-device-pixel-ratio: 2/1), (min-width: 75em) and (min-device-pixel-ratio: 2), (min-width: 75em) and (min-resolution: 192dpi), (min-width: 75em) and (min-resolution: 2dppx)';

$(document).foundation();


// 2. Cookies Policy
// -----------------

$(function() {
  if($.cookie('showed_modal') !== "true") {

setTimeout(
  function() 
  {
$("#cookiesPolicy").foundation("open");
  }, 2000);

    $.cookie('showed_modal', 'true', { expires: 365 }); 
  }
});

// 2. Map
// ------

/*
$(function() {  
mapboxgl.accessToken = 'pk.eyJ1IjoiZ2FyZXRoam9obnNkZXNpZ24iLCJhIjoibWRoWDZWUSJ9.n1A58EO10IDrB5yIAKqAPA';
});

var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/garethjohnsdesign/cjj4c8f7p46ua2roce0wkb7f9', //hosted style id
    center: [-0.102483, 51.528037],
    zoom: 11.14,
    scrollZoom: false
  });
*/

// 2. Animate on Scroll
// --------------------

$(function() {
  AOS.init({
    offset: 64,
    easing: 'ease-in-out-quart',
    duration: 600
  });
});

$(function() {
  window.addEventListener('load', AOS.refresh);
});

// 2. Carousel
// -----------

$(function() {

    var firstSlide = Math.floor(Math.random() * 5);
    //initialize swiper when document ready
    var mySwiper = new Swiper ('.swiper-container', {

      direction: 'horizontal',
      slidesPerView: 'auto',
      centeredSlides: true,
      initialSlide: firstSlide,
      loop: true,
      autoplay: {
        delay: 4000,
      },
      preventClicks: true,
      slideToClickedSlide: false,

  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },

    navigation: {
      nextEl: '.swiper-button-next-test',
      prevEl: '.swiper-button-prev-test',
    }

   
    });
  });

  });

