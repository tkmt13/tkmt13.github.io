window.onload = function() {
    const loaded = document.getElementById('loading');
    loaded.classList.add('loaded');
  }

$('a[href^="#"]').click(function() {
    var href= $(this).attr("href");
    var target = $(href);
    var position = target.offset().top - headerHeight;
    $('body,html').stop().animate({scrollTop:position}, 300);   
    return false;
});