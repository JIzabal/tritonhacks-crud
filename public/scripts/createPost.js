/**
 * Creates a post and adds it to the page
 */
function createPost(event) {

    let output = document.querySelector('#post-list');

    // Object literal stores the post values
    let post = {
        title: document.querySelector('#title').value,
        summary: document.querySelector('#summary').value,
        id: (new Date().getTime()).toString()
    };

    // Clear the queries
    document.querySelector('#title').value = '';
    document.querySelector('#summary').value = '';

    output.insertAdjacentHTML('beforeend', createPostHTML(post));

    savePost(post);
}

/**
 * Saves a post object to local storage
 * @param {object} post - The post contents to save
 */
function savePost(post) {
    let allPosts = JSON.parse(localStorage.getItem('data'));

    allPosts = allPosts !== null ? allPosts : [];

    allPosts.push(post);

    localStorage.setItem('data', JSON.stringify(allPosts));
}

/**
 * This is the template HTML for a blog post, and all that needs to be done
 * is filling in the id, title, and summary for a post.
 * @param {object} post - The post to translate into HTML
 * @returns {string} HTML representing the post passed in
 */
function createPostHTML(post) {

    let postOut = 
        `<article id="${post.id}">
            <h2>${post.title}</h2>
            <p>${post.summary}</p>
            <br>
            <button onclick="updatePost(this)"><i class="fas fa-edit"></i> Edit</button>
            <button onclick="deletePost(this)"><i class="fas fa-trash"></i> Delete</button>
        </article>`;

    return postOut;
}

export { createPost, createPostHTML };