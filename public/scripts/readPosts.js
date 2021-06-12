import { createPostHTML } from './createPost.js';

/**
 * Display posts saved in local storage
 */
function readPosts() {

    let allPosts = JSON.parse(localStorage.getItem('data'));
    
    if (allPosts === null) {
        allPosts = [];
    }

    let postList = document.querySelector('#post-list');
    for (const post of allPosts) {
        postList.insertAdjacentHTML('beforeend', createPostHTML(post));
    }

}

export { readPosts };