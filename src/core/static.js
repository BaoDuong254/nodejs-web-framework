const fs = require("fs");
const path = require("path");

function serveStatic(rootDir) {
	return (req, res, next) => {
		if (req.url === "/") {
			req.url = "/index.html";
		}
		const filePath = path.join(rootDir, req.url);
		fs.stat(filePath, (err, stats) => {
			if (err || !stats.isFile()) {
				return next();
			}
			fs.createReadStream(filePath).pipe(res);
		});
	};
}

module.exports = serveStatic;
