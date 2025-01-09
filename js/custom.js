// to get current year
function getYear() {
    var currentDate = new Date();
    var currentYear = currentDate.getFullYear();
    document.querySelector("#displayYear").innerHTML = currentYear;
}

getYear();


// client section owl carousel
$(".client_owl-carousel").owlCarousel({
    loop: true,
    margin: 20,
    dots: false,
    nav: true,
    navText: [],
    autoplay: true,
    autoplayHoverPause: true,
    navText: [
        '<i class="fa fa-angle-left" aria-hidden="true"></i>',
        '<i class="fa fa-angle-right" aria-hidden="true"></i>'
    ],
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 2
        },
        1000: {
            items: 2
        }
    }
});

$(document).ready(function () {
    $(".owl-carousel").owlCarousel({
      loop: true,
      margin: 10,
      nav: true,  // This enables the navigation arrows
      items: 1,
      navText: ['◄', '►']  // You can replace these with your custom icons or text
    });
  
    // Pause the video when the carousel item changes
    $(".owl-carousel").on('changed.owl.carousel', function(event) {
      var currentItem = event.item.index; // Get the current carousel item index
      var iframe = $(".owl-item").eq(currentItem).find('iframe')[0]; // Get the iframe inside the current item
      
      if (iframe) {
        var iframeSrc = iframe.src;
        // Replace the src URL to stop the video
        iframe.src = iframeSrc; 
      }
    });
  });
  

/** google_map js **/
function myMap() {
    var mapProp = {
        center: new google.maps.LatLng(40.712775, -74.005973),
        zoom: 18,
    };
    var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
}