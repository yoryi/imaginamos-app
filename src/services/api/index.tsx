import config from './config';
const api = async (url: string, method: string, data?: any) => {
  return config({url, method, data})
    .then(x => x)
    .catch(_ => _);
};
export default api;
