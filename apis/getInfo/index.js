module.exports = function(args, finished) {
	finished({
		info: {
			server: 'QEWD-Up Native microservice',
			arch: process.arch,
			platform: process.platform,
			versions: process.versions,
			memory: process.memoryUsage(),
		}
	});
};
