function hasClass(ele,cls) {
  return ele.className.match(new RegExp('(\\s|^)'+cls+'(\\s|$)'));
}
 
function addClass(ele,cls) {  
  if (!hasClass(ele,cls)) ele.className += " "+cls;
}
 
function removeClass(ele,cls) {
  if (hasClass(ele,cls)) {      
    var reg = new RegExp('(\\s|^)'+cls+'(\\s|$)'); 
    ele.className=ele.className.replace(reg,' ');  
  }
}   

function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds){
      break;
    }
  }
}

var feed = new Instafeed({
  get: 'user',
  userId: '2923101612',
  clientId: '86cf11df1958430484c96f4b0e823b73',
  accessToken: '2923101612.1677ed0.7948f055fe3e4e0cb89dc19982633976',
  template: '<a class="block-instagram" style="background-image: url({{image}});" href="{{link}}"></a>',
  sortBy: 'most-recent',
  limit: '8',
  resolution: 'standard_resolution'
});
feed.run();

$(document).ready(function () {
  $("#cover").addClass("fade-out");
  window.onload = function () { 
    window.sr = ScrollReveal();
    sr.reveal('.block-content', {origin: 'bottom', scale: 1, duration: 1000});
    sr.reveal('.block-feature', {origin: 'bottom', scale: 1, duration: 1000});
    sr.reveal('.block-feature-alt', {origin: 'bottom', scale: 1, duration: 1000});
    sr.reveal('.block-feature-item', {origin: 'bottom', scale: 1, duration: 1000 }, 200);
    sr.reveal('.block-title', {origin: 'bottom', scale: 1, duration: 1000}, 200);
    sr.reveal('.block-image', {origin: 'bottom', scale: 1, duration: 1500 }, 200);
    sr.reveal('.block-instagram', {origin: 'bottom', scale: 1, duration: 1000 }, 200);
    sr.reveal('.fancy-button', {origin: 'bottom', scale: 1, duration: 1000 }, 200);

    var menuButton = document.getElementById('navButton');
    var mobileNav = document.getElementById('mobile-nav');
    menuButton.addEventListener('click', function (e) {
      menuButton.classList.toggle('is-active');
      e.preventDefault();
      
      if (hasClass(mobileNav, 'load')) {
        removeClass(mobileNav, 'load');
        addClass(mobileNav, 'exit');
        sleep(200).then(() => {
          addClass(mobileNav, 'hidden');
        })
        
      } else {
        removeClass(mobileNav, 'exit');
        removeClass(mobileNav, 'hidden');
        addClass(mobileNav, 'load');
      }
    });
  }
  

});
// grab an element
var myElement = document.querySelector("#main-nav");
// construct an instance of Headroom, passing the element
var headroom  = new Headroom(myElement);
// initialise
headroom.init(); 

