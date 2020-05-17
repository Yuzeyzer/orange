let scene = document.getElementById('scene');
let parallax = new Parallax(scene);

TweenMax.from(".logo",1,{
    opacity:0,
    x:-20,
    ease:Expo.easeInOut
})

TweenMax.staggerFrom(".menu-links ul li",1,{
    opacity:0,
    x:-20,
    ease:Power3.easeInOut
},0.08)

TweenMax.from(".search",1,{
    delay:.5,
    opacity:0,
    x:-20,
    ease:Expo.easeInOut
})

TweenMax.from(".account",1,{
    delay:.6,
    opacity:0,
    x:-20,
    ease:Expo.easeInOut
})

TweenMax.from(".cart",1,{
    delay:.7,
    opacity:0,
    x:-20,
    ease:Expo.easeInOut
})

TweenMax.from(".juice",1,{
    delay:2,
    opacity:0,
    y:-800,
    ease: Expo.easeInOut
});

TweenMax.from(".leaves .layer:nth-child(1)", 2,{
    delay:2,
    opacity:0,
    y:-800,
    ease:Expo.easeInOut
})
TweenMax.from(".leaves .layer:nth-child(2)", 2,{
    delay:2.1,
    opacity:0,
    y:-800,
    ease:Expo.easeInOut
})

TweenMax.from(".leaves .layer:nth-child(3)", 2,{
    delay:2.2,
    opacity:0,
    y:-800,
    ease:Expo.easeInOut
})

TweenMax.from(".leaves .layer:nth-child(4)", 2,{
    delay:2.3,
    opacity:0,
    y:-800,
    ease:Expo.easeInOut
})

TweenMax.from(".leaves .layer:nth-child(5)", 2,{
    delay:2.5,
    opacity:0,
    y:-800,
    ease:Expo.easeInOut
})

TweenMax.from(".title", 1,{
    delay:1,
    opacity:0,
    y:20,
    ease:Expo.easeInOut
})
TweenMax.from(".tagline", 1,{
    delay:1.3,
    opacity:0,
    y:20,
    ease:Expo.easeInOut
})

TweenMax.from(".pages", 1,{
    delay:1,
    opacity:0,
    y:20,
    ease:Expo.easeInOut
})

TweenMax.from(".more", 1,{
    delay:1.4,
    opacity:0,
    y:20,
    ease:Expo.easeInOut,
})

TweenMax.from(".desc", 1,{
    delay:1.4,
    opacity:0,
    y:20,
    ease:Expo.easeInOut
})

TweenMax.from(".arrows", 1,{
    delay:1.4,
    opacity:0,
    ease:Expo.easeInOut
})

    time = ((10000 / 10000) % 50) * 100
    $('.cd-transition-layer').removeClass('opening')
// Percentage Increment Animation
setTimeout(function () {
    $('.cd-transition-layer').queue(function () {
        $('.cd-transition-layer').removeClass("visible closing opening").dequeue();
    });

}, time);
console.log(time)
// FADE OUT EFFECT WHEN CLICK A LINK
$(document).on("click", "a:not(.lightbox)", function () {
    var newUrl = $(this).attr("href");
    if (!newUrl || newUrl[0] === "#") {
            location.hash = newUrl;
            return;
    }
    $("html").fadeOut(function () {
            location = newUrl;
    });
    return false;
});


function smokeeffect() {
    var modalTrigger = $('.nav-icon'),
            transitionLayer = $('.cd-transition-layer'),
            transitionBackground = transitionLayer.children(),
            modalWindow = $('.full-menu');

    var frameProportion = 1.78, //png frame aspect ratio
            frames = 25, //number of png frames
            resize = false;

    //set transitionBackground dimentions
    setLayerDimensions();
    $(window).on('resize', function () {
            if (!resize) {
                    resize = true;
                    (!window.requestAnimationFrame) ? setTimeout(setLayerDimensions, 300) : window.requestAnimationFrame(setLayerDimensions);
            }
    });

    //open modal window
    modalTrigger.on('click', function (event) {
            event.preventDefault();
            transitionLayer.addClass('visible opening');
            var delay = ($('.no-cssanimations').length > 0) ? 0 : 600;
            setTimeout(function () {
                    modalWindow.addClass('visible');
            }, delay);
    });

    //close modal window
    modalWindow.on('click', '.modal-close', function (event) {
            event.preventDefault();
            transitionLayer.addClass('closing');
            modalWindow.removeClass('visible');
            transitionBackground.one('webkitAnimationEnd oanimationend msAnimationEnd animationend', function () {
                    transitionLayer.removeClass('closing opening visible');
                    transitionBackground.off('webkitAnimationEnd oanimationend msAnimationEnd animationend');
            });
    });
    function setLayerDimensions() {
            var windowWidth = $(window).width(),
                    windowHeight = $(window).height(),
                    layerHeight, layerWidth;
            if (windowWidth / windowHeight > frameProportion) {
                    layerWidth = windowWidth;
                    layerHeight = layerWidth / frameProportion;
            } else {
                    layerHeight = windowHeight * 1.2;
                    layerWidth = layerHeight * frameProportion;
            }
            transitionBackground.css({
                    'width': layerWidth * frames + 'px',
                    'height': layerHeight + 'px',
            });
            resize = false;
    }
}
smokeeffect() // document load end 

