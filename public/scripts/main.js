import { createPost } from './createPost.js';
import { readPosts } from './readPosts.js';

function init() {

    // Ok button confirms addition of post
    const okBtn = document.querySelector("#ok");
    okBtn.addEventListener("click", createPost);
    
    readPosts();
}

window.addEventListener('DOMContentLoaded', init);