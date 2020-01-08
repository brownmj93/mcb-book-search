import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Input, TextArea, FormBtn } from "../components/Form";
import SavedComponent from "../components/Saved";
import SearchResults from "../components/SearchResults";

class Saved extends Component {
  state = {
    books: []
  };

  componentDidMount() {
    this.loadBooks();
  };

  loadBooks = () => {
    API.getBooks()
      .then(res => {
        this.setState({
          books: res.data,
          // title: "", author: "", synopsis: "" 
        })
        console.log(JSON.stringify(this.state.books));
        console.log(JSON.stringify(this.state.books[0]._id));
        
      }
      )
      .catch(err => console.log(err));
  };

  handleDelete = id => {
    //console.log("book info" + JSON.stringify(book));
    API.deleteBook(id)
    .then(res => {
      this.loadBooks() 
      console.log("deleted");          
    })
    .catch(err => console.log(err));

  };


  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-12">
            <h3>Saved Page</h3>

            {this.state.books.map(book => (

              <SavedComponent
                title={book.title}
                author={book.author}
                img={book.image}
                summary={book.summary}
                link={book.link}
                _id={book._id}
                handleDelete={this.handleDelete}
              />

            ))}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Saved;
