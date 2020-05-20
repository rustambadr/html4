$(function(){
  ymaps.ready(function () {
    var myMap = new ymaps.Map('map', {
      center: [55.751574, 37.573856],
      zoom: 9
    }, {
      searchControlProvider: 'yandex#search'
    });

    var myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
      hintContent: 'Собственный значок метки',
      balloonContent: 'Это красивая метка'
    }, {
      iconLayout: 'default#image',
      iconImageHref: 'images/location.svg',
      iconImageSize: [65, 65],
      iconImageOffset: [-32.5, -65]
    });

    myMap.geoObjects.add(myPlacemark);
  });
});
$(function(){
  $('.block.block2_2 .rows').click(function(){
    $(this).toggleClass('active');
  });
});
$(function(){
  $('.menu-mobile').find('.icon-menu').parent().click(function(event){
    event.preventDefault();
    $('.menu-mobile').addClass("active");
  });
  $('.menu-mobile').find('.icon-menu-close').parent().click(function(event){
    event.preventDefault();
    $('.menu-mobile').removeClass("active");
  });
});
$('#callme form').submit(function(event){
  event.preventDefault();
  $.post( "/send.php", $(this).serialize());
  $(this).find('.modal-body').html('<p>Сообщение отправлено.</p>');
  $('.btn-primary').remove();
});
$('.block form').submit(function(event){
  event.preventDefault();
  $.post( "/send.php", $(this).serialize());
  this.reset();
});
$('.block form .btn.btn-green').click(function(event){
  event.preventDefault();
  $(this).closest('form').find('[type="submit"]').click();
});
$(function(){
  $('footer .p3').click(function(event){
    event.preventDefault();
    window.scrollTo(0, 0);
  });
});
