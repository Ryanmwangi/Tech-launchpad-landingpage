# Progodyssey Traineeship Program

Welcome to the Progodyssey Traineeship Program! This project serves as the web application for managing applications to the Progodyssey Traineeship Program, where aspiring IT professionals can apply for the program, learn, and grow in the tech industry.

## Features
- **Landing Page**: Introduction to the program and resources for prospective trainees.
- **Application Form**: Users can submit their applications via a form.
- **Listmonk Integration**: Form submissions are sent to Listmonk for managing mailing lists.
- **Static File Serving**: Static files such as images, stylesheets, and scripts are served from a dedicated `public` directory.
- **Server and Route Handling**: Routes are organized into separate files to keep the application modular.

## Project Structure

```
/Progodyssey
├── /public
│   ├── index.html        # Main landing page
│   ├── styles.css       # Stylesheet for the landing page
│   ├── index.js         # JavaScript for client-side interactions
├── /src
│   ├── formHandler.js   # Handles form submission to Listmonk
│   └── routes.js        # Contains route definitions
├── .env                 # Environment variables for configuration
├── .gitignore           # Git ignore file
├── server.js            # Main server setup
├── package.json         # Node.js project configuration
├── README.md            # Project documentation

```

## Prerequisites

- **Node.js**: Make sure you have Node.js (v14 or higher) installed on your system.
- **Listmonk Account**: You need a Listmonk account to manage the mailing lists.

## Setup

### 1. Clone the repository

```bash
git clone git@forge.ftt.gmbh:ryanmwangi/progodyssey.git
```

### 2. Install Dependencies

Run the following command to install the necessary dependencies:

```bash
npm install
```

### 3. Configure Environment Variables

Create a `.env` file at the root of the project. This file will store sensitive information like your Listmonk API URL and your API key.

Example `.env` file:

```
LISTMONK_URL=https://your-listmonk-instance.com/api/subscribers
LISTMONK_USERNAME=listmonk-username
LISTMONK_PASSWORD=listmonk-password
LIST_ID=listmonk-listid
PORT=3002
```

### 4. Run the Development Server

To start the development server, run:

```bash
npm start
```

The server will be available at `http://localhost:3002`.

### 5. Testing the Form Submission

- Open the landing page in a browser (`http://localhost:3002`).
- Fill in the application form and submit.
- Check your Listmonk instance to confirm that the form submission data is received and processed.

## Routes

- **GET /**: Serves the landing page (`index.html`).
- **POST /submit**: Handles form submissions. Data from the form is sent to Listmonk via its API.

## Contributing

If you'd like to contribute to the project, follow these steps:

1. Fork the repository
2. Create a new branch (`git checkout -b feature-name`)
3. Make your changes and commit them (`git commit -am 'Add new feature'`)
4. Push to your forked repository (`git push origin feature-name`)
5. Submit a pull request