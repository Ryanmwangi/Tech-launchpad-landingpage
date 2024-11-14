import express from 'express';
import { submitToListmonk } from './formHandler.js';

const router = express.Router();

// Define route for the root path
router.get('/', (req, res) => {
    res.sendFile('index.html', { root: './public' });
});

// Define route for form submission
router.post('/submit', submitToListmonk);

export default router;
