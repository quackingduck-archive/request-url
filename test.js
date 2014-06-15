var assert = require('assert')
  , requestUrl = require('./')

assert.equal(
  'https://example.com/foo'
, requestUrl({
    url: '/foo'
  , connection: { encrypted: true }
  , headers: { host: 'example.com' }
  }))

console.log("OK")
