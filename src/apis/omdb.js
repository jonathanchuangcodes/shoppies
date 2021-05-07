import axios from 'axios';

const KEY = '7dfd415f';

export default axios.create({
    baseURL: `https://www.omdbapi.com/?apikey=${KEY}`,
    params: {
        s: "",
        type: "movie",
    }
});