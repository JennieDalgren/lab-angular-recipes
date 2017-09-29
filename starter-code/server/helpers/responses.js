module.exports = {

  unexpectedError(req, res, err) {
    console.log(req.method, req.path, err);
    res.status(500).json({err: err.message});
  },

  invalidRequest(req, res, msg) {
    msg = msg || 'invalid request';
    res.status(400).json({err: msg});
  }

}
