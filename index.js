// Compute the url that was used to initiate the request from the request object

var url = require('url')
var reSplitProto = /\s*,\s*/

module.exports = requestUrl

function requestUrl(req, path) {
  var reqUrlParts = url.parse(arguments.length === 1 ? req.url : path)
  var proto = (req.headers['x-forwarded-proto'] || '').toLowerCase()
  reqUrlParts.protocol = (req.connection.encrypted || proto.split(reSplitProto)[0] === 'https') ? 'https' : 'http'
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
