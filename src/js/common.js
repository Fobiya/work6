define(["jquery"], function($) {
  
// ===========================================================  
  
//  $('header').addClass('open');

  
  
//      window.onload = function () {
//      document.body.classList.add('loaded_hiding');
//      window.setTimeout(function () {
//        document.body.classList.add('loaded');
//        document.body.classList.remove('loaded_hiding');
//      }, 500);
//    }
//      
      

    window.onload = function () {




    }
            
    
    
    
    $(document).ready(function () {


	$('.next__section').on('click', function () {
		if ($('section.stai__').index() == -1) {
			$('body>section:first-child').addClass('stai__');
		} else {

			$('body>section.stai__').next('section').addClass('stai__');
			$('body>section.stai__').prev('section').removeClass('stai__');
		}

	});


	$('.prev__section').on('click', function () {
		if ($('body>section.stai__').index() == -1) {
			/* без действий */
		} else {

			$('body>section.stai__').prev('section').addClass('stai__');
			$('body>section.stai__').next('section').removeClass('stai__');
		}

	});


});
    
    
            
//            
  $('.home__5 .list li a').click(function(e){
    
    e.preventDefault();
    
     var num_data = $(this).data('home');
    
    $('.home__5 .list li ').removeClass('select');
    
    
    $('.home__5 .list').removeClass('select1 select2 select3 select4 select5 select6');
    
    $(this).parent().addClass('select'); 
    $(this).parent().parent().addClass('select'+ num_data); 
     
  });               
            
  $('.home__5 .list li a').hover(function(e){
    
    e.preventDefault();
    
     var num_data = $(this).data('home');
    
    $('.home__5 .list li ').removeClass('select');
    
    
    $('.home__5 .list').removeClass('select1 select2 select3 select4 select5 select6');
    
    $(this).parent().addClass('select'); 
    $(this).parent().parent().addClass('select'+ num_data); 
     
  });    
//  
//  
//  $(document).mouseover(function(e) { // web document click event
//        var div = $(".home__2 .list"); // here we specify the ID of the element
//        if (!div.is(e.target)){
//            
//
//          
//          
//        $('.home__2 .list li').removeClass('select');
//        $('.home__2 .list').removeClass('select1 select2 select3 select4 select5 select6');    
//          
//          
//            
//        }else if( div.has(e.target).length === 0) { // and not by its children
//
//          $('.home__2 .list li a').hover(function(e){
//
//               e.preventDefault();
//
//               var num_data = $(this).data('slide');
//
//              $('.home__2 .list li ').removeClass('select');
//
//
//              $('.home__2 .list').removeClass('select1 select2 select3 select4 select5 select6');
//
//              $(this).parent().addClass('select'); 
//              $(this).parent().parent().addClass('select'+ num_data); 
//
//          });  
//          
//        }
//    });  
//
//  
//  

    



      

  
  
  
  
  
  
  
  
  
  
    
//  }else{
//    
//    $('.home__2 .list li').removeClass('select');
//    $('.home__2 .list').removeClass('select1 select2 select3 select4 select5 select6');    
//    
//  }

  
  
  
  
//  $('.home__2 ul.mobile li a').click(function(e){
//    
//    e.preventDefault();
//    
//    var mobile = $(this).data('mobile');
//    
//    $('.home__2 ul.mobile li').removeClass('select');
//    
//    
//    $('.home__2 ul.mobile').removeClass('select1 select2 select3 select4 select5 select6');
//    
//    $(this).parent().addClass('select'); 
//    $(this).parent().parent().addClass('select'+ mobile); 
//     
//  });     
  
  
  
            
//            
//let box = document.querySelector("#preloader"),
//	btn = document.querySelector("#skip");
//
//function fadeOut() {
//	box.classList.add("visuallyhidden");
//	box.addEventListener(
//		"transitionend",
//		function (e) {
//			box.classList.add("hidden");
//		},
//		{
//			capture: false,
//			once: true,
//			passive: false,
//          
//          
//              path: `https://assets4.lottiefiles.com/packages/lf20_vx8rauri.json`,
//              renderer: "svg",
//          
////    renderer: "svg",
////    loop: true,
////    autoplay: true,
////    path: `https://assets4.lottiefiles.com/packages/lf20_vx8rauri.json`
//          
//		}
//	);
//}
//
//btn.addEventListener("click", fadeOut, false);
//setTimeout(fadeOut, 6000);

  
  
      
//const animatedEls = document.querySelectorAll(".animated");
//
//for (const animatedEl of animatedEls) {
//  const id = animatedEl.id;
//  lottie.loadAnimation({
//    container: document.getElementById(id),
//    renderer: "svg",
//    loop: flse,
//    autoplay: true,
//    
//    capture: false,
//    once: true,
//    passive: false,
//    
//    path: `https://assets4.lottiefiles.com/packages/lf20_vx8rauri.json`
//  });
//}
//      
      
        
//
////show and hide topbtn
//function yScroll() {
//
//  var yPos = window.pageYOffset;
//
//  if (yPos >= window.innerHeight - 10) {
//    document.getElementById("topbtn").style.opacity = 1;
//  } else {
//    document.getElementById("topbtn").style.opacity = 0;
//  }
//}
//
////scroll to top
//function goTop () {
//  let topbtn = document.getElementById('topbtn');
//  let top = window.pageYOffset;
//
//  var intervalTimer = setInterval(function() {
//    if (top > 0) {
//      top -= 15;
//      window.scrollTo(0, top);
//    } else {
//      topbtn.style.opacity = 0;
//      clearInterval(intervalTimer);
//    }
//  }, 0.5);
//}
//
//function showAnimate(arrivePoint) {
//  let flag = true;
//  let timer = setInterval(function() {
//
//    let icur = window.pageYOffset;
//    //Buffer movement, speed change at any time
//    let speed = (arrivePoint - icur) / 12;
//    speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);//Take integer speed
//    if (icur || icur == 0) {
//      window.scrollTo(0, icur + speed);
//    }
//    if (arrivePoint !== icur) {
//      flag = false;
//    } else {
//      flag = true;
//    }
//
//    if (flag) {
//      clearInterval(timer);
//      isComplete = true;
//    }
//  },13);
//}
//
//function titleShow() {
//  let Ospan = document.getElementsByTagName("div");
//  let p = window.pageYOffset + window.innerHeight;
//  let q = window.pageYOffset + window.innerHeight*2;
//  for (let i = 0; i<Ospan.length; i++)
//  {
//    if (p < Ospan[i].offsetTop && Ospan[i].offsetTop < q) {
//      Ospan[i].style.opacity = 1;
//    }
//  }
//}
//
//var isComplete = true;
//
//function wheel (e){
//
//  if(isComplete == true){ //Prevent multiple repeat function
//
//    isComplete = false;
//
//    if (e.wheelDelta) {  //IE,Chrome MouseScroll
//      stopScroll();
//      if (e.wheelDelta > 0) { //When the pulley rolls up
//        let arrivePoint = window.pageYOffset - window.innerHeight;
//        //arrivePoint cannot be negative
//        arrivePoint = arrivePoint < 0 ? 0 :arrivePoint;
//        showAnimate(arrivePoint);
//        }
//
//        if (e.wheelDelta < 0) { //When the pulley rolls down
//          let arrivePoint = window.pageYOffset + window.innerHeight;
//          //maximum rolling point
//          let maxBottom = document.body.offsetHeight - window.innerHeight;
//          //If arrivePoint exceeds the maximum rolling point, then arrivePoint equals the maximum rolling point
//          arrivePoint = arrivePoint > maxBottom ? maxBottom : arrivePoint;
//          showAnimate(arrivePoint);
//          titleShow();
//        }
//      }
//      else if (e.detail) {  //Firefox MouseScroll
//      if (e.detail< 0) { //When the pulley rolls up
//        let arrivePoint = document.documentElement.scrollTop - window.innerHeight;
//        //arrivePoint cannot be negative
//        arrivePoint = arrivePoint < 0 ? 0 :arrivePoint;
//        showAnimate(arrivePoint);
//      }
//      if (e.detail> 0) { //When the pulley rolls down
//        let arrivePoint = document.documentElement.scrollTop + window.innerHeight;
//        let maxBottom = document.body.offsetHeight - window.innerHeight;
//        //If arrivePoint exceeds the maximum rolling point, then arrivePoint equals the maximum rolling point
//        arrivePoint = arrivePoint > maxBottom ? maxBottom : arrivePoint;
//        showAnimate(arrivePoint);
//        titleShow();
//      }
//    }
//  }
//}
//
////Bubble prevention
//function stopScroll() {
//  var keys = { 37: 1, 38: 1, 39: 1, 40: 1 };
//
//  function preventDefault(e) {
//    e = e || window.event;
//    if (e.preventDefault)
//      e.preventDefault();
//    e.returnValue = false;
//  }
//
//  function preventDefaultForScrollKeys(e) {
//    if (keys[e.keyCode]) {
//      preventDefault(e);
//      return false;
//    }
//  }
//  var oldonwheel, oldonmousewheel1, oldonmousewheel2, oldontouchmove, oldonkeydown
//      , isDisabled;
//  (function disableScroll() {
//    if (window.addEventListener) // older FF
//    window.addEventListener('DOMMouseScroll', preventDefault, false);
//    oldonwheel = window.onwheel;
//    window.onwheel = preventDefault; // modern standard
//
//    oldonmousewheel1 = window.onmousewheel;
//    window.onmousewheel = preventDefault; // older browsers, IE
//    oldonmousewheel2 = document.onmousewheel;
//    document.onmousewheel = preventDefault; // older browsers, IE
//
//    oldontouchmove = window.ontouchmove;
//    window.ontouchmove = preventDefault; // mobile
//
//    oldonkeydown = document.onkeydown;
//    document.onkeydown = preventDefaultForScrollKeys;
//    isDisabled = true;
//  })();
//}
//
//document.addEventListener("scroll", yScroll);  //control topbtn'opacity
//document.addEventListener('DOMMouseScroll', wheel, false); //firefox
//document.addEventListener('mousewheel', wheel, false); //chrome, IE
//  
//  

  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
    
  if($( "section" ).hasClass( "home__0" )){
    
      $('.home__0').addClass('active');
  
        $('video').on('ended',function(){ 
         
      
          
            $('.home__0').addClass('the_end');
            $('.home__0').addClass('not_');


            setTimeout(function() {
                $('header').addClass('anim__logo');
            }, 450); 

            setTimeout(function() {
                $('body').removeClass('oveflow-hidden');
                $('.home__1').addClass('not_');
            }, 100);
          
        });
    
  }else{
    
            setTimeout(function() {
                $('header').addClass('anim__logo');
            }, 450); 
    
    
    
  }
  


//  
//  document.addEventListener('DOMContentLoaded', function() {
//       
//      let timerId = setTimeout(function() {
//      //  alert('tick');
//
//        $('.home__0').addClass('active');
//
//        setTimeout(function() {
//            $('.home__0').addClass('the_end');
//            $('.home__0').addClass('not_');
//
//
//            setTimeout(function() {
//            $('header').addClass('anim__logo');
//            }, 450); 
//
//            setTimeout(function() {
//                $('body').removeClass('oveflow-hidden');
//                $('.home__1').addClass('not_');
//            }, 100);
//          
////               $('#well').removeClass('none');
//        }, 550);
//
//      //  timerId = setTimeout(tick, 2000); // (*)
//      }, 4050);
//    
//    
////   $('body').find("img").each(function() {   
////      $(this).attr("src",$(this).attr("data-src"));
////      $(this).removeAttr("data-src");
////      //console.log($(this)[0].outerHTML);
////  });    
////   $('body').find("source").each(function() {   
////      $(this).attr("src",$(this).attr("data-src"));
////      $(this).removeAttr("data-src");
////      //console.log($(this)[0].outerHTML);
////  });
////    
//}, false);
  
  
function initlazyimg() {
    var scripts = document.getElementsByTagName('script');
    var section = scripts[scripts.length-1].parentNode;
    var images = section.getElementsByTagName('img');
    for (var i = 0; i < images.length; i++) {
        var datasrc = images[i].getAttribute('data-src');
        var src = document.createAttribute('src');
        src.value = datasrc;
        images[i].setAttributeNode(src);
        images[i].removeAttribute('datasrc');
    }
}
//
//  
//  function source() {
//    var scripts = document.getElementsByTagName('script');
//    var section = scripts[scripts.length-1].parentNode;
//    var images = section.getElementsByTagName('source');
//    for (var i = 0; i < images.length; i++) {
//        var datasrc = images[i].getAttribute('data-src');
//        var src = document.createAttribute('src');
//        src.value = datasrc;
//        images[i].setAttributeNode(src);
//        images[i].removeAttribute('datasrc');
//    }
//}

  initlazyimg();
//  source();
  
  
  

  

  
//  $(document).ready(function() {
//
//
//      const TIME_OUT = 600 // It should be the same transition time of the sections
//      const body = document.querySelector('body')
//      const sectionsQty = document.querySelectorAll('section').length
//      const sectionStick = document.querySelector('.section-stick')
//
//      let startFlag = true
//      let initialScroll = window.scrollY
//      let qty = 1,
//        main = null,
//        next = null
//
//      // Add child elements in .section-stick as number of sections exist
//      Array(sectionsQty)
//        .fill()
//        .forEach(() => {
//          sectionStick.innerHTML = sectionStick.innerHTML + '<div class="stick"></div>'
//        })
//
////      console.log('SLIDE', qty)
//
//      // Listening to scroll event
//      window.onscroll = () => {
//        if (startFlag) {
//          const scrollDown = this.scrollY >= initialScroll
//          const scrollLimit = qty >= 1 && qty <= sectionsQty
//
//          // Verify that the scroll does not exceed the number of sections
//          if (scrollLimit) {
//            body.style.overflowY = 'hidden' // Lock el scroll
//
//            if (scrollDown && qty < sectionsQty) {
//              main = document.querySelector(`section.s${qty}`)
//              next = document.querySelector(`section.s${qty + 1}`)
//
//              main.style.transform = 'translateY(-100vh)'
//              next.style.transform = 'translateY(0)'
//
//              qty++
//            } else if (!scrollDown && qty > 1) {
//              main = document.querySelector(`section.s${qty - 1}`)
//              next = document.querySelector(`section.s${qty}`)
//
//              main.style.transform = 'translateY(0)'
//              next.style.transform = 'translateY(100vh)'
//
//              qty--
//            }
//
//            // Scroll progressbar
////            const active = document.querySelector('.section-stick .stick.active')
////            active.style.top = (62 + 30) * (qty - 1) + 'px'
//          }
//
//          console.log('SLIDE', qty)
//
//          // Wait for the scrolling to finish to reset the values
//          setTimeout(() => {
//            initialScroll = this.scrollY
//            startFlag = true
//            body.style.overflowY = 'scroll' // Unlock scroll
//          }, TIME_OUT)
//
//          startFlag = false
//        }
//
//        // Keep scrollbar in the middle of the viewport
//        window.scroll(0, window.screen.height)
//      }
//    
//}); 
//  
  
//  $('.home__5 .list a[data-home]').click(function(){
//
//    
//       var num_data = $(this).data('home');
//    
//   $('.home__5 .list li').removeClass('open');
//    $(this).parent().addClass('open');
//    
//   $('.home__5 .post li').removeClass('open');
//    
//       $('.home__5 .post li:nth-child('+ num_data + ')').addClass('open');
//    
//     
//    
////    console.log(numberNum);
//  });  
 
//
//  
//  
//  
//
//  $('.menu__open').click(function(){
//    
//    $(this).toggleClass('open');
//    $(this).parent().toggleClass('back');
//    $('.system_user>.select').toggleClass('active');
//    
//     
//  });
//

  
  
  
    $(document).mouseup(function(e) { // web document click event
        var div = $(".help__menu"); // here we specify the ID of the element
        if (!div.is(e.target) // if the click was not on our block
            &&
            div.has(e.target).length === 0) { // and not by its children
                $( ".help__menu" ).removeClass('active');
        
          
//                $( ".menu__open" ).removeClass('open');
//                $( "ul.select" ).removeClass('active');
        }
    });  


  

  
// ===========================================================  
// Pixel Perfect MODUL
// ===========================================================  
    
    $(document).ready(function() {
      $('body').each(function() {
          var body = $(this);
          var img_url = $(this).data('img');
          var img = new Image();
          img.src = img_url;
          img.onload = function() {
              var ppbox = '<div id="images__back" style="background: url(' + img_url + ') no-repeat 50% 0%;top:0 !important;width:100%;position:absolute;z-index:1000;opacity:.9;height:' + img.height + 'px"></div>';
              body.append(ppbox);
          };
      });
          
      $('html').click(function() {
          $('#images__back').toggleClass('front__end');
      });
    }); 

// =========================================================== 
// END Pixel Perfect MODUL
// =========================================================== 
//  
//    videos = document.querySelectorAll("video");
//    for (var i = 0, l = videos.length; i < l; i++) {
//        var video = videos[i];
//        var src = video.src || (function () {
//            var sources = video.querySelectorAll("source");
//            for (var j = 0, sl = sources.length; j < sl; j++) {
//                var source = sources[j];
//                var type = source.type;
//                var isMp4 = type.indexOf("mp4") != -1;
//                if (isMp4) return source.src;
//            }
//            return null;
//        })();
//        if (src) {
//            var isYoutube = src && src.match(/(?:youtu|youtube)(?:\.com|\.be)\/([\w\W]+)/i);
//            if (isYoutube) {
//                var id = isYoutube[1].match(/watch\?v=|[\w\W]+/gi);
//                id = (id.length > 1) ? id.splice(1) : id;
//                id = id.toString();
//                var mp4url = "http://www.youtubeinmp4.com/redirect.php?video=";
//                video.src = mp4url + id;
//            }
//        }
//    }
  
// ===========================================================
// VIDEO
// ===========================================================  
  
// ===========================================================
// VIDEO
// ===========================================================  
  
// =========================================================== 
// Scroll LINK
// =========================================================== 
    
//   $('a[href^="#"].scroll').click(function() {
//        $("html, body").animate({
//            scrollTop: $($(this).attr("href")).offset().top + "px"
//        }, {
//            duration: 500,
//            easing: "swing"
//        });
//        return false;
//    });
    
// =========================================================== 
// END Scroll LINK
// =========================================================== 
  
  
// =========================================================== 
// Scroll BAR
// ===========================================================  
    

    $(window).scroll(function() {
        // calculate the percentage the user has scrolled down the page
        var scrollPercent = 100 * $(window).scrollTop() / ($(document).height() - $(window).height());

        $('.bar-long').css('width', scrollPercent + "%");

    });
    
 
// =========================================================== 
// END Scroll BAR 
// ===========================================================
  
  
// ===========================================================
// SCROLL
// ===========================================================
  

    // NAVIGATION MENU LEFT


    $(function() {
        $('.mobile__').click(function() {
            $('.right__menu').addClass('open');
            $('body').addClass('open__menu');
        });
    });

    $(document).mouseup(function(e) { // web document click event
        var div = $(".right__menu"); // here we specify the ID of the element
        if (!div.is(e.target) // if the click was not on our block
            &&
            div.has(e.target).length === 0) { // and not by its children
            $(".right__menu").removeClass("open");
            $('body').removeClass("open__menu");
        }
    });
  
  
  



    $('.right__menu .menu__>li>a[data-slide]').click(function() {
      $('.right__menu .menu__>li>a').removeClass('active');
      $(this).addClass('active');

      $(".right__menu").removeClass("open");
            $('body').removeClass("open__menu");
    });


    $('.close').click(function() {

      $(".right__menu").removeClass("open");
            $('body').removeClass("open__menu");
    });
  
    $('.mobile__').click(function() {

      $(".right__menu").removeClass("open");
            $('body').removeClass("open__menu");
    });
  

  
  

// =========================================================== 
// cssClassTogglerScroll
// =========================================================== 
  
//  function animateNumber(callback, from, to, duration) {
//  let start = null,
//    animate = timestamp => {
//      start = start || timestamp;
//      let progress = Math.min((timestamp - start) / duration, 1);
//      callback(progress * (to - from) + from);
//      if(progress < 1) {
//        window.requestAnimationFrame(animate);
//      }
//    };
//  window.requestAnimationFrame(animate);
//}
  
  
  
  
  class cssClassTogglerScroll{
  constructor(data){
    this.options = {
      root: null,
      rootMargin: "0px",
      threshold: data.threshold
    };

    this.observer = new IntersectionObserver((entries, observer)=>{
      entries.forEach((entry) => {
      if(entry.isIntersecting){
        if(data.cssClass){
          entry.target.classList.add(data.cssClass);
        }
        if(data.onVisible){
          data.onVisible();
        }
      }
      else{
        if(data.cssClass){
          entry.target.classList.remove(data.cssClass);
        }
        if(data.onHidden){
          data.onHidden();
        }
      }
    });

  }, this.options);
    this.observer.observe(data.element);

  }
}

for(let div of document.querySelectorAll('footer')){

  new cssClassTogglerScroll({
    element: div,
    cssClass: 'act__',
    threshold: 0.1,
    onVisible: () => {

    },
    onHidden: () => {
//      console.log('section__products active');
    }
  });

}
  
  
// =========================================================== 
// END cssClassTogglerScroll
// =========================================================== 
  


//    responsiveVoice.cancel();
//   responsiveVoice.speak($('h1').val());


//responsiveVoice.enableWindowClickHook();
//  responsiveVoice.clickEvent();
  
//  	responsiveVoice.setDefaultVoice("US English Female");
//responsiveVoice.enableEstimationTimeout = false;
  
//responsiveVoice.speak($('h1').text(), "UK English Male", {volume: 1}); 
//responsiveVoice.speak($('.number').text(), "UK English Male", {volume: 1}); 
  
//function startCapture(displayMediaOptions) {
// let captureStream = null;
//
// return navigator.mediaDevices.getDisplayMedia(displayMediaOptions)
//    .catch(err => { console.error("Error:" + err); return null; });
//}
  
// ===========================================================
// SCROLL
// ===========================================================
  
// ===========================================================
// SCROLL
// ===========================================================
  
  
  


//  var height = $(window).scrollTop();
//
//  if(height => 100 ) {
////    $('.scroll__menu').addClass('top');
//  }
//
//  $(window).scroll(function() {
//      var height = $(window).scrollTop();
//
//      if(height > 100 ) {
//            $('header').addClass('top');
//      } else {
//           $('header').removeClass('top');
//      }
//  });


// ===========================================================
// END SCROLL
// ===========================================================
  
// ===========================================================
// Scroll Style
// ===========================================================
  
  
  
  
  
  
  
// ===========================================================
// Audio Play
// ===========================================================
  
  
//  var obj = document.createElement("audio");
//  obj.src = "https://assets.codepen.io/217233/p3d_pop2_t.mp3";
//  obj.volume = 0.1;
//  obj.autoPlay = false;
//  obj.preLoad = true;
//  obj.controls = true;
//
//  $(".purpur").click(function() {
//    obj.play();
//    // obj.pause();
////    console.log(obj.src);
//  });
//  
//    var objn = document.createElement("audio");
//  objn.src = "https://assets.codepen.io/217233/p3d_pop5_t.mp3";
//  objn.volume = 0.1;
//  objn.autoPlay = false;
//  objn.preLoad = true;
//  objn.controls = true;
//
//  $(".intercom-launcher").click(function() {
//    objn.play();
//    // obj.pause();
////    console.log(obj.src);
//  });
  
  
  
  
// ===========================================================
// END Audio Play
// ===========================================================
  
// ===========================================================
// Option Select calculation
// ===========================================================
  
  
//  $('select[name="an_key"],select[name="an_work"]').change(function(){
//    var sum = 1; 
//    $('.anonymous').find(":selected").each(function(){
//    // console.log($(this).val());
//
//        sum = 0.3 + sum * parseInt($(this).val());
//        // console.log(sum);
//        $('.box__price.an span').html( Math.trunc(sum)); 
//        $('.an_price').val( Math.trunc(sum)); 
//    });
//  });
//    
//  
//  $('select[name="co_key"],select[name="co_work"]').change(function(){
//    var sum = 1; 
//    $('.connected').find(":selected").each(function(){
//    // console.log($(this).val());
//
//        sum = 1 + sum * parseInt($(this).val());
//        // console.log(sum);
//        $('.box__price.co span').html( Math.trunc(sum)); 
//        $('.co_price').val( Math.trunc(sum)); 
//    });
//  });
//      
//  
//  $('select[name="fa_key"],select[name="fa_work"]').change(function(){
//    var sum = 1; 
//    $('.family').find(":selected").each(function(){
//    // console.log($(this).val());
//
//        sum = 2.5 + sum * parseInt($(this).val());
//        // console.log(sum);
//        $('.box__price.fa span').html( Math.trunc(sum)); 
//        $('.fa_price').val( Math.trunc(sum)); 
//    });
//  });
//    
//  $('select[name="un_key"],select[name="un_work"]').change(function(){
//    var sum = 750; 
//    $('.unlimited').find(":selected").each(function(){
//    // console.log($(this).val());
//
//        sum = sum * parseInt($(this).val());
//        // console.log(sum);
//        $('.box__price.un span').html( Math.trunc(sum)); 
//        $('.un_price').val( Math.trunc(sum)); 
//    });
//  });
  
  
//  $('select.info').change(function(){
//    var sum = 0; 
//    $('.family').find(":selected").each(function(){
//            sum = sum +  parseInt($(this).val());
//        $('span.resultAppend').html(sum);
//    });
//  });
  
// ===========================================================
// END Option Select calculation
// ===========================================================
  
// ===========================================================
// Scroll Style
// ===========================================================
	
	
// ===========================================================
// cursor
// ===========================================================
  
  
//  const updateProperties = (elem, state) => {
//    elem.style.setProperty('--x', `${state.x}px`)
//    elem.style.setProperty('--y', `${state.y}px`)
//    elem.style.setProperty('--width', `${state.width}px`)
//    elem.style.setProperty('--height', `${state.height}px`)
//    elem.style.setProperty('--radius', state.radius)
//    elem.style.setProperty('--scale', state.scale)
//  }
//
//  document.querySelectorAll('.cursor').forEach(cursor => {
//    let onElement
//
//    const createState = e => {
//      const defaultState = {
//        x: e.clientX,
//        y: e.clientY,
//        width: 40,
//        height: 40,
//        radius: '50%'
//      }
//
//      const computedState = {}
//
//      if (onElement != null) {
//        const { top, left, width, height } = onElement.getBoundingClientRect()
//        const radius = window.getComputedStyle(onElement).borderTopLeftRadius
//
//        computedState.x = left + width / 2
//        computedState.y = top + height / 2
//        computedState.width = width
//        computedState.height = height
//        computedState.radius = radius
//      }
//
//      return {
//        ...defaultState,
//        ...computedState
//      }
//    }
//
//    document.addEventListener('mousemove', e => {
//      const state = createState(e)
//      updateProperties(cursor, state)
//    })
//
//    document.querySelectorAll('a, button').forEach(elem => {
//      elem.addEventListener('mouseenter', () => (onElement = elem))
//      elem.addEventListener('mouseleave', () => (onElement = undefined))
//    })
//  })
//  
//
//  
//  
////  HOVER HEADER  JQERY
//  
//  var n = 0;
//  $( "header" )
//    .mouseenter(function() {
//      n += 1;
////        $( '.cursor' ).addClass( "none" );
//    })
//    .mouseleave(function() {
////       $( '.cursor' ).removeClass( "none" );
//    }); 
//  
//  var en = 0;
//  $( "footer" )
//    .mouseenter(function() {
//      en += 1;
//        $( '.cursor' ).addClass( "curblack" );
//    })
//    .mouseleave(function() {
//       $( '.cursor' ).removeClass( "curblack" );
//    });



 // ===========================================================
// cursor
// =========================================================== 
  
  
  
// ===========================================================
// NAVIGATION LOGO SCROLL TOP
// ===========================================================	
	
	// NAVIGATION LOGO SCROLL TOP
  
//$('.logo').on('click', function(e) {
//  e.preventDefault();
//  $('.nav-toggle').removeClass('open');
//  $('.menu-left').removeClass('collapse');
//  $('body').animate({
//    scrollTop: 0
//  }, 750, 'easeInOutQuad')
//});
  
// LINKS TO ANCHORS
    //$('header a[href^="#"]').on('click', function(event) {
    //
    //  var $target = $(this.getAttribute('href'));
    //
    //  if($target.length) {
    //    event.preventDefault();
    //    $('html, body').stop().animate({
    //      scrollTop: $target.offset().top
    //    }, 750, 'easeInOutQuad');
    //  }
    //});

// TOGGLE HAMBURGER & COLLAPSE NAV
//$('.nav-toggle').on('click', function() {
//  $(this).toggleClass('open');
//  $('.menu-left').toggleClass('collapse');
//});
// REMOVE X & COLLAPSE NAV ON ON CLICK
//$('header .menu-left a').on('click', function() {
//  $('.nav-toggle').removeClass('open');
//  $('.menu-left').removeClass('collapse');
//});

// SHOW/HIDE NAV

// Hide Header on on scroll down
  
//var didScroll;
//var lastScrollTop = 0;
//var delta = 5;
//var navbarHeight = $('.box__menu').outerHeight();
//
//$(window).scroll(function(event){
//    didScroll = true;
//});
//
//setInterval(function() {
//    if (didScroll) {
//        hasScrolled();
//        didScroll = false;
//    }
//}, 250);
//
//function hasScrolled() {
//    var st = $(this).scrollTop();
//
//    // Make sure they scroll more than delta
//    if(Math.abs(lastScrollTop - st) <= delta)
//        return;
//
//    // If they scrolled down and are past the navbar, add class .nav-up.
//    // This is necessary so you never see what is "behind" the navbar.
//    if (st > lastScrollTop && st > navbarHeight){
//        // Scroll Down
////        $('.box__menu').removeClass('show-nav').addClass('hide-nav');
////        $('.nav-toggle').removeClass('open');
////        $('.menu-left').removeClass('collapse');
//    } else {
//        // Scroll Up
//        if(st + $(window).height() > $(document).height()) {
//            $('.box__menu').removeClass('hide-nav').addClass('show-nav');
//        }
//    }
//
//    lastScrollTop = st;
//}
  
// ===========================================================  
// End NAVIGATION LOGO SCROLL TOP
// ===========================================================  
	
	

    



// =========================================================== 
// SLICK SLIDER FULL NAVIGATION
// ===========================================================    
  
  

  
$('.next__arrow').click(function() { 
  $full__tuch.slick('slickNext');
});

//$('.flat.section__9 .right__').click(function() {
//  $gallery.slick('slickPrev');
//});
  

  
    var $full__tuch = $('#full__tuch');
  
  
$full__tuch.slick({
  arrows: false,
  dots: false,
  infinite: false,

  vertical: true,
  verticalSwiping: true,
  


  slidesToShow: 1,
  slidesToScroll: 1,
  
  focusOnSelect: true,
  аccessibility: true,
  
                    speed: 1300,
  
//   fade: true,
//  cssEase: 'linear',
  
  
    swipe: true,
//    swipeToSlide: true,
    touchThreshold: 10,
  
     lazyLoad: 'progressive',
  
  
  
  
        responsive: [{
                breakpoint: 992,
                settings: {
                    arrows: false,
                    dots: false,
                    infinite: false,

                    vertical: true,
                    verticalSwiping: true,

                    swipe: true,

                    slidesToShow: 1,
                    slidesToScroll: 1,

                    speed: 1300,

                  //   fade: true,
                  //  cssEase: 'linear',

                  //    swipeToSlide: true,
                      touchThreshold: 10,
                    focusOnSelect: true,
                    аccessibility: true,
                }
            },
                     {
                breakpoint: 601,
                settings: {
                  

                    arrows: false,
                    dots: false,
                    infinite: false,

                    vertical: true,
                    verticalSwiping: true,

                    swipe: true,

                    slidesToShow: 1,
                    slidesToScroll: 1,

                    speed: 1300,
                  
                    focusOnSelect: true,
                    аccessibility: true,
                  
                  
                }
            },
            {
                breakpoint: 430,
                settings: {
                
                    arrows: false,
                    dots: false,
                    infinite: false,

                    vertical: true,
                    verticalSwiping: true,

                    swipe: true,

                    slidesToShow: 1,
                    slidesToScroll: 1,

                    speed: 1300,
                                
                    focusOnSelect: true,
                    аccessibility: true,
                  
                }
            }
        ]
  
  
  
});
  
  
  $full__tuch.on('wheel', (function(e) {
    e.preventDefault();

    clearTimeout(scroll);
    scroll = setTimeout(function(){scrollCount=0;},  10);
    if(scrollCount){
      return 0;
    }else{
      scrollCount=1;
    }
    

    if (e.originalEvent.deltaY < 0) {
      $(this).slick('slickPrev');
      
    } else {
     
      $(this).slick('slickNext');
    }
}));

  
  
  
  
  

    
  $('#full__tuch').on('beforeChange',  function(event, slick){
    
//    if(nextSlide > currentSlide){
//        turnEllipse(90);
//    }else{
//        turnEllipse(-90);
//    }
    
     $('.home__2 ul.mobile li a').on('click', function() {
    
   

         var $mobile_data = $(this).data("mobile");
       
       var $gor =  $mobile_data + 1;
        
//       console.log($mobile_data);

        $('.home__2 ul.mobile li ').removeClass('select');


        $('.home__2 ul.mobile').removeClass('select1 select2 select3 select4 select5 select6');

        $(this).parent().addClass('select'); 
        $(this).parent().parent().addClass('select'+ $mobile_data); 
        
        
          $(this).addClass('select'); 
       
       
       
       $('.images__slider li').removeClass('open');
       
           $('.images__slider li:nth-child(' + $gor +')').addClass('open'); 


      });  
   
    
//    $('.my-gallery-image').on('click', function() {
//        $(this).addClass('active');
//    });
});  
  
  
  
    
    $('#full__tuch').on('afterChange', function(event, slick, currentSlide){
      
      
      
      
      	if (currentSlide == 6) {
 
            setTimeout(function() {
              
              
               setTimeout(function() {

                  $('#video_7').addClass('none');
              
                }, 300);
              
              $('#video_7').addClass('opacyte');
              $('#video_7_1').removeClass('opacyte');

           }, 100);

        }
      
      
//      
//  		  if (currentSlide == 3) {
//
//          } else if (currentSlide == 4) {
//
//          }
      
	});
  
  
  
  
  

  $('a[data-slide]').click(function(e) {
    e.preventDefault();
    var slideno = $(this).data('slide');
    $('#full__tuch').slick('slickGoTo', slideno - 1);
  });

  
  
  
  
  
    
    
  
  $('#home__4_slider .next__smoll').click(function() { 
    $home__4_slider.slick('slickNext');
  });    
  
  $('#home__4_slider .next__').click(function() { 
    $home__4_slider.slick('slickNext');
  });
 
  $('#home__4_slider .prev__').click(function() {
    $home__4_slider.slick('slickPrev');
  });
    
    
  var $home__4_slider = $('#home__4_slider');

    $home__4_slider.slick({
        fade: true,
        cssEase: 'linear',
      
        arrows: false,
        dots: false,
//   
//        autoplay: false,
//        speed: 1000,
//

//      
//      
       infinite: true,
//       variableWidth: true, 
//
//
//        centerMode: true,
//        centerPadding: '60',
      
    slidesToShow: 1,
    slidesToScroll: 1,
      
    arrows: false,
      
//    centerMode: true,
//    variableWidth: true,
//    focusOnSelect: true,
    infinite: true,
    draggable: false,
      
      slickSetOption: false,
      
      
        speed: 350,
      asNavFor: '#home__4_images_slider',
    });
  

  
  $('#home__4_images_slider').slick({
    
    
    asNavFor: '#home__4_slider',

      
    slidesToShow: 3,
    slidesToScroll: 1,
      
    arrows: false,
      
    centerMode: true,
    variableWidth: true,
    focusOnSelect: true,
    infinite: true,
    draggable: true,
      
      slickSetOption: false,
      
      
        speed: 350,

    });
  
  
  
  


  $('#slider__home__5').slick({
        fade: true,
        cssEase: 'linear',
      
        arrows: false,
        dots: false,
      
        autoplay: false,
        speed: 1000,
      
//        infinite: true,
      
//        adaptiveHeight: true,
      
        slidesToShow: 1,
        slidesToScroll: 1,
  });
  


  $('a[data-home]').click(function(e) {
      e.preventDefault();
      var slideno = $(this).data('home');
      $('#slider__home__5').slick('slickGoTo', slideno - 1);
  });
  
    


  
  
//    $('.home__4 .next__').click(function() { 
//    $slider__4.slick('slickNext');
//  });
// 
//  $('.home__4 .prev__').click(function() {
//    $slider__4.slick('slickPrev');
//  });
    
    
  
   

  $('.slider__line').slick({
//        fade: true,
//        cssEase: 'linear',
//      
        arrows: false,
        dots: false,
//      
//        autoplay: true,
//        speed: 20,
//      
        infinite: true,
        centerMode: true,
        variableWidth: true,
      
        slidesToShow: 4, // толкьо 1 слайд показывать одновременно
        slidesToScroll: 1, // по 1-му слайду проскролливать
        speed: 8000, // медленная смена слайдов - скорость бегущей строки
        autoplay: true, // устанавливаем автозапуск слайдера
        autoplaySpeed: 0, //делаем запуск мгновенный с загрузкой страницы
        cssEase: 'linear', // делаем анимацию однотонной при смене слайда
    
//        responsive: [{
//                breakpoint: 1500,
//                settings: {
//                    arrows: true,
//                    slidesToShow: 4,
//                    slidesToScroll: 1,
//                    infinite: true,
//                }
//            },
//                     {
//                breakpoint: 1300,
//                settings: {
//                    arrows: true,
//                    slidesToShow: 3,
//                    slidesToScroll: 1,
//                    infinite: true,
//                }
//            },
//            {
//                breakpoint: 1000,
//                settings: {
//                    arrows: true,
//                    slidesToShow: 2,
//                    slidesToScroll: 1,
//                    infinite: true,
//                }
//            },
//            {
//                breakpoint: 430,
//                settings: {
//                    arrows: true,
//                    slidesToShow: 1,
//                    slidesToScroll: 1,
//                    infinite: true,
//                }
//            }
//        ]
    });



  
//$('.flat.section__9 .left__').click(function() { 
//  $gallery.slick('slickNext');
//});
//
//$('.flat.section__9 .right__').click(function() {
//  $gallery.slick('slickPrev');
//});
//
//  
//var $gallery = $('.flat.section__9 .box__slider__8');
//
//
//  $gallery.slick({
//    arrows: false,
//    speed: 550,
//    fade: true,
//    cssEase: 'linear',
//    swipe: true,
//    swipeToSlide: true,
//    touchThreshold: 10
//  }); 
//
//
//var slideCount = null;
//
//$gallery.on('init', function(event, slick){
//  slideCount = slick.slideCount;
//  setSlideCount();
//  setCurrentSlideNumber(slick.currentSlide);
//});
//
//$gallery.on('beforeChange', function(event, slick, currentSlide, nextSlide){
//  setCurrentSlideNumber(nextSlide);
//});
//
//function setSlideCount() {
//  var $el = $('.rslide-count-wrap').find('.rtotal');
//  $el.text(slideCount);
//}
//
//function setCurrentSlideNumber(currentSlide) {
//  var $el = $('.rslide-count-wrap').find('.rcurrent');
//  $el.text(currentSlide + 1);
//} 
  


// =========================================================== 
// END SLICK SLIDER FULL NAVIGATION 
// ===========================================================       


// =========================================================== 
// SLICK SLIDER FULL NAVIGATION
// ===========================================================    

  
//  $('a.next__2').click(function() { 
//    $slick__.slick('slickNext');
//  });
// 
//  $('a.prev__2').click(function() {
//    $slick__.slick('slickPrev');
//  });
//
//  var $slick__ = $('.single__slider__2');
//  
//  
//    $slick__.slick({
//        
//        arrows: false,
//        dots: false,
//        autoplay: false,
//        speed: 1000,
//        infinite: false,
//        slidesToShow: 3,
//        slidesToScroll: 1,
//        adaptiveHeight: true,
////                customPaging: function(slider, i) {
////      // this example would render "tabs" with titles
////      return '<span class="dot"></span>';
////    },
//      
//        responsive: [{
//            breakpoint: 1250,
//            settings: {
//                arrows: false,
//                slidesToShow: 2,
//                slidesToScroll: 1,
//                infinite: true,
//            }
//          },
//          {
//            breakpoint: 670,
//            settings: {
//                arrows: false,
//                slidesToShow: 1,
//                slidesToScroll: 1,
//                infinite: true,
//            }
//          }                     
//        ]
//    });
//  


// =========================================================== 
// END SLICK SLIDER FULL NAVIGATION 
// ===========================================================       
    

    
  
  
//  
//class cssClassTogglerScroll{
//  constructor(data){
//    this.options = {
//      root: null,
//      rootMargin: "0px",
//      threshold: data.threshold
//    };
//
//    this.observer = new IntersectionObserver((entries, observer)=>{
//      entries.forEach((entry) => {
//      if(entry.isIntersecting){
//        if(data.cssClass){
//          entry.target.classList.add(data.cssClass);
//        }
//        if(data.onVisible){
//          data.onVisible();
//        }
//      }
//      else{
//        if(data.cssClass){
//          entry.target.classList.remove(data.cssClass);
//        }
//        if(data.onHidden){
//          data.onHidden();
//        }
//      }
//    });
//
//  }, this.options);
//    this.observer.observe(data.element);
//
//  }
//}
//
//
//
//for(let div of document.querySelectorAll('section')){
//
//  new cssClassTogglerScroll({
//    element: div,
//    cssClass: 'active',
//    threshold: 0.1,
//    onVisible: () => {
//
//    },
//    onHidden: () => {
////      console.log('section__products active');
//    }
//  });
//}
//    

  
// =========================================================== 
// Fancybox
// =========================================================== 


    //$("#open-policy").on('click', function() {
    //  
    //  $.fancybox.open({
    //    src : '',
    //    type : 'html',
    //    smallBtn : false
    //  });
    //    
    ////    $('.next-form').click(function() {
    ////
    ////        $.fancybox.open({
    ////	   src  : '#trueModal'
    ////
    ////});
    ////});
    //  
    //});


    
// =========================================================== 
// END Fancybox
// ===========================================================    
    
    
    
    
    
// =========================================================== 
// INPUT MASK
// ===========================================================    



// =========================================================== 
// END INPUT MASK
// ===========================================================     
    
    
    
    
    
// =========================================================== 
// checkbox input click
// ===========================================================   


    //$(document).ready(function(){ 
    //    
    //    
    //    
    //  $('[type="checkbox"]').click(function(){
    //      
    ////      console.log('1');
    //      
    //  
    //      
    //
    //        if ($(this).prop('checked')) {
    //           $('#bot').addClass('chek');
    //          
    //              $('#bot').removeAttr('disabled');
    //             $('[type="checkbox"]').removeClass('errore');
    //            
    //            
    //        } else {
    //             $('#bot').attr('disabled', true);
    //            $('[type="checkbox"]').addClass('errore');
    //        };
    //
    //  });
    //
    //});


    
// =========================================================== 
// END checkbox input click
// ===========================================================    
    
    
    
// =========================================================== 
// INPUT MASK
// ===========================================================    

//var canvas = document.getElementById('cont');
//var clone = document.getElementById('blurCanvasBottom');
//
//var cloneCtx = clone.getContext('2d');
//var ctx = canvas.getContext('2d');
//
//
//var w = $('#blurCanvasTop').width();
//var h = $('#blurCanvasTop').height();
//
//var ww = $(window).width();
//var wh = $(window).height();
//canvas.width = ww;
//canvas.height= wh;
//var partCount = 100;
//var particles = [];
//
//function particle(){
//  this.color = 'rgba(255,255,255,'+ Math.random()+')';
////  console.log(this.color);
//  this.x = randomInt(0,ww);
//  this.y = randomInt(0,wh);
//  this.direction = {
//    "x": -1 + Math.random() * 2,
//    "y": -1 + Math.random() * 2
//  };
//  this.vx = 0.3 * Math.random();
//  this.vy = 0.3 * Math.random();
//  this.radius = randomInt(2,3);
//  this.float = function(){
//    this.x += this.vx * this.direction.x;
//    this.y += this.vy * this.direction.y;
//  };
//  this.changeDirection = function (axis) {
//    this.direction[axis] *= -1;
//  };
//  this.boundaryCheck = function () {
//            if (this.x >= ww) {
//                this.x = ww;
//                this.changeDirection("x");
//            } else if (this.x <= 0) {
//                this.x = 0;
//                this.changeDirection("x");
//            }
//            if (this.y >= wh) {
//                this.y = wh;
//                this.changeDirection("y");
//            } else if (this.y <= 0) {
//                this.y = 0;
//                this.changeDirection("y");
//            }
//        };
//  this.draw = function () {
//    ctx.beginPath();
//    ctx.fillStyle = this.color;
//    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
//    ctx.fill();
//  };
//}
//function clearCanvas() {
// cloneCtx.clearRect(0, 0, ww, wh);
// ctx.clearRect(0, 0, ww, wh);
//}
//function createParticles(){
//  for (i=0;i<partCount;i++){
//    var p = new particle();
//    particles.push(p);
//  }
//}
//function drawParticles() {
//   for (i=0;i<particles.length;i++) {
//     p = particles[i];
//     p.draw();
//   }
//}
//function updateParticles() {
//        for (var i = particles.length - 1; i >= 0; i--) {
//            p = particles[i];
//            p.float();
//            p.boundaryCheck();
//        }
//}
//createParticles();
//drawParticles();
//function animateParticles() {
//        clearCanvas();
//        drawParticles();
//        updateParticles();
//        cloneCtx.drawImage(canvas, 0, 0);
//        requestAnimationFrame(animateParticles);
//    }
//requestAnimationFrame(animateParticles);
//cloneCtx.drawImage(canvas, 0, 0);
//
//$(window).on('resize',function(){
//  ww = $(window).width();
//  wh = $(window).height();
//  canvas.width = ww;
//  canvas.height= wh;
//  clearCanvas();
//  particles = [];
//  createParticles();
//  drawParticles();
//});
//function randomInt(min,max)
//{
//    return Math.floor(Math.random()*(max-min+1)+min);
//}
//function velocityInt(min,max)
//{
//    return Math.random()*(max-min+1)+min;
//}

// =========================================================== 
// END INPUT MASK
// ===========================================================     

  
  
// =========================================================== 
// MASSEDG
// ===========================================================  
  
//  $('.intercom-launcher').click(function(){
//    $('.massage__form').toggleClass('open');
////    $('body').toggleClass('back');
//    $('.intercom-lightweight-app-launcher-icon-open i').toggleClass('open');
//    $('.intercom-lightweight-app-launcher-icon-open svg').toggleClass('none');
//                                
//      
// });
  
  
// =========================================================== 
// END CLICK MASSEDG
// ===========================================================    
  
  
// =========================================================== 
// END CLICK MASSEDG
// ===========================================================    
  
  
  
// ================================================================================================================================================================= 

//  $(".flat.section__3 .box__link").click(function(e){
//    e.preventDefault();
//    $(this).text(($(this).text() == 'Скрыть') ? 'Подробнее' : 'Скрыть');
////    $(this).text(  text == "Подробнее" ? "Подробнее" : "Подробнее1");
////    $(this).find('').toggleClass('active');
//    $(this).prev('').toggleClass('active');
//        $(this).toggleClass('open');
//  });
  
// ================================================================================================================================================================= 
  
  
  
//    $(function () {
//          $('[class*="phone"]').mask("+38(099) 999-99-99");
//    });
  
  
    $("#test").on('click', function() {

      $.fancybox.open('<div class="titlebox"><h2 class="title tc">Политика конфиденциальности</h2></div><div class="md_content tl"><p>Ваша конфиденциальность очень важна для нас. Мы хотим, чтобы Ваша работа в Интернет по возможности была максимально приятной и полезной, и Вы совершенно спокойно использовали широчайший спектр информации, инструментов и возможностей, которые предлагает Интернет.</p><p>Личная информация Членов, собранная при регистрации (или в любое другое время) преимущественно используется для подготовки Продуктов или Услуг в соответствии с Вашими потребностями. Ваша информация не будет передана или продана третьим сторонам. Однако мы можем частично раскрывать личную информацию в особых случаях, описанных в «Согласии с рассылкой»</p><p><strong>Какие данные собираются на сайте</strong></p><p>При добровольной регистрации на получение рассылки вы отправляете свое Имя и E-mail через форму регистрации.</p><p><strong>С какой целью собираются эти данные</strong></p><p>Имя используется для обращения лично к вам, а ваш e-mail для отправки вам писем рассылок, новостей, полезных материалов, коммерческих предложений.</p><p>Ваши имя и e-mail не передаются третьим лицам, ни при каких условиях кроме случаев, связанных с исполнением требований законодательства.</p><p>Вы можете отказаться от получения писем рассылки и удалить из базы данных свои контактные данные в любой момент, кликнув на ссылку для отписки, присутствующую в каждом письме.</p><p><strong>Как эти данные используются</strong></p><p>При помощи этих данных собирается информация о действиях посетителей на сайте с целью улучшения его содержания, улучшения функциональных возможностей сайта и, как следствие, создания качественного контента и сервисов для посетителей.</p><p>Вы можете в любой момент изменить настройки своего браузера так, чтобы браузер блокировал все файлы или оповещал об отправке этих файлов. Учтите при этом, что некоторые функции и сервисы не смогут работать должным образом.</p> <p><strong>Как эти данные защищаются</strong></p><p>Для защиты Вашей личной информации мы используем разнообразные административные, управленческие и технические меры безопасности. Наша Компания придерживается различных международных стандартов контроля, направленных на операции с личной информацией, которые включают определенные меры контроля по защите информации, собранной в Интернет.</p><p>Наших сотрудников обучают понимать и выполнять эти меры контроля, они ознакомлены с нашим Уведомлением о конфиденциальности, нормами и инструкциями.</p><p>Тем не менее, несмотря на то, что мы стремимся обезопасить Вашу личную информацию, Вы тоже должны принимать меры, чтобы защитить ее.</p><p>Мы настоятельно рекомендуем Вам принимать все возможные меры предосторожности во время пребывания в Интернете. Организованные нами услуги и веб-сайты предусматривают меры по защите от утечки, несанкционированного использования и изменения информации, которую мы контролируем. Несмотря на то, что мы делаем все возможное, чтобы обеспечить целостность и безопасность своей сети и систем, мы не можем гарантировать, что наши меры безопасности предотвратят незаконный доступ к этой информации хакеров сторонних организаций.</p><p>В случае изменения данной политики конфиденциальности вы сможете прочитать об этих изменениях на этой странице или, в особых случаях, получить уведомление на свой e-mail.</p></div>');

  });
  
  

});


//document.addEventListener('DOMContentLoaded', function(){
//    jQuery(document).ready( function($){
//      
//      });
//
//
//  
//  });

//
//  document.addEventListener("DOMContentLoaded", function() {
//  var lazyVideos = [].slice.call(document.querySelectorAll("video.lazy"));
//
//  if ("IntersectionObserver" in window) {
//    var lazyVideoObserver = new IntersectionObserver(function(entries, observer) {
//      entries.forEach(function(video) {
//        if (video.isIntersecting) {
//          for (var source in video.target.children) {
//            var videoSource = video.target.children[source];
//            if (typeof videoSource.tagName === "string" && videoSource.tagName === "SOURCE") {
//              videoSource.src = videoSource.dataset.src;
//            }
//          }
//
//          video.target.load();
//          video.target.classList.remove("lazy");
//          lazyVideoObserver.unobserve(video.target);
//        }
//      });
//    });
//
//    lazyVideos.forEach(function(lazyVideo) {
//      lazyVideoObserver.observe(lazyVideo);
//    });
//  }
//});
//  