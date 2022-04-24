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

        var loadDepartureTableButton = $('<button/>', {
                text: 'Show Departure Table',
                click: function () {
                    loadDepartureTable(station.id); //create button with event listener
                }
            });

        tableRow.append($('<td></td>').text(station.name));
        tableRow.append($('<td></td>').text(station.coordinate.x));
        tableRow.append($('<td></td>').text(station.coordinate.y));
        tableRow.append(loadDepartureTableButton);

        stationsTable.append(tableRow); //add new table row to table
    });

    $('#js-stations').html(stationsTable); //show the created table in HTML
}

function loadDepartureTable(pSelectedStationId) { //read departure-list for a single station with AJAX
    $.get("http://transport.opendata.ch/v1/stationboard?id=" + pSelectedStationId + "&limit=10", function (pData, pStatus) {
        if (pStatus == "success") {
            showDepartureTable(pData);  //we got the station-list from the server - now we should display it
        } else {
            //error handling
        }
    });
}

function showDepartureTable(pDepartureData) { //show the Departure-Table in the HTML
    //create html-table structure and add rows
    var departureTable = $('<table></table>');
    var departureTableHeaderRow = $('<tr></tr>'); //create the table header and add it to the table
    departureTableHeaderRow.append($('<th></th>').text("Departure"));
    departureTableHeaderRow.append($('<th></th>').text("Name"));
    departureTableHeaderRow.append($('<th></th>').text("Platform"));
    departureTableHeaderRow.append($('<th></th>').text("To"));
    departureTable.append(departureTableHeaderRow);

    //dynamically add a table-row for each departure
    pDepartureData.stationboard.forEach(function (departure) { //repeat for each station
        var departureTableRow = $('<tr></tr>');
        departureTableRow.append($('<td></td>').text(departure.stop.departure));
        departureTableRow.append($('<td></td>').text(departure.name));
        departureTableRow.append($('<td></td>').text(departure.stop.platform));
        departureTableRow.append($('<td></td>').text(departure.to));

        departureTable.append(departureTableRow); //add new table row to the table
    });

    $('#js-departureTableContainer').html(departureTable); //insert html-table in DOM
}

$(document).ready(function () { //add event listener for input-element
    $("#js-stationInput").on("input", function () {
        loadStations();
    });
});