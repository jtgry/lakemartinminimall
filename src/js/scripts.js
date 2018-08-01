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

var feed = new Instafeed({
  get: 'user',
  userId: '2940092438',
  clientId: 'ca64abfc40b7478493927944df0e41d4',
  accessToken: '2940092438.1677ed0.d694dd0aaa4349bba06edea174258632',
  template: '<a class="block-instagram" style="background-image: url({{image}});" href="{{link}}"></a>',
  sortBy: 'most-recent',
  limit: '8',
  resolution: 'standard_resolution'
});
feed.run();

window.onload = function () { 
  document.getElementById('page').className = "load";
  window.sr = ScrollReveal({
    delay: 1,
    scale: 0.99,
    viewFactor: 0.1,
    distance: "2em"
  });
  sr.reveal('.block-content', {origin: 'bottom', delay: 2, duration: 800});
  sr.reveal('.block-image', {origin: 'bottom', duration: 600 });
  sr.reveal('.block-feature', {origin: 'bottom', duration: 600});
  sr.reveal('.block-feature-alt', {origin: 'bottom', duration: 600});
  sr.reveal('.block-feature-item', {origin: 'bottom', duration: 600 }, 200);
  sr.reveal('.block-title', {origin: 'bottom', duration: 600}, 200);
  sr.reveal('.block-instagram', {origin: 'bottom', duration: 600 }, 200);
  sr.reveal('.fancy-button', {origin: 'bottom', duration: 600 }, 200);
  sr.reveal('footer', {origin: 'bottom', duration: 600});

  var menuButton = document.getElementById('navButton');
  var mobileNav = document.getElementById('mobile-nav');
  menuButton.addEventListener('click', function (e) {
    menuButton.classList.toggle('is-active');
    e.preventDefault();
    
    if (hasClass(mobileNav, 'load')) {
      removeClass(mobileNav, 'load');
      addClass(mobileNav, 'exit');
      var myFunction = function(){
        addClass(mobileNav, 'hidden');
      };
      setTimeout(myFunction, 500);
      
      
    } else {
      removeClass(mobileNav, 'exit');
      removeClass(mobileNav, 'hidden');
      addClass(mobileNav, 'load');
    }
  });

}
  
// grab an element
var myElement = document.querySelector("#main-nav");
// construct an instance of Headroom, passing the element
var headroom  = new Headroom(myElement);
// initialise
headroom.init(); 

