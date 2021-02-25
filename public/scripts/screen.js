/**
 * This file is for powering all the events which affect the screen in some way
 */

import { save } from './storage.js';


function add(event) {

    // Sets the dialog to open
    document.querySelector('dialog').showModal();
}


function reset(event) {

    // Closes the dialog
    document.querySelector('dialog').close();
}


// Ok button closes dialog and saves values
// saves into JS object literal and save this to an array of posts
// display that post on a page
// use queryselector to get input elements (google this)
/// TODO: change quotes to single quotes
function ok(event) {

    let output = document.querySelector('#post-list');

    // object literal stores the values
    let post = {
        title: document.querySelector('#title').value,
        summary: document.querySelector('#summary').value,
        id: (new Date().getUTCMilliseconds()).toString()
    };
    // Close the dialog box
    reset();

    // Clear the queries
    document.querySelector('#title').value = '';
    document.querySelector('#summary').value = '';

    let postOut = 
        `<div id=\"${post.id}\">
            <h2>${post.title}</h2>
            <p>${post.summary}</p>
            <br>
            <button onclick=\"test()\">TEST</button>
            <button onclick=\"editPost(this)\"><i class="fas fa-edit"></i> Edit</button>
            <button onclick=\"deletePostDiv(this)\"><i class="fas fa-trash"></i> Delete</button>
        </div>`;
        // need to escape characters

    // output.appendChild(postOut);
    output.insertAdjacentHTML('beforeend', postOut);

    save(post);
}


// // Button functionality for edit post with window (DEPRECATED)
// const cancelEditBtn = document.querySelector('#reset-edit');
// // Anonymous function used here
// cancelEditBtn.addEventListener("click", () => document.querySelector('#dialog-edit').close());

// const okEditBtn = document.querySelector('#ok-edit');
// okEditBtn.addEventListener("click", okEdit);


export { add, reset, ok };