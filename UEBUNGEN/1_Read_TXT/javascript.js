function loadDocument() {
    //toDo: show the content of the following textfile:
    //https://bitbucket.org/Calculable/ajax-exercises/raw/2535e110a31b10f4f7a8a9ad157bfc02ed5e908e/Ressources/example-file.txt
}

$(document).ready(function () {
    $(".js-get-content-button").on("click", function () {
        loadDocument();
    });
});