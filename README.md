<!--! <div class="title"> !-->

# markdown-it-html

<!--! </div> !-->

<!--! <div class="summary"> !-->
It is a markdown-it plugin, use special html comments to render real html tag in markdown.

Run `npm run test` see the test result.

It is use for write normal markdown file but render in a complex page.

<!--! </div> !-->

<!--! <div class="apis"> !-->

## option

```js
var md = require('markdown-it')({
  // enable html
  html: true
})

md.use(require('markdown-it-html')({
  // regex of html comment, default is match
  // <!--!<div class="test">!--> then
  // extract <div class="test">.
  re: /<!--!([^]*?)!-->/g
}))
```

<!--! </div> !-->
