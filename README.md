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

## Project Structure

``` bash
└── 📁NodeJS web framework
    └── 📁public
        └── 📁assets
            └── 📁css
                └── style.css
            └── 📁favicon
                └── android-chrome-192x192.png
                └── android-chrome-512x512.png
                └── apple-touch-icon.png
                └── favicon-16x16.png
                └── favicon-32x32.png
                └── favicon.ico
                └── site.webmanifest
            └── 📁js
                └── script.js
        └── index.html
    └── 📁src
        └── 📁core
            └── app.js
            └── parser.js
            └── queryParams.js
            └── request.js
            └── response.js
            └── router.js
            └── static.js
        └── index.js
    └── .gitignore
    └── package-lock.json
    └── package.json
    └── README.md
```

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

## API Routes

| Method | Route        | Description               |
|--------|-------------|---------------------------|
| GET    | `/error`         | Returns a JSON response error      |
| GET    | `/query?name=John`    | Returns a JSON response with a query params   |
