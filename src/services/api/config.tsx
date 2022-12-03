import axios from 'axios';
import APP from '../../components/_settings/app';
const config = axios.create({
  baseURL: APP.URI_API,
  params: {
    api_key: APP.KEY_API,
  },
  headers: {},
});
export default config;
