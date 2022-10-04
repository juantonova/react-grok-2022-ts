const router = require('express').Router();
const { City } = require('../db/models');

router.route('/')
  .get((req, res) => {
    City.findAll()
      .then((allCities) => res.json(allCities))
      .catch((error) => res.status(500).json(error));
  })
  .post((req, res) => {
    City.create(req.body)
      .then((newCity) => res.status(201).json(newCity))
      .catch((error) => res.status(500).json(error));
  });

router.route('/count')
  .post(async (req, res) => {
    const { limit } = req.body;
    const { count } = await City.findAndCountAll();
    const countPages = Math.ceil(count / limit);
    const arrPages = [];

    for (let index = 1; index <= countPages; index += 1) {
      arrPages.push(index);
    }

    res.json(arrPages);
  });

router.route('/:id')
  .put((req, res) => {
    const { id } = req.params;

    City.update(req.body, { where: { id }, returning: true })
      .then((updatedData) => {
        const [updatedCity] = updatedData[1];
        res.json(updatedCity);
      })
      .catch((error) => res.status(500).json(error));
  })
  .delete((req, res) => {
    const { id } = req.params;

    City.destroy({ where: { id } })
      .then((deletedCity) => (deletedCity ? res.json(id) : res.status(404).json(deletedCity)))
      .catch((error) => res.status(500).json(error));
  });

module.exports = router;
