import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {
    let {title, description, imageUrl, newsUrl} = this.props;
    return (
      <div>
        <div className="card" style={{width: "18rem"}}>
          <img src={!imageUrl? "https://i0.wp.com/wattsupwiththat.com/wp-content/uploads/2024/09/charlesrotter_canyonlands_with_snow-midjourney.webp?fit=1024%2C512&ssl=1"
                      : imageUrl} style={{height:'12vw'}} className="card-img-top"/>
          <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{description}...</p>
            <a href={newsUrl} target='_blank' className="btn btn-sm btn-primary">Read More</a>
          </div>
        </div>
      </div>
    )
  }
}

export default NewsItem;
