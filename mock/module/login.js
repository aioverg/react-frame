module.exports = {
  'POST /api/login': (req, res) => {
    const { username,password } = req.body;
    if (username === 'aioverg' && password===123456) {
      return res.json({
        status: 'ok',
        code: 0,
        token: "123456",
        data: {id: 1,username: 'aioverg',}
      })
    } else {
      return res.status(403).json({
        status: 'error',
        code: 403
      });
    }
  },
}