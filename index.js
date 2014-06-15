// Compute the url that was used to initiate the request from the request object

var url = require('url')

module.exports = requestUrl

function requestUrl(req) {
  var reqUrlParts = url.parse(req.url)
  reqUrlParts.protocol = req.connection.encrypted ? 'https' : 'http'
  reqUrlParts.host = req.headers.host
  return url.format(reqUrlParts)
}

var runExamples = !module.parent
if (runExamples) {
  console.log(requestUrl({
    url: '/foo'
  , connection: { encrypted: true }
  , headers: { host: 'example.com' }
  }))
}
