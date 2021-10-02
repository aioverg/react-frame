module.exports = {
  'POST /api/login': (req, res) => {
    const { username,password } = req.body;
    if (username === 'aioverg' && password===123456) {
      return res.json({
        status: 'ok',
        code: 0,
        data: {id: 1,username: 'aioverg', token: 'aioverg'}
      })
    } else {
      return res.status(403).json({
        status: 'error',
        code: 403
      });
    }
  },
}