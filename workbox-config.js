module.exports = {
	globDirectory: 'sounds/',
	globPatterns: [
		'**/*.{mp3,html,png,css,js,svg,gif}'
	],
	swDest: 'sw/servicew.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};