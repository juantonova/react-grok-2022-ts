const router = require('express').Router();
const { City } = require('../db/models');

router.route('/:page')
  .get(async (req, res) => {
    const { page } = req.params;
    const { limit } = req.query;
    const skipValue = Number(page) === 1 ? 0 : (limit * page) - limit;

    City.findAll({ offset: Number(skipValue), limit })
      .then((partResources) => res.json(partResources))
      .catch((error) => res.status(500).json(error));
  });

module.exports = router;
