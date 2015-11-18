var link = document.querySelector(".search-btn");
var popup = document.querySelector(".form");
var date = document.querySelector("[name=arrival]");

link.addEventListener("click", function(event) {
  event.preventDefault();
  popup.classList.toggle("show-form");
  date.focus();
});


window.addEventListener("keydown", function(event) {
  if (event.keyCode == 27) {
    if (popup.classList.contains("show-form")) {
      popup.classList.remove("show-form");
    }
  }
});

function initMap() {
  var myLatLng = {lat: 34.865510, lng: -111.763656};

  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 9,
    scrollwheel: false,
    center: myLatLng
  });

  var marker = new google.maps.Marker({
    position: myLatLng,
    map: map,
    title: 'Sedona'
  });
}