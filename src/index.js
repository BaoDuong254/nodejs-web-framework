const path = require("path");
const App = require("./app");
const parser = require("./middleware/parser");
const serveStatic = require("./static/static");
const getQueryParams = require("./middleware/queryParams");
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

app.get("/query", (req, res) => {
	if (String(req.url).includes("?")) {
		const queryParams = getQueryParams(req.url);
		res.writeHead(200, { "Content-Type": "application/json" });
		res.end(JSON.stringify(queryParams));
	} else {
		res.end("No query parameters");
	}
});

app.post("/data", (req, res) => {
	console.log(req.body);
	res.json(req.body);
});

app.listen(3000, () => {
	console.log("Server running on http://localhost:3000");
});
