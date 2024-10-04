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
                ? "data:image/png;base64,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"
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
