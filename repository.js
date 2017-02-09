var httpService = require('./httpService');
var repository = (function(){
	var root = "/";
	return {
		getData: {
			method: 'post',
			async: true,
			url: root + '/getData',
			params: {},
			header: {
				'Content-Type': 'application/x-www-form-urlencoded'
			}
		}
	}
})();
repository.httpService = httpService;

module.exports = repository;
