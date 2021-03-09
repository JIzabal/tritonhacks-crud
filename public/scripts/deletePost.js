// Delete
function deletePostArticle(event) {
    let post = {
        // select the child
        title: event.parentNode.querySelector('h2').value,
        summary: event.parentNode.querySelector('p').value,
        id: event.parentNode.id
    };

    deletePostStorage(post);

    event.parentNode.remove();
}

// Deletes from local storage
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

