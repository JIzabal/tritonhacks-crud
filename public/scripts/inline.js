// Delete
function deletePost(event) {
    console.log(event);
    event.parentNode.remove();
    let post = {
        // select the child
        title: event.parentNode.querySelector('#title').value,
        summary: event.parentNode.querySelector('#summary').value,
        id: new Date().getUTCMilliseconds()
    };
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