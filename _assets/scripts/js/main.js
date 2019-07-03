$(document).ready(function(){

// Mobile hamburger menu function
  $(".hamburger").on('click', function(){
    $(".nav").toggleClass('show');
    $(".menu__contact").toggleClass('show');
    $('.hamburger').toggleClass('is-active');
  });

// Dropdown menu click function
  $(".port__drop").on('mouseenter', function(){
    $(".port__drop__content").removeClass('hide');
  });
  $(".port__drop__content").on('mouseleave', function(){
    $(".port__drop__content").addClass('hide');
  });

// Contact trgr
  $('.trgr.phone').click(function(){
      $('.contact__mail').addClass('hide');
      $('.contact__insta').addClass('hide');
      $('.contact__twitter').addClass('hide');
      $('.contact__github').addClass('hide');
      $('.contact__linkedin').addClass('hide');
      $('.contact__phone').toggleClass('hide');
  });
  $('.trgr.mail').click(function(){
      $('.contact__phone').addClass('hide');
      $('.contact__insta').addClass('hide');
      $('.contact__twitter').addClass('hide');
      $('.contact__github').addClass('hide');
      $('.contact__linkedin').addClass('hide');
      $('.contact__mail').toggleClass('hide');
  });
  $('.trgr.insta').click(function(){
      $('.contact__mail').addClass('hide');
      $('.contact__phone').addClass('hide');
      $('.contact__twitter').addClass('hide');
      $('.contact__github').addClass('hide');
      $('.contact__linkedin').addClass('hide');
      $('.contact__insta').toggleClass('hide');
  });
  $('.trgr.twitter').click(function(){
      $('.contact__mail').addClass('hide');
      $('.contact__insta').addClass('hide');
      $('.contact__phone').addClass('hide');
      $('.contact__github').addClass('hide');
      $('.contact__linkedin').addClass('hide');
      $('.contact__twitter').toggleClass('hide');
  });
  $('.trgr.github').click(function(){
      $('.contact__mail').addClass('hide');
      $('.contact__insta').addClass('hide');
      $('.contact__twitter').addClass('hide');
      $('.contact__phone').addClass('hide');
      $('.contact__linkedin').addClass('hide');
      $('.contact__github').toggleClass('hide');
  });
  $('.trgr.linkedin').click(function(){
      $('.contact__mail').addClass('hide');
      $('.contact__insta').addClass('hide');
      $('.contact__twitter').addClass('hide');
      $('.contact__github').addClass('hide');
      $('.contact__phone').addClass('hide');
      $('.contact__linkedin').toggleClass('hide');
  });
// Word rotation on splash page
(function(){

    // List your words here:
    var words = [
        'UX/UI',
        'Software',
        'Web'
        ], i = 0;

    var wordChange = setInterval(function(){
        $('#word').fadeIn(function(){
            $(this).html(words[i=(i+1)%words.length]);
        });
    }, 4000);
})();

// Splash page animation
$('.enter__btn').on('click', function(){
  $('.main__spalsh').addClass('clicked');
  $('HTML').removeClass('overflow-y');
  function stopChange(){
    clearInterval(wordChange);
  };
  setTimeout(function(){
    $('.main__spalsh').addClass('hide');
  }, 5000);
});
});
