$('#myBtn').click(() => {
  document.getElementById("includedContent").innerHTML = '<object type="text/html" data="../../porfolio/chatbot/main/index.html" ></object>';
  $('#myBtn').hide();
});

$('.close').click(() => {
  document.getElementById("includedContent").innerHTML = '';
  $('#myBtn').show();
});


$(function () {
  var date = new Date().toDateString();
  $('#date').html(date);
});

$(window).scroll(function (e) {
  let windowTop = $(this).scrollTop();
  $('nav a').each(function (event) {
    if (windowTop >= $($(this).attr('href')).offset().top - 100) {
      $('nav .active').removeClass('active');
      $(this).addClass('active');
    }
  });
});

