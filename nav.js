//  $('.top-nav').on('click', function () {
//         $(this).toggleClass('open');
//     });

document.addEventListener('DOMContentLoaded', function () {
    var checkbox = document.getElementById('click');
    var navLinks = document.querySelectorAll('.top-nav-links a');

    navLinks.forEach(function (link) {
      link.addEventListener('click', function () {
        checkbox.checked = false; // Close the menu when a link is clicked
      });
    });
  });