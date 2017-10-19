// Changes navbar color on scroll
window.onscroll = (function() {
    elements = document.getElementsByClassName('header-section-2');
    if((window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop > 0) {   
       for (var i = 0; i < elements.length; i++) {
        elements[i].style.background = "#fff";
       }
    } 
    else {
      if (window.innerWidth > 995) {
        for (var i = 0; i < elements.length; i++) {
           elements[i].style.background = "#fff";
        }
      }
    }
});
