'use strict';

/**
 * 
 */

const { helpers } = require('b4f-common');

const getMovies = (contentId) => {
  const options = {
    url: process.env.THEMOVIEDB_MOVIE.replace('{contentId}', contentId),
    method: 'GET'
  };

  return helpers.request.send(options, 'movie_themoviedb')
    .then(data => {
      // TODO: Validate Errors
      if (data.body.status_code === 34) {
        return Promise.reject({ httpStatusCode: 404, message: `Content movie, ${contentId}, not found`});
      }
      return data.body;
    });
};

module.exports = (contentId) => {
  return getMovies(contentId);
};