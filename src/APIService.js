import axios from 'axios';
const API_URL = 'http://localhost:8000/api';
export class APIService {

  constructor() {}

  getPosts(query) {
    const url = `${API_URL}/posts/${query}`;
    return axios.get(url)
      .then(response => response.data)
      .catch(function (error) {
        console.log(error);
      });
  }

  getPostBySlug(slug) {
    const url = `${API_URL}/post/${slug}`;
    return axios.get(url)
      .then(response => response.data)
      .catch(function (error) {
        console.log(error);
      });
  }


  createUser(data) {
    const url = `${API_URL}/user/create`;
    axios.post(url, data).then(function (response) {
      alert(`User ${response.data["username"]} was successfully created`);
    }).catch(function (error) {
      console.log(error);
    });
  }

  login(data) {
    const url = `${API_URL}-token-auth/`;
    axios.post(url, data)
      .then(response =>
        response.data["token"])
      .catch(function (error) {
        console.log(error);
      });
  }

}