/***************************************Accordin***************************************************/
//uses classList, setAttribute, and querySelectorAll
//if you want this to work in IE8/9 youll need to polyfill these
(function(){
	var d = document,
	accordionToggles = d.querySelectorAll('.js-accordionTrigger'),
	setAria,
	setAccordionAria,
	switchAccordion,
  touchSupported = ('ontouchstart' in window),
  pointerSupported = ('pointerdown' in window);
  
  skipClickDelay = function(e){
    e.preventDefault();
    e.target.click();
  }

		setAriaAttr = function(el, ariaType, newProperty){
		el.setAttribute(ariaType, newProperty);
	};
	setAccordionAria = function(el1, el2, expanded){
		switch(expanded) {
      case "true":
      	setAriaAttr(el1, 'aria-expanded', 'true');
      	setAriaAttr(el2, 'aria-hidden', 'false');
      	break;
      case "false":
      	setAriaAttr(el1, 'aria-expanded', 'false');
      	setAriaAttr(el2, 'aria-hidden', 'true');
      	break;
      default:
				break;
		}
	};
//function
switchAccordion = function(e) {
  console.log("triggered");
	e.preventDefault();
	var thisAnswer = e.target.parentNode.nextElementSibling;
	var thisQuestion = e.target;
    console.log(thisAnswer);
    console.log(thisQuestion);
	if(thisAnswer.classList.contains('is-collapsed')) {
		setAccordionAria(thisQuestion, thisAnswer, 'true');
	} else {
		setAccordionAria(thisQuestion, thisAnswer, 'false');
	}
  	thisQuestion.classList.toggle('is-collapsed');
  	thisQuestion.classList.toggle('is-expanded');
    thisAnswer.classList.toggle('is-collapsed');
    thisAnswer.classList.toggle('is-expanded');
 	
  	thisAnswer.classList.toggle('animateIn');
	};
	for (var i=0,len=accordionToggles.length; i<len; i++) {
		if(touchSupported) {
      accordionToggles[i].addEventListener('touchstart', skipClickDelay, false);
    }
    if(pointerSupported){
      accordionToggles[i].addEventListener('pointerdown', skipClickDelay, false);
    }
    accordionToggles[i].addEventListener('click', switchAccordion, false);
  }
})();

/**********************************End of Accordin************************************************/







function addResponsive() {
    
    var x =document.getElementById("myTopnav");
    var y=x.className.indexOf("responsive");
    /*if (x.className === "topnav") {
        x.className += " responsive";
    } 
    else {
        console.log(x.className);
        x.className = "topnav";
    }*/
    if(y>-1){
        console.log("Iam in here");
        x.className=x.className.slice(0,y-1);
        console.log("The new class "+x.className);
    }else {
        x.className+=" responsive";
        console.log(x.className);   
    }
}

$(document).ready(function(){
      $('#education').waypoint(function(direction){
        if(direction=="down"){
            document.getElementById("custNav").style.visibility="visible";
            console.log("something");
            $('#custNav').addClass('sticky');
            $('#custNav').addClass('animated fadeIn');
           

        }else{
            $('#custNav').removeClass('sticky');
            document.getElementById("custNav").style.visibility = "hidden";
            
        }
    },{
        offset:'60px;'
    });
    
        /* $('#resume-section').waypoint(function(direction){
        if(direction=="down"){
            document.getElementById("foot").style.visibility = "visible";
             $('#foot').addClass('animated fadeIn');

        }else{
            document.getElementById("foot").style.visibility = "hidden";
           
        }
    },{
        offset:'60px;'
    }); */
    
   $('.js--wp-1').waypoint(function(direction){
     $('.js--wp-1').addClass('animated pulse');},{
        offset: '50%'
    });
    $('.js--wp-2').waypoint(function(direction){
     $('.js--wp-2').addClass('animated fadeIn');},{
        offset: '50%'
    });
    $('.skill-content').waypoint(function(direction){
     $('.js--wp-3').addClass('animated slideInRight');},{
        offset: '50%'
    });
    $('.skill-content').waypoint(function(direction){
     $('.js--wp-4').addClass('animated slideInLeft');},{
        offset: '50%'
    });
    $('.skill-content').waypoint(function(direction){
     $('.js--wp-5').addClass('animated slideInRight');},{
        offset: '50%'
    });
    $('.skill-content').waypoint(function(direction){
     $('.js--wp-6').addClass('animated slideInLeft');},{
        offset: '50%'
    });
    $('.skill-content').waypoint(function(direction){
     $('.js--wp-7').addClass('animated slideInRight');},{
        offset: '50%'
    });
    
    $('#resume-section').waypoint(function(direction){
     $('.resume').addClass('animated rubberBand');},{
        offset: '70%'
    });
    


    
})

/*******************************************welcome Note*****************************************/
  var typed = new Typed('.type', {
  strings: [' Web Developer.','JAVA / J2EE Developer.'],
  typeSpeed: 100,
  backSpeed:60,
  loop: true,
  backDelay: 1000
});
/****************************************Scroll****************************************************/

    // Select all links with hashes
$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });

    
