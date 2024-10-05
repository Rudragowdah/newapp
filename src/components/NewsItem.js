import React from "react";

const NewsItem = (props)=> {

    let { title, description, imageUrl, newsUrl, author, date ,source} = props;
    return (
      <div>
        <div className="card">
          <img
            src={
              !imageUrl
                ? "https://upload.wikimedia.org/wikipedia/commons/a/a3/Image-not-found.png"
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

export default NewsItem;
