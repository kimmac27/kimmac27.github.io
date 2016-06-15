$(document).ready(function() {
    /*global $*/ $(".flip").hover(function(){
      $(this).find(".card").toggleClass("flipped");
      return false;
    });
    
    console.log("hello world")
});

