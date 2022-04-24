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

        //ToDo: Create a Button "show comments" and add an event-listener that loads the comments for a single blog-post on click.
        //ToDo: You can get all the comments for a blog-post using this GET-url:  http://jsonplaceholder.typicode.com/comments?postId={blogpost-id}

        //ToDo: Hint - you can use this container with a dynamic id to show the comments
        //the following container will be used to display the comments for a blog-post:
        var commentContainer = $('<div></div>', {
            id: 'commentContainer' + blogPost.id
        });

        //ToDo: Don't forget to add the "show comments"-Button here
        blogContentContainer.append(newBlogPostTitle, newBlogPostContent, commentContainer, '<hr/>');
    });
}

$(document).ready(function () { //add event-listener on button
    $(".js-load-blogposts").on("click", function () {
        loadBlogposts();
    });
});