/*jQuery input lesen*/

var input = $("#inputId").val();

/*jQuery inhalt leeren*/

var container = $("#containerId");
container.empty(); //clear the content inside the container

/*JS: for-each-loop*/

array.forEach(function (arrayItem) {
    //do something with arrayItem
});

/*jQuery Event-Listener*/

$(document).ready(function () { //add event-listener on button
    $("#buttonId").on("click", function () {
        methodToCall();
    });
});

/*jQuery: Neues HTML-Element erstellen*/

var newParagraphObject = $("<p></p>").text("paragraph-text");

/*jQuery: Button mit Event-Handler dymanisch erstellen:*/

var button =
    $('<button/>',
        {
            text: 'Button Title',
            click: function () {
                alert('hi');
            }
        }
    );

$("body").append(button);

/*HTML-Append ()*/

$("body").append(button1, button2, '<hr/>');

/*AJAX GET-Aufruf ohne jQuery (Klassisch)*/

function loadCurrentWeather() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            //answer is ready and status is "ok"
            showWeatherData(this.responseText);
        }
    };
    xhttp.open("GET", "https://5dayweather.org/api.php?city=Zuerich", true);
    xhttp.send();
}

/*AJAX GET-Aufruf mit jQuery*/

function loadCurrentWeather() {
    $.get("https://5dayweather.org/api.php?city=Zuerich", function (pData, pStatus) {
        if (pStatus == "success") {
            showWeatherData(pData);
        } else {
            //error handling
        }
    });
}

/*jQuery AJAX-POST*/

//see https://www.w3schools.com/jquery/jquery_ajax_get_post.asp

$.post("http://api.todoapplication.com/toDoItems",
    {
        toDoName: "Name of ToDo-Item",
        toDoDescription: "Description of ToDo-Item"
    },
    function (data, status) {
        alert("Data: " + data + "\nStatus: " + status);
    });



/*jQuery: AJAX-LOAD*/

//loads the content of an URL directly inside a html-container
//see https://www.w3schools.com/jquery/ajax_get.asp
$("#div1").load("http://add-url-here.com");


/*jQuery Custom-AJAX-Call*/

//see https://stackoverflow.com/questions/3163229/check-status-of-a-jquery-ajax-request

var xhr = $.ajax({
    type: "GET",
    url: "http://add-an-url-here.com",
    dataType: "script",
    success: function () {
        alert("success");
    },
    error: function () {
        alert("error");
    }
});