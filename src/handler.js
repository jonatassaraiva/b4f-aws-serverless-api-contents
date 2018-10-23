'use strict';
const { configs } = require('b4f-common');
configs.xRay.init();

const functionContentMovie = require('./functions/contents.movie');
const getContentMovie = async (event, context) => {
  return functionContentMovie(event, context);
};

const functionTvShow = require('./functions/contents.tvshow');
const getContentTvShow= async (event, context) => {
  return functionTvShow(event, context);
};

module.exports = {
  getContentMovie,
  getContentTvShow
};