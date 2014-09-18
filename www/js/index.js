function changeText(elem, changeVal) {
     if ((elem.textContent) && (typeof (elem.textContent) != "undefined")) {
          elem.textContent = changeVal;
     } else {
          elem.innerText = changeVal;
     }
}

function onSuccess(position) {
     var elem = document.getElementById('Latitude');
     changeText(elem, position.coords.latitude);
     elem = document.getElementById('Longitude');
     changeText(elem, position.coords.longitude);
     elem = document.getElementById('Altitude');
     changeText(elem, position.coords.altitude);
     elem = document.getElementById('Accuracy');
     changeText(elem, position.coords.accuracy);
     elem = document.getElementById('AltitudeAccuracy');
     changeText(elem, position.coords.altitudeAccuracy);
     elem = document.getElementById('Heading');
     changeText(elem, position.coords.heading);
     elem = document.getElementById('Speed');
     changeText(elem, position.coords.speed);
     elem = document.getElementById('Timestamp');
     changeText(elem, position.timestamp);
}

// onError Callback receives a PositionError object
//
function onError(error) {
     alert('code: ' + error.code + '\n' +
          'message: ' + error.message + '\n');
}

var app = {
     // Application Constructor
     initialize: function() {
          this.bindEvents();
     },
     // Bind Event Listeners
     //
     // Bind any events that are required on startup. Common events are:
     // 'load', 'deviceready', 'offline', and 'online'.
     bindEvents: function() {
          document.addEventListener('deviceready', this.onDeviceReady, false);
     },
     // deviceready Event Handler
     //
     // The scope of 'this' is the event. In order to call the 'receivedEvent'
     // function, we must explicitly call 'app.receivedEvent(...);'
     onDeviceReady: function() {
          app.receivedEvent('deviceready');
     },
     // Update DOM on a Received Event
     receivedEvent: function(id) {
          var Element = document.getElementById('AppText');
          changeText(Element, 'Started');

          navigator.geolocation.getCurrentPosition(onSuccess, onError, { maximumAge: 3000, timeout: 5000, enableHighAccuracy: true });
     }
};