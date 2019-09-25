import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { getBooks } from '../actions/BookActions';
import '../asserts/bootstrap.css';


class SearchNavBar extends Component {
  state = {
    query: ''
  };

  updateQuery = query => {
    this.setState({ query: query.trim() });
    this.props.getBooks({ txt: this.state.query });
  };

  render() {
    return (
      <div>
        <nav className="navbar sticky-top navbar-light bg-dark">
          <a className="navbar-brand text-white d-none d-sm-block" href="#">MyReads</a>
          <form className="form-inline my-2 col-sm-4">
            <div className="input-group">
              <div className="input-group-prepend">
                <span className="input-group-text transparent-input pr-4 pl-4 text-white"><FontAwesomeIcon icon={faSearch} /></span>
              </div>
              <input
                className="form-control shadow-none transparent-input text-white my-2 my-sm-0"
                type="search"
                placeholder="Search"
                aria-label="Search"
                value={this.state.query}
                onChange={e => this.updateQuery(e.target.value)}
              />
            </div>
          </form>
        </nav>
      </div>
    );
  }
}

SearchNavBar.propTypes = {
  getBooks: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  books: state.books,
  errors: state.errors,
});

export default connect(
  mapStateToProps,
  { getBooks }
)(SearchNavBar);
