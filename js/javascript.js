function addMarker() {
  var lat = parseFloat(document.getElementById('latitude').value);
  var lng = parseFloat(document.getElementById('longitude').value);
  var msg = document.getElementById('message').value;
  var enteredPlace = {lat: lat, lng: lng};

  var map = new google.maps.Map(document.getElementById('map'), {
    center: enteredPlace,
    zoom: 8 
  });

  var marker = new google.maps.Marker({
    position: enteredPlace,
    map: map,
    title: msg
  });
  
  var infowindow = new google.maps.InfoWindow({
    content: msg
  });
  
  marker.addListener('click', function() {
    infowindow.open(map, marker);
  });

}

$(document).ready(function() {
  $('#coordinates').validate({
    submitHandler: function(form) {
      // call the function to create the map
      addMarker();
      // reset the form
      form.reset();
      return false;
    },
    rules: {
      latitude: {
        required: true,
        max: 90,
        min: -90
      },
      longitude: {
        required: true,
        max: 180,
        min: -180
      },
      message: {
        required: true
      }
    },
    messages: {
      latitude: {
        required: 'Please enter a latitude...',
        max: 'The maximum value is 90',
        min: 'The minimum value is -90'
      },
      longitude: {
        required: 'Please enter a longitude...',
        max: 'The maximum value is 180',
        min: 'The minimum value is -180'
      },
      message: {
        required: 'Please enter a message...'
      }
    }
  });
});
