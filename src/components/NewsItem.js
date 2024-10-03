import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    let { title, description, imageUrl, newsUrl, author, date ,source} = this.props;
    return (
      <div>
        <div className="card">
          <img
            src={
              !imageUrl
                ? "https://i0.wp.com/wattsupwiththat.com/wp-content/uploads/2024/09/charlesrotter_canyonlands_with_snow-midjourney.webp?fit=1024%2C512&ssl=1"
                : imageUrl
            }
            style={{ maxWidth:'100%',maxHeight:'100%', objectFit: "contain" }}
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{description}...</p>
            <a
              rel="noreferrer"
              href={newsUrl}
              target="_blank"
              className="btn btn-sm btn-dark"
            >
              Read More
            </a>
          </div>
          <div className="card-footer">
            <small className="text-body-secondary">
              By {author?author:'UnKnowm'} on {new Date(date).toUTCString()}
            </small>
            <ul className="list-group list-group-flush text-primary">
              <li className="list-group-item text-success">Source: {source}</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
