const querystring = require("querystring");
module.exports = (req) => {
	return new Promise((resolve) => {
		let body = "";
		req.on("data", (chunk) => {
			body += chunk.toString();
		});
		req.on("end", () => {
			const contentType = req.headers["content-type"];
            if (contentType && contentType.includes("application/x-www-form-urlencoded")) {
                req.body = querystring.parse(body); 
            } else if (contentType && contentType.includes("application/json")) {
                try {
                    req.body = JSON.parse(body); 
                } catch (error) {
                    req.body = {};
                }
            } else {
                req.body = body; 
            }
            resolve();
		});
	});
};
