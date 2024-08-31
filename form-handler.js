document.getElementById('applicationForm').addEventListener('submit', function(event) {
    event.preventDefault(); 

    // Get form data
    const formData = new FormData(this);
    
    // Convert form data to an object
    const data = Object.fromEntries(formData.entries());

    // Display the form data in the console
    console.log(data);

    // Send form data to a server-side script
    fetch('your-server-endpoint', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
    .then(response => response.json())
    .then(result => {
        console.log('Success:', result);
        // Redirect or show a success message here
    })
    .catch(error => {
        console.error('Error:', error);
    });

    // Display a thank you message (or redirect to another page)
    document.body.innerHTML = '<h2>Thank you for your application!</h2>';
});
