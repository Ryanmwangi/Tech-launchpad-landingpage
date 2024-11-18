document.getElementById('applicationForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get form data
    const formData = new FormData(this);
    const data = Object.fromEntries(formData.entries());

    // Clear previous messages
    const responseMessage = document.getElementById('responseMessage');
    responseMessage.textContent = '';
    responseMessage.className = '';

    // Send form data to server-side endpoint
    fetch('/submit', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
    .then(response => {
        if (!response.ok) {
            // If the response status is not OK, throw an error
            return response.json().then(err => {
                throw new Error(err.message || 'An error occurred');
            });
        }
        return response.json();
    })
    .then(result => {
        console.log('Success:', result);
        const formContainer = document.getElementById('applicationForm');
        formContainer.innerHTML = '<h2>Thank you for your application!</h2>';
    })
    .catch(error => {
        console.error('Error:', error);
        responseMessage.textContent = `Error: ${error.message}`;
        responseMessage.className = 'error';
    });
});
