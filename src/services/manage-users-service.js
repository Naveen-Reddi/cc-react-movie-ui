import axios from "axios";
import { BASE_API_URL } from "../constants";

const URL = `${BASE_API_URL}/user`;
// const URL='http://localhost:8080/user';
class ManageUsersService
{
    addUser(user)
    {
      return axios.post(URL,user);
    }
    modifyUser(user)
    {
      return axios.put(URL,user);
    }

    getAllUsers(){
        return axios.get(URL);
    }

    deleteUser(username)
    {
      return axios.delete(URL+"/"+username);
    }
   
}

export default new  ManageUsersService();