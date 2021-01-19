/**
 * This file is for powering all the events which affect the screen in some way
 */

// Add button opens dialog box
const addBtn = document.querySelector('#add');
addBtn.addEventListener("click", add);
function add(event) {
    // Sets the dialog to open
    document.querySelector('dialog').showModal();
}

// Cancel button closes dialog box
const cancelBtn = document.querySelector('#reset');
cancelBtn.addEventListener("click", reset);

function reset(event) {
    // Closes the dialog
    document.querySelector('dialog').close();
}

