$(document).ready(function(){


$("#website-provider").click(function(){


$(".website-provider-details-div").toggleClass("hide-foot");


$(".website-provider-details-div").css("display","none");


    });


    $("#back-up-home").on("click",function(e){
         e.preventDefault();
            window.history.back();
    });


    var controller = new ScrollMagic.Controller({
  globalSceneOptions: {
      triggerHook: "onLeave"
  }
});


    var time = 10;


var pinani = new TimelineMax()
    .add(TweenMax.to("#first",time,{opacity:0}))
    .add(TweenMax.to("#wipe", time, {opacity:1,display:"block"}))
    .add(TweenMax.to("#scroll-text",time,{css:{color:"#fff"}}))

    .add(TweenMax.to("#first",time,{opacity:0}))


//    .add(TweenMax.to("#s2",time,{opacity:1}))
    .add(TweenMax.to("#s2,#s1",time,{opacity:0}))
    .add(TweenMax.to("#s3",time,{opacity:1}))
    .add(TweenMax.to("#s3",time,{opacity:0}))
//    .add(TweenMax.to("#wipe", time, {opacity:0}))


    .add(TweenMax.to("#wipe1", time, {opacity:1,display:"block"}))
//    .add(TweenMax.to("#d1",time,{opacity:0}))
    .add(TweenMax.to("#d2",time,{opacity:1}))
    .add(TweenMax.to("#d2",time,{opacity:0}))

    .add(TweenMax.to("#d5",time,{opacity:1}))
    .add(TweenMax.to("#d5",time,{opacity:0.9}))
    .add(TweenMax.to("#d5",time,{opacity:0.0}))
    .add(TweenMax.to("#d6",time,{opacity:1}))
    .add(TweenMax.to("#wipe1", time, {opacity:0}))



    .add(TweenMax.to("#wipe2", time, {opacity:1,display:"block"}))
    //.add(TweenMax.to("#ten-head", time, {opacity:0}))
    //.add(TweenMax.to("#ten-head", time, {display:"none"}))
//    .add(TweenMax.to(".footer, #scroll-text",0,{opacity:0}))
    .add(TweenMax.to("#b1,#b2,#b3,#b4,#b5,#b6,#b7,#b8,#b9,#b10",time,{opacity:1}))
    .add(TweenMax.to("#b1,#b2,#b3,#b4,#b5,#b6,#b7,#b8,#b9,#b10",time,{opacity:1}))

//    .add(TweenMax.to("#b2",time,{opacity:1}))
//    .add(TweenMax.to("#b3",time,{opacity:1}))
//    .add(TweenMax.to("#b4",time,{opacity:1}))
//    .add(TweenMax.to("#b1,#b2,#b3,#b4",time,{opacity:0}))
//    .add(TweenMax.to("#b5",time,{opacity:1}))
//    .add(TweenMax.to("#b6",time,{opacity:1}))
//    .add(TweenMax.to("#b7",time,{opacity:1}))
//    .add(TweenMax.to("#b8",time,{opacity:1}))
//    .add(TweenMax.to("#b5,#b6,#b7,#b8",time,{opacity:0}))
//    .add(TweenMax.to("#b9",time,{opacity:1}))
//    .add(TweenMax.to("#b10",time,{opacity:1}))
    //.add(TweenMax.to("#wipe2,#b0", time, {opacity:0, display:"none"}))
    //.add(TweenMax.to("#wipe2",0, {display:"none"}))
    .add(TweenMax.to(".footer, #scroll-text",time/2,{opacity:1, display:"block"}))

//    .add(TweenMax.to("#bgvid",0, {opacity:0}))
//    .add(TweenMax.to("#pin",time,{css:{backgroundImage:"linear-gradient(180deg, #e6eaf1, #0a2f73)"}}))




    .add(TweenMax.to("#b0,#b1,#b2,#b3,#b4,#b5,#b6,#b7,#b8,#b9,#b10",time,{opacity:0}))
 .add(TweenMax.to("#wipe51", time, {opacity:1,time,display:"block"}))
    .add(TweenMax.to("#j1",time,{opacity:1}))
   .add(TweenMax.to("#j1",time,{opacity:0.8,time,display:"block"}))
   .add(TweenMax.to("#j1",time,{opacity:0,display:"none"}))
    .add(TweenMax.to("#j2",time,{opacity:1,time,display:"block"}))
    .add(TweenMax.to("#j2",time,{opacity:1,time,display:"block"}))
        .add(TweenMax.to("#j2",time,{opacity:0,time,display:"block"}))
   .add(TweenMax.to("#wipe51", time, {opacity:0}))


.add(TweenMax.to("#wipe5", time, {opacity:1,display:"block"}))
//    .add(TweenMax.to("#scroll", time, {opacity:0}))
    .add(TweenMax.to("#left-wheel-text",time, {opacity: 1}))
    .add(TweenMax.to("#map, .tehj-tooltip",time,{opacity:1}))
  .add(TweenMax.to(".pulsate"),0,{display:"block"})
    .add(TweenMax.to("#wipe5", time, {opacity:0}))
//    .add(TweenMax.to("#scroll", time, {opacity:1}))
//.add(TweenMax.to("#wipe5", 0, {opacity:0,display:"none"}))



    .add(TweenMax.to("#wipe3", time, {opacity:1,display:"block"}))
    .add(TweenMax.to("#o0",time,{opacity:1,display:"none"}))
    
    .add(TweenMax.to("#o1",time,{opacity:1}))
    .add(TweenMax.to("#o2",time,{opacity:1}))

    .add(TweenMax.to("#o3",time,{opacity:1}))
    .add(TweenMax.to("#wipe3", time, {opacity:0}))





    .add(TweenMax.to("#wipe4", time, {opacity:1,display:"block"}))
    .add(TweenMax.to("#l2",time,{opacity:1}))
    .add(TweenMax.to("#l3",time,{opacity:1}))
    .add(TweenMax.to("#l4",time,{opacity:1}))
    .add(TweenMax.to("#l4",time,{opacity:1}))
    .add(TweenMax.to("#wipe4", time, {opacity:0}))





    .add(TweenMax.to("#pin, .gradient-div",time,{css:{backgroundImage:"none"}}))
    .add(TweenMax.to("#wipe6, #bgvid", time, {opacity:1,display:"block"}))

    .add(TweenMax.to("#bgvid",0, {opacity:1}))
    .add(TweenMax.to("#wipe6,#scroll", time, {opacity:0.9}))
    .add(TweenMax.to("#wipe6,#scroll", time, {opacity:0}))
    .add(TweenMax.to("#wipe7",time,{opacity:1,display:"block"}))



new ScrollMagic.Scene({
  triggerElement: "section#pin",
  duration: '100%',

})
.setTween(pinani)
.setPin("section#pin")
.addTo(controller);




});
