// Delete
function deletePostDiv(event) {
    let post = {
        // select the child
        title: event.parentNode.querySelector('h2').value,
        summary: event.parentNode.querySelector('p').value,
        id: event.parentNode.id
    };

    deletePost(post);

    event.parentNode.remove();
}

// Deletes from local storage
function deletePost(post) {
    let allPosts = JSON.parse(localStorage.getItem('data'));
    allPosts = allPosts !== null ? allPosts : [];

    for (i = 0; i < allPosts.length; i++) {
        if (post.id === allPosts[i].id) {
            allPosts.splice(i, 1);
            break;
        }
    }
    localStorage.setItem('data', JSON.stringify(allPosts));
}

// Edit
function editPost(event) {
    // Edit title
    // toggle class styling
    event.parentNode.children[0].classList.toggle('editable');
    event.parentNode.children[0].toggleAttribute('contenteditable');

    event.parentNode.children[1].classList.toggle('editable');
    event.parentNode.children[1].toggleAttribute('contenteditable');

    if (!event.parentNode.children[0].isContentEditable) {
        // Push to local storage
        let post = {
            // select the child
            title: event.parentNode.querySelector('h2').textContent,
            summary: event.parentNode.querySelector('P').textContent,
            id: event.parentNode.id
        };
        editPostStorage(post);
    }
}

function editPostStorage(post) {
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
