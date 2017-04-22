
$(document).ready(function(){
    
     var $dom_tooltip = $(".tehj-tooltip");
     
    
   $dom_tooltip.html($($('.tehj-has-tooltip.active').data("tehj-tooltip-data")).html());

     $('.tehj-has-tooltip').hover(function(){
         
          if(!$(this).hasClass("active")){
               $(this).addClass("active");
               $(this).fadeIn("slow");
               $dom_tooltip.html($($(this).data("tehj-tooltip-data")).html());
               $dom_tooltip.fadeIn();
               $('.pulsate').hide();
               
          }else{
               $dom_tooltip.html($($(this).data("tehj-tooltip-data")).html());
              $dom_tooltip.fadeIn();
              $('.pulsate').hide();
              
          }
     }, function(){
          if($(this).hasClass("active")){
               $(this).removeClass("active");
          }
         
     });

    
});
