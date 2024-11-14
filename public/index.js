document.getElementById('applicationForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get form data
    const formData = new FormData(this);
    const data = Object.fromEntries(formData.entries());

    // Send form data to server-side endpoint
    fetch('/submit', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
    .then(response => response.json())
    .then(result => {
        console.log('Success:', result);
        document.body.innerHTML = '<h2>Thank you for your application!</h2>';
    })
    .catch(error => {
        console.error('Error:', error);
    });
});
