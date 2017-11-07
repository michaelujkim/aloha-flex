$(document).ready(function(){


  $('.main-carousel').flickity({
    // options
    prevNextButtons: false,
    cellAlign: 'center',
    contain: true,
    autoPlay: true,
    

  });
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
$('a').css('color', '#e2574c');
$('#alohainfo').css('color', 'white');


// function ValidateEmail(inputText)  
// {  
// var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;  
// if(inputText.value.match(mailformat))  
// {  
//   alert('Thank you');
// document.emailform.your_email.focus();  
// return true;  

// }  
// else  
// {  
// alert('You have entered an invalid email address!');  
// document.emailform.your_email.focus();  
// return false;  
// }  
// }  


$('#emailform').on('submit', function(event) {
  event.preventDefault();
  if ( $('#your-email').val() == '' ) {
     alert('You missed the field.');
  } else {
     alert('Thanks for subscribing!');
  }
});
});




 


