function loadStations() {
    //todo: get the user's input-value and load a list of stations using the "Public Transport API"
    //todo: you can use the following GET-URL for the AJAX-call: http://transport.opendata.ch/v1/locations?query={user-input}
}

$(document).ready(function () { //add event listener for input-element
    $("#js-stationInput").on("input", function () {
        loadStations();
    });
});