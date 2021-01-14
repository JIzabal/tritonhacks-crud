const cancel = document.querySelector('reset');
// Sets the dialog to open
document.querySelector('dialog').showModal();

const cancelBtn = document.querySelector('#reset');
cancelBtn.addEventListener("click", reset);

function reset(event) {
    // Closes the dialog
    document.querySelector('dialog').close();
}

