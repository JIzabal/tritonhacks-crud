import { add, reset, ok } from './screen.js';

function init() {

    // Add button opens dialog box
    const addBtn = document.querySelector('#add');
    addBtn.addEventListener("click", add);

    // Cancel button closes add dialog box
    const cancelBtn = document.querySelector('#reset');
    cancelBtn.addEventListener("click", reset);

    // Ok button confirms addition of post
    const okBtn = document.querySelector("#ok");
    okBtn.addEventListener("click", ok);

    
}

window.addEventListener('DOMContentLoaded', init);