import {showAddDialog, closeAddDialog, confirmAddDialog, createPostObject} from './addDialog.js';

function init() {

    // Add button opens dialog box
    const addBtn = document.querySelector('#add');
    addBtn.addEventListener("click", showAddDialog);

    // Cancel button closes add dialog box
    const cancelBtn = document.querySelector('#reset');
    cancelBtn.addEventListener("click", closeAddDialog);

    // Ok button confirms addition of post
    const okBtn = document.querySelector("#ok");
    okBtn.addEventListener("click", confirmAddDialog);
    
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