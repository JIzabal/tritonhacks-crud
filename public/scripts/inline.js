// import { deletePost } from "./storage";

// Delete
function deletePostDiv(event) {
    console.log(event.parentNode);
    console.log('ParentNode.id: ');
    console.log(event.parentNode.id);
    // find use for this
    let post = {
        // select the child
        title: event.parentNode.querySelector('h2').value,
        summary: event.parentNode.querySelector('p').value,
        id: event.parentNode.id
    };

    deletePost(post);

    event.parentNode.remove();
}


// Edit
function editPost(event) {
    // Edit title
    // toggle class styling
    event.parentNode.children[0].classList.toggle('editable');
    event.parentNode.children[0].toggleAttribute('contenteditable');

    // Edit summary
    // Get old value
    let summaryOld = event.parentNode.children[1].textContent;

     
    let newNode;
    // Swap tag types
    console.log(event.parentNode.children[1].tagName);
    if (event.parentNode.children[1].tagName == 'P') {
        newNode = document.createElement('textarea');
    } else {
        newNode = document.createElement('p');
    }

    // Ternary operator alternative to the above
    // let newNode = event.parentNode.children[1].tagName == 'P' ? document.createElement('textarea') : document.createElement('p');
   
    event.parentNode.replaceChild(newNode, event.parentNode.children[1]);
    // Add back in the old text value
    event.parentNode.children[1].textContent = summaryOld;
}

// Deletes from local storage
function deletePost(post) {
    let allPosts = JSON.parse(localStorage.getItem('data'));
    console.log(allPosts);
    allPosts = allPosts !== null ? allPosts : [];

    console.log("Pre delete");
    console.log(allPosts);

    // write a custom id for each id creation to compare

    for (i = 0; i < allPosts.length; i++) {
        if (post.id === allPosts[i].id) {
            allPosts.splice(i, 1);
            break;
        }
    }
    console.log("Post delete");
    console.log(allPosts);

    localStorage.setItem('data', JSON.stringify(allPosts));
}