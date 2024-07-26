document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    var formData = new FormData(this);
    var jsonData = {};
    formData.forEach((value, key) => {jsonData[key] = value});
    
    // Replace with your Google Apps Script Web App URL
    fetch('YOUR_GOOGLE_APPS_SCRIPT_WEB_APP_URL', {
        method: 'POST',
        body: JSON.stringify(jsonData)
    })
    .then(response => response.json())
    .then(data => {
        alert('Contact saved successfully!');
        this.reset();
    })
    .catch(error => {
        console.error('Error:', error);
        alert('There was an error saving the contact.');
    });
});
