const http = require("http");
const Router = require("./router");

class App {
	constructor() {
		this.router = new Router();
		this.middlewares = [];
		this.errorHandler = (err, req, res) => {
			res.statusCode = err.status || 500;
			res.end(err.message || "Internal Server Error");
		};
	}

	use(middleware) {
		this.middlewares.push(middleware);
	}

	setErrorHandler(handler) {
		this.errorHandler = handler;
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
			const next = (err) => {
				if (err) return this.errorHandler(err, req, res);
				if (i < this.middlewares.length) {
					try {
						return this.middlewares[i++](req, res, next);
					} catch (error) {
						return this.errorHandler(error, req, res);
					}
				}
				try {
					this.router.handle(req, res, next);
				} catch (error) {
					this.errorHandler(error, req, res);
				}
			};
			next();
		});
		server.listen(port, callback);
	}
}

module.exports = App;
