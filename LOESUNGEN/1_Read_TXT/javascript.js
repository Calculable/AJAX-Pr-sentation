function loadDocument() {
    $("#js-content").load("https://pastebin.com/raw/RZyyA7nt");
}

$(document).ready(function () {
    $(".js-get-content-button").on("click", function () {
        loadDocument();
    });
});