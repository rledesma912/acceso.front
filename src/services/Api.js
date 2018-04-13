import axios from 'axios';

//esto debe ir en algun config
var URL = "http://localhost:5000"

export default () => {

  return axios.create({
    baseURL: URL
  })
}
