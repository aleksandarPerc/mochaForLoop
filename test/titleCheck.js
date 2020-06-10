module.exports = (tools) => {

	const title = tools.$('title').text()
	
	tools.assert.exists(title, 'Should have title')
	tools.assert.isAbove(title.length, tools.constants.TITLE_MIN_CHAR, `Should have at least ${tools.constants.TITLE_MIN_CHAR} chars`)
	tools.assert.isBelow(title.length, tools.constants.TITLE_MAX_CHAR, `Should have at most ${tools.constants.TITLE_MAX_CHAR} chars`)
}