const url = require('url');

class Router {
    constructor() {
        this.routes = {};
    }

    addRoute(method, path, handler) {
        if (!this.routes[method]) {
            this.routes[method] = {};
        }
        this.routes[method][path] = handler;
    }

    handle(req, res) {
        const { pathname } = new URL(req.url, `http://${req.headers.host}`);
        const method = req.method;

        if (this.routes[method] && this.routes[method][pathname]) {
            return this.routes[method][pathname](req, res);
        }

        res.statusCode = 404;
        res.end('Not Found');
    }
}

module.exports = Router;
