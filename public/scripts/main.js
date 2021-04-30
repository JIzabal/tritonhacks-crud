import { addPost, createPostObject } from './addDialog.js';

function init() {

    // Ok button confirms addition of post
    const okBtn = document.querySelector("#ok");
    okBtn.addEventListener("click", addPost);
    
    display();
}

function display() {
    let allPosts = JSON.parse(localStorage.getItem('data'));
    allPosts = allPosts !== null ? allPosts : [];
    for (const post of allPosts) {
        let output = document.querySelector('#post-list');
        output.insertAdjacentHTML('beforeend', createPostObject(post));
    }
}

window.addEventListener('DOMContentLoaded', init);