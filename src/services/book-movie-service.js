import axios from "axios";
import { BASE_API_URL } from "../constants";

const URL = `${BASE_API_URL}/book`;
// const URL='http://localhost:8080/book';

class BookMovieService
{
    bookTicket(book)
    {
      return axios.post(URL,book);
    }
    modifyBook(theatre)
    {
      return axios.put(URL,theatre);
    }

    deleteBook(id)
    {
      return axios.delete(URL+"/"+id);
    }

    getAllBooks(){
        return axios.get(URL);
    }

    findbookById(id)
    {
        return axios.get(URL+"/"+id);
    } 
    findbooksByCustomer(id)
    {
        return axios.get(URL+"/customer/"+id);
    }
    getBookingId(){
        return axios.get(URL+"/booking/bid");
    }

}

export default new  BookMovieService();