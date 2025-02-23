module.exports = (res) => {
	res.json = (data) => {
		res.setHeader("Content-Type", "application/json");
		res.end(JSON.stringify(data));
	};
};
