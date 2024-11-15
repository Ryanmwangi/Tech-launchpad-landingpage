import express from 'express';
import dotenv from 'dotenv';
import path from 'path'; // Import the path module
import routes from './src/routes.js'; // Import routes from routes.js

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3002;

app.use(express.json());

app.use(express.static(path.join(process.cwd(), 'public')));

app.use('/', routes);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
