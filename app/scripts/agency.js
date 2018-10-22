/*!
 * Start Bootstrap - Agnecy Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

// jQuery for page scrolling feature - requires jQuery Easing plugin
'use strict';
$(function() {
  $('a.page-scroll').bind('click', function(event) {
    var href = $(this).attr('href');
    $('html, body').stop().animate({
      scrollTop: $(href).offset().top
    }, 1500, 'easeInOutExpo');
    history.pushState({}, '', href);
    event.preventDefault();
  });
});

// Highlight the top nav as scrolling occurs
$('body').scrollspy({
  target: '.navbar-fixed-top'
});

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
  $('.navbar-toggle:visible').click();
});

window.addEventListener('updateready', window.location.reload);

if (window.applicationCache.status === window.applicationCache.UPDATEREADY) {
  window.location.reload();
}

// Map

var map;

$(function() {
  map = L.map('map').setView([47.761026, 13.069313], 11);
  var uni = 'Fachhochschule Salzburg';


  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(map);

  L.marker([47.723379, 13.087777]).addTo(map)
      .bindPopup( '<h2 class="section-heading">Der Veranstaltungsort</h2>' +
          '<h3 class="section-subheading text-muted">' +
            uni +
            ' <a href="https://www.google.com/maps/place/Fachhochschule+Salzburg/" title="Open in Google Maps">' +
              '<i class="fa fa-external-link"></i>' +
            '</a>' +
          '</h3>')
      .openPopup();

  map.scrollWheelZoom.disable(); 
  setTimeout(function(){ map.invalidateSize()}, 100);

  map.on('resize', function () {
      map.invalidateSize();
  });  
});




