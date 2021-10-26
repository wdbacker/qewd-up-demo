module.exports = function(messageObj, session, send, finished) {
  // this handler picks up incoming text for testing purposes
  let incomingText = messageObj.params.text || ""
  let d = new Date()
  // return the response to the client using WebSockets (or Ajax mode)
  finished({
    text: 'You sent: "' + incomingText + '" to QEWD-Up at ' + d.toUTCString()
  })
}
