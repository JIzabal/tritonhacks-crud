/**
 * Edits a post on the page
 */
function updatePost(event) {
    
    event.parentNode.children[0].classList.toggle('editable');
    event.parentNode.children[0].toggleAttribute('contenteditable');

    event.parentNode.children[1].classList.toggle('editable');
    event.parentNode.children[1].toggleAttribute('contenteditable');

    if (!event.parentNode.children[0].isContentEditable) {

        // Push to local storage
        let post = {
            title: event.parentNode.querySelector('h2').textContent,
            summary: event.parentNode.querySelector('P').textContent,
            id: event.parentNode.id
        };

        updatePostStorage(post);
    }
}

/**
 * Edits a post object in local storage
 * @param {object} post - The post to edit
 */
function updatePostStorage(post) {

    let allPosts = JSON.parse(localStorage.getItem('data'));
    allPosts = allPosts !== null ? allPosts : [];

    for (i = 0; i < allPosts.length; i++) {

        if (post.id === allPosts[i].id) {
            
            // Update post values
            allPosts[i].title = post.title;
            allPosts[i].summary = post.summary;
            break;
        }
    }

    localStorage.setItem('data', JSON.stringify(allPosts));
}
