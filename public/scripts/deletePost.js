/**
 * Deletes a post from the page
 * @param {object} deleteBtn - An object that represents the HTML button element
 */
function deletePost(deleteBtn) {

    let post = deleteBtn.parentNode;
    deletePostStorage(post.id);

    post.remove();
}

/**
 * Deletes a post object from local storage
 * @param {string} postID - The post id that refers to the post to delete
 */
function deletePostStorage(postID) {

    let allPosts = JSON.parse(localStorage.getItem('data'));
    allPosts = allPosts !== null ? allPosts : [];

    for (i = 0; i < allPosts.length; i++) {
        if (postID === allPosts[i].id) {
            allPosts.splice(i, 1);
            break;
        }
    }
    
    localStorage.setItem('data', JSON.stringify(allPosts));
}

