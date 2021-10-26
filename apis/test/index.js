module.exports = function(args, finished) {
  // this handler picks up incoming text for testing purposes
  let incomingText = args.req.query.text || ""
  let d = new Date()
  // return the response to the client using WebSockets (or Ajax mode)
  finished({
    text: 'You sent: "' + incomingText + '" to QEWD-Up at ' + d.toUTCString()
  })
};
