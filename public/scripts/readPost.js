import { createPostHTML } from './createPost.js';

/**
 * Display posts saved in local storage
 */
function readPost() {

    let allPosts = JSON.parse(localStorage.getItem('data'));
    allPosts = allPosts !== null ? allPosts : [];

    for (const post of allPosts) {
        let output = document.querySelector('#post-list');
        output.insertAdjacentHTML('beforeend', createPostHTML(post));
    }

}

export { readPost };