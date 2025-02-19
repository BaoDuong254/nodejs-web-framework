# NodeJS web framework

Building a lightweight Node.js web framework like Express.

## Installation

Install the required dependencies listed in `package.json`:

```bash
npm install
```

## Running the server

Start the server with the following command:

```bash
npm start
```

The server will run on `http://localhost:3000`

## Report

### Week 1

- Completed `App` class and basic router.
- Successfully hosted the server.

### Week 2

- Implement `Middleware` function.
- Implement Static File Serving.

### Week 3

- Refactor `request` parsing.
- Set up static file serving.
- Get the data when submit the form.
- Use Postman to test.
- Configured error handling.
- Implement query params.

### API Routes

| Method | Route        | Description               |
|--------|-------------|---------------------------|
| GET    | `/error`         | Returns a JSON response error      |
| GET    | `/query?name=John`    | Returns a JSON response with a query params   |