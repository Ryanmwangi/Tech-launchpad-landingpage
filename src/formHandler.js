import fetch from 'node-fetch';

// Function to handle form submission and interact with Listmonk
export async function submitToListmonk(req, res) {
    const { name, email, message } = req.body;

    
    const listmonkUrl = process.env.LISTMONK_URL;
    const listmonkUsername = process.env.LISTMONK_USERNAME;
    const listmonkPassword = process.env.LISTMONK_PASSWORD;
    
    // Encode username and password as base64
    const auth = Buffer.from(`${listmonkUsername}:${listmonkPassword}`).toString('base64');

    const listId = parseInt(process.env.LIST_ID, 10);
    
    console.log(`Sending request to Listmonk with URL: ${listmonkUrl}`);

    const payload = {
        email,
        name,
        lists: [listId],
        fields: { message }
    };

    console.log('Sending request to Listmonk with payload:', payload);

    try {
        const response = await fetch(listmonkUrl, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Basic ${auth}`
            },
            body: JSON.stringify(payload)
          })

        if (!response.ok) {
            const errorBody = await response.text(); // Get the response body as text
            throw new Error(`Listmonk API error: ${response.statusText}. Response body: ${errorBody}`);
        }

        const result = await response.json();
        res.status(200).json({ message: 'Subscription successful!', result });
    } catch (error) {
        console.error('Error submitting to Listmonk:', error);
        res.status(500).json({ message: 'Failed to submit to Listmonk', error: error.message });
    }
}
