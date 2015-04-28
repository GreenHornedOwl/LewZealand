$(document).ready(function(){  
	
  $(".accordion-trigger .fa").on("click", function(){
     $(this).toggleClass("rotate");
      $(this).parents(".product").find(".product-content").slideToggle();

  });
});