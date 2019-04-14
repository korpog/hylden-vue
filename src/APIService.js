import axios from 'axios';
const API_URL = 'http://localhost:8000/api';
export class APIService{

constructor(){
}

getPosts() {
    const url = `${API_URL}/posts/`;
    return axios.get(url).then(response => response.data);
}

getPost(pk) {
    const url = `${API_URL}/posts/${pk}`;
    return axios.get(url).then(response => response.data);
}

}
