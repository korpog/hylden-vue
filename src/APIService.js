import axios from 'axios';
const URL = 'http://localhost:8000';
const API_URL = 'http://localhost:8000/api';
export class APIService {

  constructor() {}

  getPosts(query) {
    const url = `${API_URL}/posts/${query}`;
    return axios.get(url)
      .then(response => response.data)
      .catch(error => console.log(error));
  }

  getPostsByUrl(url) {
    return axios.get(url)
      .then(response => response.data)
      .catch(error => console.log(error));
  }

  getPostBySlug(slug) {
    const url = `${API_URL}/post/${slug}`;
    return axios.get(url)
      .then(response => response.data)
      .catch(error => console.log(error));
  }

  createPost(post) {
    const url = `${API_URL}/posts/`;
    return axios.post(url, post, {
      headers: {
        Authorization: `Token ${localStorage.getItem('token')}`
      }
    });
  }

  updatePost(post, slug) {
    const url = `${API_URL}/post/${slug}/`;
    return axios.patch(url, post, {
      headers: {
        Authorization: `Token ${localStorage.getItem('token')}`
      }
    });
  }

  deletePost(slug) {
    const url = `${API_URL}/post/${slug}`;
    return axios.delete(url, {
      headers: {
        Authorization: `Token ${localStorage.getItem('token')}`
      }
    });
  }

  getCategories() {
    const url = `${API_URL}/categories/`;
    return axios.get(url)
      .then(response => response.data)
      .catch(error => console.log(error));
  }


  createUser(data) {
    const url = `${API_URL}/user/create`;
    axios.post(url, data).then(function (response) {
        alert(`User ${response.data["username"]} was successfully created`);
      })
      .catch(error => console.log(error));
  }

  login(data) {
    const url = `${URL}/rest-auth/login/`;
    return axios.post(url, data)
      .then(response => {
        localStorage.setItem('token', response.data["key"]);
        localStorage.setItem('username', data["username"]);
        alert("You have been successfully logged in!")
      })
      .catch(error => console.log(error));
  }

  logout() {
    const url = `${URL}/rest-auth/logout/`;
    return axios.post(url)
      .then(() => {
        localStorage.removeItem("token");
        localStorage.removeItem("username");
        alert("You have been logged out!");
      })
      .catch(error => console.log(error));
  }

  resetPassword(email) {
    const url = `${URL}/rest-auth/password/reset/`;
    return axios.post(url, email)
  }

  changePassword(data) {
    const url = `${URL}/rest-auth/password/change/`;
    return axios.post(url, data)
  }

}