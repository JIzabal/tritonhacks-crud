import { createPostHTML } from './createPost.js';

/**
 * Display posts saved in local storage
 */
function readPosts() {

    let allPosts = JSON.parse(localStorage.getItem('data'));
    
    if (allPosts === null) {
        allPosts = [];
    }

    let output = document.querySelector('#post-list');
    for (const post of allPosts) {
        output.insertAdjacentHTML('beforeend', createPostHTML(post));
    }

}

export { readPosts };