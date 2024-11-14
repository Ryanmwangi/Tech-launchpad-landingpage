import fetch from 'node-fetch';

// Function to handle form submission and interact with Listmonk
export async function submitToListmonk(req, res) {
    const { name, email, message } = req.body;

    const listmonkUrl = process.env.LISTMONK_URL;
    const apiKey = process.env.API_KEY;

    const payload = {
        email,
        name,
        lists: [process.env.LIST_ID],
        fields: { message }
    };

    try {
        const response = await fetch(listmonkUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${apiKey}`
            },
            body: JSON.stringify(payload)
        });

        if (!response.ok) {
            throw new Error(`Listmonk API error: ${response.statusText}`);
        }

        const result = await response.json();
        res.status(200).json({ message: 'Subscription successful!', result });
    } catch (error) {
        console.error('Error submitting to Listmonk:', error);
        res.status(500).json({ message: 'Failed to submit to Listmonk', error: error.message });
    }
}
