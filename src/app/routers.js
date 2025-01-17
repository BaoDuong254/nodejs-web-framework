class Router {
	constructor() {
		this.routes = {
			GET: [],
			POST: [],
		}
	}

	use(path, handler) {
		this.routes["USE"] = this.routes["USE"] || []
		this.routes["USE"].push({path, handler})
	}

	get(path, handler) {
		this.routes.GET.push({path, handler})
	}

	post(path, handler) {
		this.routes.POST.push({path, handler})
	}

	match(method, url) {
		const routes = this.routes[method]
		if (!routes) return null
		for (const route of routes) {
			const {path, handler} = route
			if (path === url) return handler
		}
		return null
	}
}

module.exports = Router
