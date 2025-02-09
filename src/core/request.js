module.exports = (req) => {
	return new Promise((resolve) => {
		let body = "";
		req.on("data", (chunk) => {
			body += chunk.toString();
		});
		req.on("end", () => {
			req.body = body ? JSON.parse(body) : {};
			resolve();
		});
	});
};
