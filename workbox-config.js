module.exports = {
	globDirectory: './',
	globPatterns: [
		'**/*.{png,js,css,html}'
	],
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	],
	swDest: 'sw.js'
};