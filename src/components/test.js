import React, { Component } from 'react';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../asserts/bootstrap.css';

class TestPage extends Component {
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
              <input className="form-control shadow-none transparent-input text-white my-2 my-sm-0" type="search" placeholder="Search" aria-label="Search" />
            </div>
          </form>
        </nav>
        <div className="bg-light text-center m-auto pt-3 pb-3">
          <div className="container">
            <h1 className="display-3 mt-2">Book Finder</h1>
            <p className="h5 text-muted mb-3">Good friends, good suggestions and good books: this is the ideal life.</p>            
          </div>
        </div>
      </div>
    );
  }
}

export default TestPage;
