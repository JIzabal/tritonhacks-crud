/**
 * Deletes a post from the page
 */
function deletePost(event) {
    console.log('test');
    let post = {
        // select the child
        title: event.parentNode.querySelector('h2').value,
        summary: event.parentNode.querySelector('p').value,
        id: event.parentNode.id
    };

    deletePostStorage(post);

    event.parentNode.remove();
}

/**
 * Deletes a post object from local storage
 * @param {object} post - The post to delete
 */
function deletePostStorage(post) {
    let allPosts = JSON.parse(localStorage.getItem('data'));
    allPosts = allPosts !== null ? allPosts : [];

    for (i = 0; i < allPosts.length; i++) {
        if (post.id === allPosts[i].id) {
            allPosts.splice(i, 1);
            break;
        }
    }
    localStorage.setItem('data', JSON.stringify(allPosts));
}

