import axios from "axios";

import { BASE_API_URL } from "../constants";

const URL = `${BASE_API_URL}/movie`;
// const URL='http://localhost:8080/movie';
class MovieService
{
    getAllMovie()
    {
      return axios.get(URL);
    }
}

export default new  MovieService();