// $(document).ready(function () {
//   $("#drop_btn").click(function () {
//     $(".dropdown").toggle();
//   });
// });
$(document).ready(function () {
//   $("#drop_btn").click(function () {
//     $("#drop_btn").toggleClass('open');
//   });
  $('.shotlist').click((event) => {
    if ($('#favMenu').hasClass('show')) {
      $('#favMenu').removeClass('show');
    } else {
      $('#favMenu').addClass('show');
    }
    event.stopPropagation();
  });
  $('.language-dropdown #drop_btn').click((event) => {
    if ($('.language-dropdown .dropdown').hasClass('show')) {
      $('.language-dropdown .dropdown').removeClass('show');
    } else {
      $('.language-dropdown .dropdown').addClass('show');
    }
    event.stopPropagation();
  });

  $('#domainMenuBtn').click((event) => {
    if ($('#domainMenu').hasClass('show')) {
      $('#domainMenu').removeClass('show');
    } else {
      $('#domainMenu').addClass('show');
    }
    event.stopPropagation();
  });

  $('body').click(() => {
    $('#favMenu').removeClass('show');
    $('.language-dropdown #drop_btn').removeClass('open');
    $('.language-dropdown .dropdown').removeClass('show');
    $('#domainMenu').removeClass('show');
  });
});

