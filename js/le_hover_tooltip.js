
$(document).ready(function(){
     //$('img[usemap]').maphilight();
     var $dom_tooltip = $(".tehj-tooltip");
     //var mouseX;
     //var mouseY;

    // var mouseOffsetX = 20;
     //var mouseOffsetY = 10;

     $(document).mousemove(function(e){
      //mouseX =  e.pageX;
     // mouseY = (e.pageY - window.pageYOffset);
   });

   $dom_tooltip.html($($('.tehj-has-tooltip.active').data("tehj-tooltip-data")).html());

     $('.tehj-has-tooltip').hover(function(){
          if(!$(this).hasClass("active")){
               $(this).addClass("active");
               $dom_tooltip.html($($(this).data("tehj-tooltip-data")).html());
          }else{
               $dom_tooltip.html($($(this).data("tehj-tooltip-data")).html());
          }
     }, function(){
          if($(this).hasClass("active")){
               $(this).removeClass("active");
          }
          //$dom_tooltip.fadeOut("fast");
          //$dom_tooltip.find("p").html("");
     });

     /*$(".tehj-has-tooltip.active").hover(function(){
          //alert($($(this).data("tehj-tooltip-data")).html());
          $dom_tooltip.html($($(this).data("tehj-tooltip-data")).html());
         /* //alert($(this).data("tehj-tooltip-data"));
          //$dom_tooltip.fadeIn("fast");

          var areaCoords = $(this).attr("coords");
          areaCoords = areaCoords.split(',');
          $x = areaCoords[0];
          $y = areaCoords[1];

          $x = mouseX + mouseOffsetX;
          $y = mouseY + mouseOffsetY;

          //console.log($x+" | "+$y);
          //$dom_tooltip.css({ left: $x + "px", top: $y + "px" });
          if($(this).data("tehj-tooltip-side") == "right"){
               //$dom_tooltip.css({float:'right', right: 0 + "px", top: 0 + "px" });
          }else{
               //$dom_tooltip.css({float: 'left', left: 0 + "px", top: 0 + "px" });
          }*
     });*/
});
