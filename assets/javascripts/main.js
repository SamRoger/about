$(document).ready(function(){


TweenMax.staggerFrom(".hello", 3, {opacity:0, delay:1}, 2);
TweenMax.staggerFrom(".world", 3, {opacity:0, delay:2}, 2);
TweenMax.staggerFrom(".period", 3, {opacity:0, delay:6}, 2);
TweenMax.staggerFrom(".bio", 3, {opacity:0, delay:3}, 2);
TweenMax.staggerFrom(".main_pic", 5, {opacity:0, left:300, ease:Power4.easeOut, delay:4.5});
//photos js
TweenMax.staggerFrom(".pic", 0.5, {opacity:0, y:200, rotation:180, delay:0.2}, 0.3);
TweenMax.staggerFrom(".containerContact", 4, {opacity:0,})

$(".pic").on("click", function(){
var modal = new Custombox.modal({
  content: {
    effect: 'rotate',
    target: '.picShow'
  }
});

// Open
modal.open();

});











});