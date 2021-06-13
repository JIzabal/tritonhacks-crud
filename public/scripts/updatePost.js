/**
 * Edits a post on the page
 * @param {object} editBtn - An object that represents the HTML button element
 * that was clicked, which in this case is the edit button
 */
function updatePost(editBtn) {
    
    let post = editBtn.parentNode;
    let postTitle = post.children[0];
    let postSummary = post.children[1];

    postTitle.toggleAttribute('contenteditable');
    postSummary.toggleAttribute('contenteditable');

    postTitle.classList.toggle('editable');
    postSummary.classList.toggle('editable');

    if (!postTitle.isContentEditable && !postSummary.isContentEditable) {
        updatePostStorage(post.id, postTitle.textContent, postSummary.textContent);
    }
}

/**
 * Edits a post object in local storage
 * @param {string} postID - The post id that refers to the post to update
 * @param {string} newPostTitle - The updated post title
 * @param {string} newPostSummary - The updated post summary
 */
 function updatePostStorage(postID, newPostTitle, newPostSummary) {

    let allPosts = JSON.parse(localStorage.getItem('data'));

    for (const currPost of allPosts) {
        if (postID === currPost.id) {
            currPost.title = newPostTitle;
            currPost.summary = newPostSummary;
            break;
        }
    }

    localStorage.setItem('data', JSON.stringify(allPosts));
}
