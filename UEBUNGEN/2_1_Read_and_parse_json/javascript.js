function loadBlogposts() {
    //ToDo: Read the Blogposts from the JSON-Placeholder-API
    //Use an AJAX-GET call with the following URL: http://jsonplaceholder.typicode.com/posts
    //you can loop through the posts and show them in the html
}

$(document).ready(function () { //adds event-listener on button
    $(".js-load-blogposts").on("click", function () {
        loadBlogposts();
    });
});