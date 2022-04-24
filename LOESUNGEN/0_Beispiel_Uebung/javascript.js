function loadAirquality() { //Read air-quality-data with AJAX

    var userInput = $(".js-country-input").val();

    $.get("https://api.openaq.org/v1/cities?country=" + userInput, function (pData, pStatus) {
        if (pStatus == "success") {
            showAirquality(pData); //we got the blogposts as JSON-object and can now render it
        } else {
            //error handling
        }
    });
}

function showAirquality(pAirQualityJSON) { //show air-quality HTML

    var airQualityContainer = $("#js-content");
    airQualityContainer.empty(); //clear the content container

    pAirQualityJSON.results.forEach(function (city) { //repeat for each city

        //create the HTML-Elements to add
        var cityName = $("<span><strong></strong></span>").text(city.city + ': ');
        var airQualityCount = $("<span></span>").text(city.count);

        //append the city to the HTML-DOM
        airQualityContainer.append(cityName, airQualityCount, '<hr/>');
    });
}

$(document).ready(function () { //add event-listener on button
    $("#js-load-airquality").on("click", function () {
        loadAirquality();
    });
});