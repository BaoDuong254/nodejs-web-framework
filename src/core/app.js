const http = require("http");
const Router = require("./router");

class App {
	constructor() {
		this.router = new Router();
		this.middlewares = [];
	}

	use(middleware) {
		this.middlewares.push(middleware);
	}

	get(path, handler) {
		this.router.addRoute("GET", path, handler);
	}

	post(path, handler) {
		this.router.addRoute("POST", path, handler);
	}

	listen(port, callback) {
		const server = http.createServer((req, res) => {
			let i = 0;
			const next = () => {
				if (i < this.middlewares.length) {
					return this.middlewares[i++](req, res, next);
				}
				this.router.handle(req, res);
			};
			next();
		});
		server.listen(port, callback);
	}
}

module.exports = App;
