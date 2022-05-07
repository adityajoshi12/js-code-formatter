const { Router } = require('express');
const router = new Router();

router.get('/', function (req, res) {
  res.json({ message: 'Ping Successfull' });
});

module.exports = router;
