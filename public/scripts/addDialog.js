/**
 * This file is for powering all the events which affect the screen in some way
 */

/**
 * 
 * @param {*} event 
 */
function addPost(event) {
    let output = document.querySelector('#post-list');

    // object literal stores the values
    let post = {
        title: document.querySelector('#title').value,
        summary: document.querySelector('#summary').value,
        id: (new Date().getTime()).toString()
    };

    // Clear the queries
    document.querySelector('#title').value = '';
    document.querySelector('#summary').value = '';

    output.insertAdjacentHTML('beforeend', createPostObject(post));

    save(post);
}

function save(post) {
    let allPosts = JSON.parse(localStorage.getItem('data'));

    allPosts = allPosts !== null ? allPosts : [];

    allPosts.push(post);

    localStorage.setItem('data', JSON.stringify(allPosts));
}

function createPostObject(post) {
    let postOut = 
        `<article id=\"${post.id}\">
            <h2>${post.title}</h2>
            <p>${post.summary}</p>
            <br>
            <button onclick=\"editPostArticle(this)\"><i class="fas fa-edit"></i> Edit</button>
            <button onclick=\"deletePostArticle(this)\"><i class="fas fa-trash"></i> Delete</button>
        </article>`;
        // need to escape characters
    return postOut;
}

export { addPost, createPostObject};