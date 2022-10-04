const fs = require('fs').promises;
const path = require('path');
const router = require('express').Router();

router.route('/')
  .get(async (req, res) => {
    fs.readdir(path.join(process.env.PWD, '../client/src/components/answers'))
      .then((data) => {
        const themes = data.filter((theme) => theme !== 'App' && theme !== 'Home');
        res.json(themes);
      })
      .catch((error) => res.status(500).json(error));
  });

module.exports = router;
