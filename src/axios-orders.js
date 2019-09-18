import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://i-need-a-burger.firebaseio.com/'
});

export default instance;
