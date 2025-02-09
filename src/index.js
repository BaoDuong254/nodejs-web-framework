const App = require("./core/app");
const middleware = require("./core/middleware");

const app = new App();

app.use(middleware);

app.get("/", (req, res) => {
	res.end("Hello World");
});

app.post("/data", (req, res) => {
	res.json({ received: req.body });
});

app.listen(3000, () => {
	console.log("Server running on http://localhost:3000");
});
