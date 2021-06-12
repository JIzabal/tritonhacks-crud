import { readPosts } from './readPosts.js';
import { createPost } from './createPost.js';

function init() {

    const okBtn = document.querySelector('button');
    okBtn.addEventListener('click', createPost);
    
    readPosts();
}

window.addEventListener('DOMContentLoaded', init);