
$(document).ready(function(){

    let name = prompt("What's your name??");

    if (name === null) {
        alert("Welcome to Sai Bhargavi Residency.")
    } else {
        alert("Welcome to Sai Bhargavi Residency " + name + ".")
    }
 
// scrolling effect

 $("a").on('click', function(event) {
    if (this.hash !== "") {
       event.preventDefault();
       var hash = this.hash;
      $('html, body').animate({scrollTop: $(hash).offset().top}, 1000, function(){
        window.location.hash = hash;
      });
    } 
  });

// navbar scroll change

 $(function () {
  $(document).scroll(function () {
    var $nav = $(".navbar.fixed-top");
    $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
  });
});


});
