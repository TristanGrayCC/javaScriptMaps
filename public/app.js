var initialize = function(){
  var container = document.getElementById("main-map");
  var chicagoButton = document.getElementById("chicago-button");
  var whereAmIButton = document.getElementById("geo-button");
  var zoom = 10;
  var centre = {lat: 49.184, lng: -2.048};
  var mainMap = new MapWrapper(centre, zoom, container);

  mainMap.addMarker(centre);
  mainMap.addClickEvent();
  mainMap.addInfoWindow(center, "This is an info window!")

  var goToChicago = function(){
    var chicago = {lat: 41, lng: -87};
    mainMap.googleMap.setCenter(chicago);
  };

  var find = function(){
    mainMap.geoLocate;
  };

  chicagoButton.addEventListener("click", goToChicago);
  whereAmIButton.addEventListener("click", find);
}

window.addEventListener("load", initialize);
