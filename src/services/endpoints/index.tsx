import service from '../api';

async function getMoviePopular() {
  const url = 'movie/popular';
  const method = 'GET';
  return service(url, method);
}

async function getTopRated() {
  const url = 'movie/top_rated';
  const method = 'GET';
  return service(url, method);
}

export {getMoviePopular, getTopRated};
