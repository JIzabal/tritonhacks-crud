import { createPost } from './createPost.js';
import { readPost } from './readPost.js';

function init() {

    // Ok button confirms addition of post
    const okBtn = document.querySelector("#ok");
    okBtn.addEventListener("click", createPost);
    
    readPost();
}

window.addEventListener('DOMContentLoaded', init);