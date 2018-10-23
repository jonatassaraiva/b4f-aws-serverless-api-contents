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
      return data.body;
    })
    .catch(err => {
      if (!safe) {
        throw err;
      }

      // TODO: LOG
      return [];
    });
};

module.exports = (contentId) => {
  return getMovies(contentId);
};