var _tempDataGlobal = 'CacheTempEWDData';

module.exports = function(application) {
  console.log('### onLoad called ###')

  if (!this.tempDataGlobal) {
    this.tempDataGlobal = function() {
      return _tempDataGlobal;
    }
  }

  if (!this.dbxFunction) {
    function _dbxFunction(iscFunction, params, session) {
      var temp = new this.documentStore.DocumentNode(_tempDataGlobal, [process.pid]);
      var sessid = (session ? session.id : '');

      temp.delete();
      temp.setDocument({
        params : params
      });
      var error = this.documentStore.db.dbx.function(iscFunction, sessid) || '';
      var errorObj;
      // decode error string using template literal syntax
      if (error.startsWith('${') && error.endsWith('}')) {
        try {
          errorObj = JSON.parse(error.substring(1));
        }
        catch (err) {
          errorObj = {
            error: `JSON parse error in error string: ${error}`
          }
        }
      }
      var document = temp.getDocument(true);
      var jsonResponse = {
        ok : ((error === '') ? true : false),
        json : document.json || document.results || {},
        error,
        errorObj,
        errors: document.errors || null,
        warnings: document.warnings || null
      };
      return jsonResponse;
    }
    // preserve QEWD worker process object as 'this' context inside function
    this.dbxFunction = _dbxFunction.bind(this)
  }
}