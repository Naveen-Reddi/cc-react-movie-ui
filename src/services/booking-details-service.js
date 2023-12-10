import axios from "axios";
import { BASE_API_URL } from "../constants";

const URL = `${BASE_API_URL}/book/customer`;
// const URL='http://localhost:8080/book/customer';
class BookingDetailsService
{
  
  findBooksByCustomer(id){
    return axios.get(URL+"/" + id);
  }
  getBookingCount(){
    return axios.get(URL);
  }
}

export default new  BookingDetailsService();