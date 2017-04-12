$(document).ready(function(){






TweenMax.staggerFrom(".bio, .hello", 3, {opacity:0, rotation:360, delay:0.5}, 0.2);

TweenMax.to(".main_pic", 5, {right:100, ease:Power4.easeOut});





});