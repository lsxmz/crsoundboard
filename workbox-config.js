module.exports = {
	globDirectory: '.',
	globPatterns: [
		'**/*.{html,svg,gif,png,js,json,mp3,css}'
	],
	swDest: 'sw/servicew.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};