const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

const config = (app) => {
  app.use(express.urlencoded({ extended: true }));
  app.use(express.json());
  app.use(cors());
  app.use(helmet());
};

module.exports = config;
