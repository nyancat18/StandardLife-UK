$(document).ready(function(){
    

    
     $("#back-up-home").on("click",function(){
            
         
            window.history.back();
    });
    
    
      $("#website-provider").click(function(){
        
       
        $(".website-provider-details-div").toggleClass("hide-foot")
//        $(".website-provider-details-div").css("display","block");
        
        
    });
    
    var controller = new ScrollMagic.Controller({
  globalSceneOptions: {
      triggerHook: "onLeave"
  }
});

    
    var time = 10;
    

var pinani = new TimelineMax()
     .add(TweenMax.to("#row1", time, {opacity:0}))
    .add(TweenMax.to("#row2", time, {opacity:1}))


new ScrollMagic.Scene({
  triggerElement: "section#pin",
  duration: '100%',
    
})
.setTween(pinani)
.setPin("section#pin")
.addTo(controller);
    
   
    
    
});