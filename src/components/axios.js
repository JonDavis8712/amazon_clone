import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://us-central1-clone-3f4cb.cloudfunctions.net/api'
    // LOCAL HOST: 'http://localhost:5001/clone-3f4cb/us-central1/api'
});

export default instance;