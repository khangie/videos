import axios from 'axios';

const KEY = 'AIzaSyAbHhReDiykmVU3nTBFZxA2cFu_SrCwmRY';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3', 
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
});