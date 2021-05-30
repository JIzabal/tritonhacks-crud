/**
 * Edits a post on the page
 * @param {object} editBtn - An object that represents the HTML button element
 * that was clicked, which in this case is the edit button
 */
function updatePost(editBtn) {
    
    editBtn.parentNode.children[0].classList.toggle('editable');
    editBtn.parentNode.children[0].toggleAttribute('contenteditable');

    editBtn.parentNode.children[1].classList.toggle('editable');
    editBtn.parentNode.children[1].toggleAttribute('contenteditable');

    if (!editBtn.parentNode.children[0].isContentEditable) {

        // Push to local storage
        let post = {
            title: editBtn.parentNode.querySelector('h2').textContent,
            summary: editBtn.parentNode.querySelector('p').textContent,
            id: editBtn.parentNode.id
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
