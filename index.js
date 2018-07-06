module.exports = function (md, option) {
  var cfg = {
    re: /<!--!([^]*?)!-->/g
  }
  option = option || {}
  cfg.re = option.re || cfg.re

  md.renderer.rules.html_block = function (tokens, idx) {
    var token = tokens[idx]
    return extract(token.content)
  }
  md.renderer.rules.html_inline = function (tokens, idx) {
    var token = tokens[idx]
    return extract(token.content)
  }

  function extract (str) {
    if (!cfg.re.test(str)) return str
    return str.replace(cfg.re, function (s, r) {
      return r
    })
  }
}
