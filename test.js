var fs = require('fs')

var md = require('markdown-it')({
  html: true
})
var mdHtmlPlugin = require('./index.js')

md.use(mdHtmlPlugin)

var testMdFile = './README.md'

var testMdCtn = fs.readFileSync(testMdFile).toString()
var testResult = md.render(testMdCtn)

console.log(testResult)
