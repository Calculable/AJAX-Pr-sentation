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

        //add a button with "on click" - event
        var showCommentsButton = $('<button/>',
            {
                text: 'Show comments',
                click: function () {
                    loadComments(blogPost.id);
                }
            });

        //the following container will later be used to display the comments for a blog-post:
        var commentContainer = $('<div></div>', {
            id: 'commentContainer' + blogPost.id
        });

        //append the blogposts to the HTML-DOM
        blogContentContainer.append(newBlogPostTitle, newBlogPostContent, showCommentsButton, commentContainer, '<hr/>');
    });
}

function loadComments(pPostId) { //loads the comments for a blog-post with the given id
    //Note: We use the blogpost-id to build the HTTP-URL
    $.get("http://jsonplaceholder.typicode.com/comments?postId=" + pPostId, function (pData, pStatus) {
        if (pStatus == "success") {
            //we got the comments from the server - now we should display it in HTML
            showComments(pData, pPostId)
        } else {
            //error handling
        }
    });
}

function showComments(pCommentsJSON, pPostId) {

    var commentContainer = $('#commentContainer' + pPostId);
    commentContainer.empty(); //clear the content inside the comment container

    pCommentsJSON.forEach(function (comment) { //repeat for each comment

        //create the HTML-Element
        var postComment = $("<p></p>").text(comment.email + ': ' + comment.body);

        //append the created HTLM-Element to the DOM
        commentContainer.append(postComment);
    });
}

$(document).ready(function () { //add event-listener on button
    $(".js-load-blogposts").on("click", function () {
        loadBlogposts();
    });
});