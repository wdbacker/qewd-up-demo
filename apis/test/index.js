module.exports = function(args, finished) {
  // this handler picks up incoming text for testing purposes
  let incomingText = args.req.query.text || ""
  // create a DocumentNode reference to the ^QEWDTest global in IRIS
  let qewdDemo = new this.documentStore.DocumentNode('QEWDDemo');
  // assign the text content to the subscript 'demo' in this global
  qewdDemo.$('demo').value = incomingText
  // put the complete message JSON object inside a second level subscript
  qewdDemo.$('demo').$('request').setDocument(args.req);
  // read everything back in from IRIS into a JSON object
  let qewdDemoGlobal = qewdDemo.$('demo').getDocument(true);
  // return the response to the client using WebSockets (or Ajax mode)
  let d = new Date()
  finished({
    text: 'You sent: "' + incomingText + '" to QEWD-Up at ' + d.toUTCString(),
    qewdDemoGlobal
  })
}
