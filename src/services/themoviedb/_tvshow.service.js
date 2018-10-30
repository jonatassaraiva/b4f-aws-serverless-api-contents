'use strict';

/**
 * 
 */

const { helpers } = require('b4f-common');

const getTvShow = (contentId) => {
  const options = {
    url: process.env.THEMOVIEDB_TVSHOW.replace('{contentId}', contentId),
    method: 'GET'
  };

  return helpers.request.send(options, 'tvshow_themoviedb')
    .then(data => {
      // TODO: Validate Errors
      if (data.body.status_code === 34) {
        return Promise.reject({ httpStatusCode: 404, message: `Content tv show, ${contentId}, not found`});
      }

      return data.body;
    });
};

module.exports = (contentId) => {
  return getTvShow(contentId);
};