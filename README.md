# Node.js Express API Project

This project is a simple Node.js application using Express to demonstrate the creation of two API endpoints: `/login` and `/users`. The `/login` endpoint returns a hardcoded username and password, and the `/users` endpoint returns an array of user objects stored in a JSON file. This project is intended to be used as a learning tool for creating basic APIs with Express.js.

## Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js installed on your machine (preferably the latest LTS version). You can download it from [nodejs.org](https://nodejs.org/).
- Basic knowledge of JavaScript and Node.js.

## Installing and Running the Project

To install and run this project, follow these steps:

1. **Clone the repository** to your local machine (or you can download the project files directly).

    ```bash
    git clone https://yourprojectrepository.com/path/to/nodejs-api-project.git
    cd nodejs-api-project
    ```

2. **Install the necessary dependencies** by running the following command in your project directory:

    ```bash
    npm install
    ```

3. **Set up your environment variables** by creating a `.env` file in the root of your project directory. Add the following lines to the file:

    ```plaintext
    USERNAME=admin
    PASSWORD=secret
    ```

    Replace `admin` and `secret` with your desired credentials.

4. **Start the server** by running:

    ```bash
    node app.js
    ```

    Your API is now running and accessible at `http://localhost:3000`.

## Using the API

You can test the API endpoints using Postman or any similar API testing tool:

- **Login Endpoint**: `GET /login`
    - Returns the username and password as set in the `.env` file.

- **Users Endpoint**: `GET /users`
    - Returns an array of user objects from the `users.json` file.
