var mySwiper = new Swiper('.swiper-container', {
    // Optional parameters
    loop: true,
    slidesPerView: 5.3,
    spaceBetween: 15,
    
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },

    // Responsive breakpoints
    breakpoints: {
      // when window width is >= 640px
      960: {
        slidesPerView: 4.3,
        spaceBetween: 8,
      },
      720: {
        slidesPerView: 3.3,
        spaceBetween: 6,
      },
      540: {
        slidesPerView: 2.3,
        spaceBetween: 4,
      },
      320: {
        slidesPerView: 1.3,
        spaceBetween: 2,
      },
      1: {
        slidesPerView: 1,
        spaceBetween: 1,
      }
    }
  })

  


/* // Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
 */