import axios from "axios";
const URL = "https://www.googleapis.com/books/v1/volumes?q=";

export default {
  search: function(query) {
    return axios.get(URL + query);  
  },
  saveBook: function(bookData) {
    return axios.post("/api/books", bookData);
    
  },
  getBooks: function() {
    return axios.get("/api/books");
  }
};
