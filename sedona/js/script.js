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


function initialize() {
  var mapOptions = {
    zoom: 15,
    center: new google.maps.LatLng(34.8546223,-111.8347477)
  }
  var map = new google.maps.Map(document.getElementById('map'),
                                mapOptions);
  var myLatLng = new google.maps.LatLng(34.8546223,-111.8347477);
  var beachMarker = new google.maps.Marker({
    position: myLatLng,
    map: map
  });
}
google.maps.event.addDomListener(window, 'load', initialize);
