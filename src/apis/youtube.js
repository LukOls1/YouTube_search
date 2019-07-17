import axios from 'axios';

const KEY = 'AIzaSyCrOVq4oWjXWUDAr_FvxA91oKCfY_O40gY';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY,
    }
})
