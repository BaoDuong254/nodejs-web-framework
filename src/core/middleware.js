const requestParser = require("./request");
const responseResult = require("./response");

module.exports = async (req, res, next) => {
	await requestParser(req);
	responseResult(res);
	next();
};
