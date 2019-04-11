import axios from 'axios';
const API_URL = 'http://localhost:8000';
export class APIService{

constructor(){
}

getPosts() {
    const url = `${API_URL}/api/posts/`;
    return axios.get(url).then(response => response.data);
}

getPost(pk) {
    const url = `${API_URL}/api/posts/${pk}`;
    return axios.get(url).then(response => response.data);
}

}
