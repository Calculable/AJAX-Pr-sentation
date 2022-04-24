function loadStations() { //read station-list with AJAX
    //NOTE: We use the user's input to build the HTTP-URL:
    $.get("http://transport.opendata.ch/v1/locations?query=" + $('#js-stationInput').val(), function (pData, pStatus) {
        if (pStatus == "success") {
            showStations(pData);  //we got the station-list from the server - now we should display it
        } else {
            //error handling
        }
    });
}

function showStations(pStations) { //show the Stations-Table in the HTML
    //build the Table-HTML-Structure and add the dynamically created rows
    var stationsTable = $('<table></table>');
    var stationTableHeaderRow = $('<tr></tr>'); //create the table header and add it to the table
    stationTableHeaderRow.append($('<th></th>').text("Station"));
    stationTableHeaderRow.append($('<th></th>').text("X-Coordinate"));
    stationTableHeaderRow.append($('<th></th>').text("Y-Coordinate"));
    stationTableHeaderRow.append($('<th></th>').text("Show Departure Table"));
    stationsTable.append(stationTableHeaderRow);

    //dynamically add a header-row for each station
    pStations.stations.forEach(function (station) { //repeat for each station

        var tableRow = $('<tr></tr>');

        //todo: Add a button "show departure table".
        //todo: give the button an event listener that shows the departure table on click
        //todo: you can load the departure-table data for a single station using the following GET-URL:

        /*"http://transport.opendata.ch/v1/stationboard?id={selected-station-id}&limit=10"*/

        tableRow.append($('<td></td>').text(station.name));
        tableRow.append($('<td></td>').text(station.coordinate.x));
        tableRow.append($('<td></td>').text(station.coordinate.y));
        //todo: don't forget to add the button to the table-row

        stationsTable.append(tableRow); //add new table row to table
    });

    $('#js-stations').html(stationsTable); //show the created table in HTML
}

$(document).ready(function () { //add event listener for input-element
    $("#js-stationInput").on("input", function () {
        loadStations();
    });
});