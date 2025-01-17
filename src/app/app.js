const http = require("http")
const Router = require("./routers")

class App {
	constructor() {
		this.router = new Router()
		this.server = http.createServer((req, res) => {
			const {url, method} = req // Get url and method from request
			const handler = this.router.match(method, url) // Check if there is a handler for the url and method
			if (handler) {
				handler(req, res)
            } else {
                res.statusCode = 404
                res.end("Not Found")
			}
		})
	}

	use(path, handler) {
		this.router.use(path, handler)
	}

	get(path, handler) {
		this.router.get(path, handler)
	}

	post(path, handler) {
		this.router.post(path, handler)
	}

	listen(port, callback) {
		this.server.listen(port, callback)
	}
}

module.exports = App
