/**
 * This file handles all functions related to saving, deleting, or editing
 * dialog contents using local storage
 */

function save(post) {
    let allPosts = JSON.parse(localStorage.getItem('data'));

    allPosts = allPosts !== null ? allPosts : [];

    allPosts.push(post);

    localStorage.setItem('data', JSON.stringify(allPosts));
}

function deletePost(post) {
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

export {save, deletePost};