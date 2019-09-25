import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import SearchNavBar from './SearchNavBar';
import ShowBooks from './ShowBooks';
import { getBooks } from '../actions/BookActions';
import '../asserts/bootstrap.css';
import '../style.css';

class SearchPage extends Component {
  UNSAFE_componentWillMount() {
    this.props.getBooks({ txt: 'React' });
  }

  render() {
    const { books } = this.props;

    let booksData = [];
    if (books.books.items !== undefined) {
      booksData = books.books.items;
    }

    return (
      <div>
        <SearchNavBar />
        <div className="bg-light text-center m-auto pt-3 pb-3">
          <div className="container">
            <h1 className="display-3 mt-2">Book Finder</h1>
            <p className="h5 text-muted mb-3">
              Good friends, good suggestions and good books: this is the ideal
              life.
            </p>
          </div>
        </div>
        <div className="search-books">
          <div className="search-books-results">
            <ol className="books-grid">
              {booksData.map(book => (
                <li key={book.id}>
                  <ShowBooks data={book} />
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    );
  }
}

SearchPage.propTypes = {
  getBooks: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  books: state.books,
  errors: state.errors,
});

export default connect(
  mapStateToProps,
  { getBooks }
)(SearchPage);
