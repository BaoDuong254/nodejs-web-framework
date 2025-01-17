const App = require("./app/app")

const app = new App()

app.get("/", (req, res) => {
    res.end("Hello World")
})

app.listen(3000, () => {
	console.log("Server running at http://localhost:3000/")
})
