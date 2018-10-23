'use strict';

const { helpers } = require('b4f-common');
const contentsTheMovieDB = require('../services/themoviedb');

module.exports = (req, context) => {
  const { contentId } = req.pathParameters;

  return contentsTheMovieDB.movie(contentId)
    .then(data => {
      return helpers.response.success(data, context);
    })
    .catch(err => {
      return helpers.response.error(err, context);
    });
}