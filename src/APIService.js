import axios from 'axios';
const API_URL = 'http://localhost:8000/api';
export class APIService{

constructor(){
}

getPosts() {
    const url = `${API_URL}/posts/`;
    return axios.get(url)
    .then(response => response.data)
    .catch(function (error) {
        console.log(error);
      });
}

getPost(pk) {
    const url = `${API_URL}/posts/${pk}`;
    return axios.get(url)
    .then(response => response.data)
    .catch(function (error) {
        alert(error);
      });
}


postUser(data) {
    const url = `${API_URL}/user/create`;
    axios.post(url, data).then(function (response) {
        alert(`User ${response.data["username"]} was successfully created`);
      }).catch(function (error) {
        alert(error);
      });
}


}
