$(document).ready (function(){
  $('.btn-navigation') .click(function(){
      $(this).find('.barre').toggleClass('white');
      $('.navigation') .toggleClass('isOpen');
  })
})

window.onscroll = function() {
  if (document.documentElement.scrollTop > window.innerHeight ) 
  { console.log('reached');

    var presentation = document.querySelector('#Presentation');
    presentation.classList.add('is-reached');
  }
}

AOS.init({
  duration:1200,
});









