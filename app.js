const path = require('path')
const testConfigs = require(path.join(__dirname, 'testConfigs.json'))
const testsLookup = require(path.join(__dirname, 'testsLookup.json'))
const axios = require('axios')
const cheerio = require('cheerio')
const chai = require('chai')
const constants = require(path.join(__dirname, 'constants.js'))

let tools = {
	assert: chai.assert,
	constants,
	$: {}
}


describe('Test the whole page for...', function(){
	testConfigs.pages.forEach(function(page){
		
		let skipping

		before(function(done){
			axios.get(encodeURI(page)).then(function(res){
				tools.$ = cheerio.load(res.data)
				done()
			}).catch(function(){
				skipping = true
				console.log('error ', err)
				done(err)
			})
		})

		beforeEach(function () {
			if (skipping) this.skip()
			skipping = false
		})

		describe(`General Page Check ${page}`, function () {
			testConfigs.tests.forEach(test => {
				describe(`Test name ${test}.js`, function () {
					it(`${testsLookup[test].it}`, async function () {
						await require(`./test/${test}.js`)(tools)
					})
				})
			})
		})
	});
})