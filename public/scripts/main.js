import { readPosts } from './readPosts.js';
import { createPost } from './createPost.js';

function init() {

    // Ok button confirms addition of post
    const okBtn = document.querySelector("#ok");
    okBtn.addEventListener("click", createPost);
    
    readPosts();
}

window.addEventListener('DOMContentLoaded', init);