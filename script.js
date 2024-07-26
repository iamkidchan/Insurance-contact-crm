document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    var formData = new FormData(this);
    var jsonData = {};
    formData.forEach((value, key) => {jsonData[key] = value});
    
    // https://script.google.com/macros/s/AKfycbzBqyi0JZlveP6LT84qgemZre4BMKjUnOhM5UBHlEI3vdvV7Mk4Kudubo0h9V9Ucg0/exec
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
