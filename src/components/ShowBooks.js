import React, { Component } from 'react';
import '../asserts/bootstrap.css';

class showBooks extends Component {
  render() {
    const volumeInfo = this.props.data.volumeInfo;
    let imgLink = (volumeInfo.imageLinks) ? volumeInfo.imageLinks.smallThumbnail : 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/480px-No_image_available.svg.png'
    return (
      <div>
        <div className="book">
          <div className="book-top">
            <div
              className="book-cover"
              style={{
                width: 128,
                height: 193,
                backgroundImage: `url("${imgLink}")`,
              }}
            />
            <div className="book-shelf-changer bg-dark">
              <select>
                <option value="move" disabled>
                  Move to...
                </option>
                <option value="currentlyReading">
                  Currently Reading
                </option>
                <option value="wantToRead">Want to Read</option>
                <option value="read">Read</option>
                <option value="none">None</option>
              </select>
            </div>
          </div>
          <div className="book-title">{volumeInfo.title}</div>
          <div className="book-authors">
            {volumeInfo.authors}
          </div>
        </div>
      </div>
    );
  }
}

export default showBooks;
