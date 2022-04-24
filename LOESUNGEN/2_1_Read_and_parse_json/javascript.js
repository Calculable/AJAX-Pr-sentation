function loadBlogposts() { //Read blogposts with AJAX
    $.get("http://jsonplaceholder.typicode.com/posts", function (pData, pStatus) {
        if (pStatus == "success") {
            showBlogposts(pData); //we got the blogposts as JSON-object and can now render it
        } else {
            //error handling
        }
    });
}

function showBlogposts(pBlogPostsJSON) { //show blogposts HTML

    var blogContentContainer = $("#js-content");
    blogContentContainer.empty();

    pBlogPostsJSON.forEach(function (blogPost) { //repeat for each blogpost

        //create the HTML-Elements to add
        var newBlogPostTitle = $("<h2></h2>").text(blogPost.title);
        var newBlogPostContent = $("<p></p>").text(blogPost.body);

        //the following container will later be used to display the comments for a blog-post:
        var commentContainer = $('<div></div>', {
            id: 'commentContainer' + blogPost.id
        });

        //append the blogposts to the HTML-DOM
        blogContentContainer.append(newBlogPostTitle, newBlogPostContent, commentContainer, '<hr/>');
    });
}

$(document).ready(function () { //add event-listener on button
    $(".js-load-blogposts").on("click", function () {
        loadBlogposts();
    });
});