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
    // object literal stores the values
    let post = {
        title: document.querySelector('#title').value,
        summary: document.querySelector('#summary').value
    };
    allPosts.push(post);

    // Close the dialog box
    reset();
    // Clear the queries
    document.querySelector('#title').value = '';
    document.querySelector('#summary').value = '';

    let postOut = 
        `<div>
            <h2 contenteditable="false">${post.title}</h2>
            <p contenteditable="false">${post.summary}</p>
            <button onclick=\"editPost(this);\"><i class="fas fa-edit"></i> Edit</button>
            <button onclick=\"deletePost(this);\"><i class="fas fa-trash"></i> Delete</button>
        </div>`;
        // need to escape characters

    // output.appendChild(postOut);
    output.insertAdjacentHTML('beforeend', postOut);
}

// Delete
function deletePost(event) {
    console.log(event);
    event.parentNode.remove();
}

// Edit
function editPost(event) {
    event.parentNode.children[0].toggleAttribute('contenteditable');
    event.parentNode.children[1].toggleAttribute('contenteditable');
    // toggle class styling
    event.parentNode.children[0].classList.toggle('editable');
    event.parentNode.children[1].classList.toggle('editable');
}

// // Button functionality for edit post
// const cancelEditBtn = document.querySelector('#reset-edit');
// // Anonymous function used here
// cancelEditBtn.addEventListener("click", () => document.querySelector('#dialog-edit').close());

// const okEditBtn = document.querySelector('#ok-edit');
// okEditBtn.addEventListener("click", okEdit);

