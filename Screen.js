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

// Ok button closes dialog and saves values
// saves into JS object literal and save this to an array of posts
// display that post on a page
// use queryselector to get input elements (google this)
/// TODO: change quotes to single quotes
const okBtn = document.querySelector("#ok");
okBtn.addEventListener("click", ok);
let allPosts = [];
function ok(event) {
    let output = document.querySelector('#post-list');
    console.log(output);
    // object literal stores the values
    let post = {
        title: document.querySelector('#title').value,
        summary: document.querySelector('#summary').value
    };
    allPosts.push(post);
    console.log(post);
    console.log(allPosts);
}
