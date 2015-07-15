module.exports = function(total, callback) {
	var ready = 0;
	return function(err) {
		if(err && err instanceof Error)
			throw err;
		ready++;
		if(ready === total)
			callback();
	};
};