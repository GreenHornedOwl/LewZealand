(function($){
  $(".mobile-nav li a").click(function(e){
      $(this).parent("li").find("a.fly-mask:first").toggleClass("fly-mask-active");   
      $(this).parent().parent().find("li").removeClass("fly-in");   
      // $(this).addClass("fly-in");
        if ($(this).parent().parent().parent("li").hasClass("fly-in")) {
          $(this).parent().addClass("fly-in");
        } else  {
          $(".mobile-nav").find("li.fly-in").removeClass();
          $(this).parent().addClass("fly-in");
        }           
        
        if ($(this).parent().parent().parent("li").hasClass("fly-in-active")) {

        } else  {
          $(this).parent().addClass("fly-in-active");
        } 
        
        if ($(this).parent("li").children("ul").length) {
          e.preventDefault();
        }
      }); 
    $("a.fly-mask").on("click", function(){
      $(this).parent("li").removeClass("fly-in");
    });
    var open = false;
    $(".fa-bars").click(function(){
      moveLeft = $(window).width()*0.8;     
      $(".mobile-nav li").removeClass("fly-in");
      if (open == true) {
        $(".mobile-wrapper").css("transform", 'translate(0px,0px)');      
        open = false;
        $(".mobile-nav").removeClass("active-side");
      } else {  
          $(".left-view").addClass("active-side");  
          $(".right-view").hide();  
          $(".left-view").show();         
        $(".mobile-wrapper").css("transform", 'translate('+ -moveLeft +'px,0px)');      
        open = true;
      } 
    });
     
})(jQuery);