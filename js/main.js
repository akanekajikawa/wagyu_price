$(function(){
  $('a[href^="#"]').click(function (){
    // console.log('TOP')
    var speed = 700;
    var href= $(this).attr('href');
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top;
    $('html, body').animate({scrollTop:position}, speed, 'swing');
  });
});