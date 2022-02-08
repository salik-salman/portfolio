/**
 * GLOBAL PARAMS
 * @property ws = Window Height
 * @property hs = Hero Section
 * @property ic = Avatar Image
 * @property ic_a = Image Animation
 * @property ic_ar = Image Animation Remove
 * @property dm = jQuery Document Selector
 */

/**************** GLOBAL PARAMS STARTS ****************/

var
    ws = $(window).height(),
    hs = $('.hr'),
    ic = $('.scroll-down'),
    ic_a = "ic-anm",
    ic_ar = "ic-anm-rm",
    dm = $(document)

/**************** GLOBAL PARAMS END ****************/

/**************** PAGE READY FUNCTIONS STARTS ****************/

dm.ready(function(){

    

})
/**************** PAGE READY FUNCTIONS END ****************/

/**
 * FUNCTIONALITY FOR: HERO IMAGE ANIMATION
 * BY: SALIK SALMAN
 * ON: 05-02-2022
 */

/**************** HERO IMAGE ANIMATION STARTS ****************/
const t = () => {
     ic.removeClass(ic_a)
     ic.addClass(ic_ar)
     hs.animate({height: ws}, 250);
}

const f = () => {
    ic.addClass(ic_a)
    ic.removeClass(ic_ar)
    hs.animate({height: ic.parent().height() - 140});
}

ic.click(function(){
  /*  if (ic.hasClass(ic_a)){
       t()
    }else{
       f()
    }*/
	      $.fn.fullpage.moveTo(parseInt(this.id)+1);
})

/**************** HERO IMAGE ANIMATION END ****************/

/**************** HERO BACKGROUND ANIMATION STARTS ****************/

particlesJS("particles-js", {
    "particles": {
        "number": {
            "value": 100,
            "density": {
                "enable": true,
                "value_area": 800
            }
        },
        "color": {
            "value": "#ffffff"
        },
        "shape": {
            "type": "circle",
            "stroke": {
                "width": 0,
                "color": "#000000"
            },
            "polygon": {
                "nb_sides": 5
            },
            "image": {
                "src": "img/github.svg",
                "width": 100,
                "height": 100
            }
        },
        "opacity": {
            "value": 0.5,
            "random": false,
            "anim": {
                "enable": false,
                "speed": 4,
                "opacity_min": 0.1,
                "sync": false
            }
        },
        "size": {
            "value": 3,
            "random": true,
            "anim": {
                "enable": false,
                "speed": 40,
                "size_min": 0.1,
                "sync": false
            }
        },
        "line_linked": {
            "enable": true,
            "distance": 170,
            "color": "#ffffff",
            "opacity": 0.4,
            "width": 1
        },
        "move": {
            "enable": true,
            "speed": 3,
            "direction": "none",
            "random": true,
            "straight": false,
            "out_mode": "out",
            "bounce": false,
            "attract": {
                "enable": false,
                "rotateX": 600,
                "rotateY": 1200
            }
        }
    },
    "interactivity": {
        "detect_on": "canvas",
        "events": {
            "onhover": {
                "enable": true,
                "mode": "grab"
            },
            "onclick": {
                "enable": true,
                "mode": "push"
            },
            "resize": true
        },
        "modes": {
            "grab": {
                "distance": 300,
                "line_linked": {
                    "opacity": 1
                }
            },
            "bubble": {
                "distance": 400,
                "size": 40,
                "duration": 2,
                "opacity": 8,
                "speed": 3
            },
            "repulse": {
                "distance": 100,
                "duration": 0.4
            },
            "push": {
                "particles_nb": 4
            },
            "remove": {
                "particles_nb": 2
            }
        }
    },
    "retina_detect": true
});

/**************** HERO BACKGROUND ANIMATION END ****************/

/**************** FULLPAGE SCROLL JS STARTS ****************/

/*$('.nav-link').click(function(){
    var sectionIndex = $(this).attr('data-section');
    var slideIndex = $(this).attr('data-slide') || 0;
    fullpage_api.moveTo(sectionIndex, slideIndex);
});*/

addEventListener("DOMContentLoaded", function() {
    $('#fullpage').fullpage({
    
    		slidesNavigation: true,
        navigation: true,
	  	keyboardScrolling: true,
      	animateAnchor: true,
      	scrollHorizontally: true,
      	css3: true,
        scrollingSpeed: 700,
        autoScrolling: true,

      	//Design
      	animateAnchor: true,
      	controlArrows: false,
      	responsiveSlides: true,
        
        });
      
});

/**************** FULLPAGE SCROLL JS END ****************/

