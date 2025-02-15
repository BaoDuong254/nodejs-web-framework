const path = require("path");
const App = require("./core/app");
const parser = require("./core/parser");
const serveStatic = require("./core/static");
const app = new App();

app.setErrorHandler((err, req, res) => {
	res.statusCode = err.status || 500;
	res.end(JSON.stringify({ error: err.message || "Internal Server Error" }));
});

app.use(parser);

app.use(serveStatic(path.join(__dirname, "..", "public")));

app.get("/error", (req, res) => {
    const error = new Error("An error occurred");
    error.status = 404;
    throw error;
});

app.get("/News", (req, res) => {
	res.end("News page");
});

app.post("/data", (req, res) => {
	console.log(req.body);
	res.json(req.body);
});

app.listen(3000, () => {
	console.log("Server running on http://localhost:3000");
});
