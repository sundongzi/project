var xss = require('xss');
var html = xss('<script>alert("xss");</script>', {
  onTag(tag, html, options) {
    console.log('html22', html)
    return xss.escapeHtml(html)
  }
})
console.log('html', html)
