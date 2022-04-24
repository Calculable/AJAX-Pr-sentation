function loadAirquality() { //Read air-quality-data with AJAX
    //toDo: Read the AirQuality-Data for a city using the country-input from the user
    //toDo: you can use this GET-API: https://api.openaq.org/v1/cities?country={country-user-input}
}

$(document).ready(function () { //add event-listener on button
    $("#js-load-airquality").on("click", function () {
        loadAirquality();
    });
});