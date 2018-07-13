function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition, showError);
  } else {
    var x = document.getElementById("location");
    x.innerHTML = "Geolocation is not supported by this browser.";
  }
}

function showPosition(position) {
  var x = document.getElementById("location");
  x.innerHTML = "Position Obtained";
  document.getElementById('latitude').innerHTML = position.coords.latitude;
  document.getElementById('longitude').innerHTML = position.coords.longitude;


  var latlon = position.coords.latitude + "," + position.coords.longitude;

  initMap(position);
  // $.ajax({
  //   type:"GET",
  //   url:"https://app.ticketmaster.com/discovery/v2/events.json?apikey=U1A7yPBp6jdmOdO7NoDXoG8QK5wwgcPB&latlong="+latlon,
  //   async:true,
  //   dataType: "json",
  //   success: function(json) {
  //               console.log(json);
  //               var e = document.getElementById("events");
  //               e.innerHTML = json.page.totalElements + " events found.";
  //               // showEvents(json);
  //               initMap(position, json);
  //            },
  //   error: function(xhr, status, err) {
  //               console.log(err);
  //            }
  // });

}

function showError(error) {
  switch (error.code) {
    case error.PERMISSION_DENIED:
      x.innerHTML = "User denied the request for Geolocation."
      break;
    case error.POSITION_UNAVAILABLE:
      x.innerHTML = "Location information is unavailable."
      break;
    case error.TIMEOUT:
      x.innerHTML = "The request to get user location timed out."
      break;
    case error.UNKNOWN_ERROR:
      x.innerHTML = "An unknown error occurred."
      break;
  }
}


// function showEvents(json) {
//   for(var i=0; i<json.page.size; i++) {
//     $("#events").append("<p>"+json._embedded.events[i].name+"</p>");
//   }
// }


function initMap(position) {
  var mapDiv = document.getElementById('map');
  var map = new google.maps.Map(mapDiv, {
    center: {
      lat: position.coords.latitude,
      lng: position.coords.longitude
    },
    zoom: 10
  });
  marker = new google.maps.Marker({
    position: new google.maps.LatLng(position.coords.latitude, position.coords.longitude),
    map: map,
    draggable: true,
    title: "Drag me!",
  });

  marker.addListener('click', toggleBounce);

  google.maps.event.addListener(marker, 'dragend', function(evt) {
    document.getElementById('location').innerHTML = 'Position Obtained';
    document.getElementById('latitude').innerHTML = evt.latLng.lat().toFixed(3);
    document.getElementById('longitude').innerHTML = evt.latLng.lng().toFixed(3);
  });

  google.maps.event.addListener(marker, 'dragstart', function(evt) {
    document.getElementById('location').innerHTML = 'Tracking';
    document.getElementById('latitude').innerHTML = "...";
    document.getElementById('longitude').innerHTML = "...";
  });

  marker.setIcon('http://maps.google.com/mapfiles/ms/icons/red-dot.png');
  console.log(marker);
  // for(var i=0; i<json.page.size; i++) {
  //   addMarker(map, json._embedded.events[i]);
  // }
}

function toggleBounce() {
  if (marker.getAnimation() !== null) {
    marker.setAnimation(null);
  } else {
    marker.setAnimation(google.maps.Animation.BOUNCE);
    setTimeout(sendPosition, 3000)
  }
}

function sendPosition() {

  let lat = $("#latitude").html();
  let long = $("#longitude").html();
  console.log("lat--->", lat);
  console.log("long--->", long);
}
// function addMarker(map, event) {
//   var marker = new google.maps.Marker({
//     position: new google.maps.LatLng(event._embedded.venues[0].location.latitude, event._embedded.venues[0].location.longitude),
//     map: map
//   });
//   marker.setIcon('http://maps.google.com/mapfiles/ms/icons/red-dot.png');
//   console.log(marker);
// }

getLocation();
