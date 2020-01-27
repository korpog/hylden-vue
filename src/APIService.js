import axios from 'axios';
const URL = 'http://localhost:8000';
const API_URL = 'http://localhost:8000/api';
// let slugify = require('slugify');
export class APIService {

  constructor() {}

  getPosts(query) {
    const url = `${API_URL}/posts/${query}`;
    return axios.get(url)
      .then(response => response.data)
      .catch(error => alert(error));
  }

  getPostsByUrl(url) {
    return axios.get(url)
      .then(response => response.data)
      .catch(error => alert(error));
  }

  getPostBySlug(slug) {
    const url = `${API_URL}/post/${slug}`;
    return axios.get(url)
      .then(response => response.data)
      .catch(error => alert(error));
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
      .catch(error => alert(error));
  }


  createUser(data) {
    const url = `${API_URL}/user/create`;
    axios.post(url, data).then(response => {
        alert(`User ${response.data["username"]} was successfully created`);
      })
      .catch(error => alert(error));
  }

  getUserData(username) {
    const url = `${API_URL}/user/${username}`;
    axios.get(url)
      .then(response => response.data)
      .catch(error => alert(error));
  }

  getUserFavorites(username) {
    const url = `${API_URL}/user/${username}`;
    axios.get(url)
      .then(response => response.data["favorited"])
      .catch(error => alert(error));
  }



  login(data) {
    const url = `${URL}/rest-auth/login/`;
    return axios.post(url, data)
      .then(response => {
        if (response.status === 200) {
          localStorage.setItem('token', response.data["key"]);
          localStorage.setItem('username', data["username"]);
          alert("You have been successfully logged in!");
        }
      })
      .catch(error => alert(error));
  }

  logout() {
    const url = `${URL}/rest-auth/logout/`;
    return axios.post(url)
      .then(() => {
        localStorage.removeItem("token");
        localStorage.removeItem("username");
        alert("You have been logged out!");
      })
      .catch(error => alert(error));
  }

  resetPassword(email) {
    const url = `${URL}/rest-auth/password/reset/`;
    return axios.post(url, email).catch(error => alert(error));
  }

  changePassword(data) {
    const url = `${URL}/rest-auth/password/change/`;
    return axios.post(url, data);
  }

  saveSubs(subs) {
    const url = `${API_URL}/user/save-subscriptions`;
    return axios.patch(url, subs, {
      headers: {
        Authorization: `Token ${localStorage.getItem('token')}`
      }
    });
  }

  removeSubs(subs) {
    const url = `${API_URL}/user/remove-subscriptions`;
    return axios.patch(url, subs, {
      headers: {
        Authorization: `Token ${localStorage.getItem('token')}`
      }
    });
  }

  upvote(slug) {
    const url = `${API_URL}/post/upvote/${slug}`;
    return axios.patch(url, slug, {
      headers: {
        Authorization: `Token ${localStorage.getItem('token')}`
      }
    });
  }

  addToFavs(slug) {
    const url = `${API_URL}/post/favorite/${slug}`;
    return axios.patch(url, slug, {
      headers: {
        Authorization: `Token ${localStorage.getItem('token')}`
      }
    });
  }

  uploadAvatar(avatar) {
    const url = `${API_URL}/user/avatar-upload`;
    return axios.patch(url, avatar, {
      headers: {
        Authorization: `Token ${localStorage.getItem('token')}`,
      }
    });
  }

}