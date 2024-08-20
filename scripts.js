// scripts.js

document.addEventListener('DOMContentLoaded', function() {
    const uploadForm = document.getElementById('uploadForm');
    
    if (uploadForm) {
        uploadForm.addEventListener('submit', function(event) {
            event.preventDefault();
            // Store the text input in localStorage (or you can handle data differently)
            const textInput = document.getElementById('textInput').value;
            localStorage.setItem('uploadedText', textInput);
            // Redirect to the processing page
            window.location.href = 'processing.html';
        });
    }
});
