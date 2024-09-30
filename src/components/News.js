import React, { Component } from 'react'
import NewsItem from './NewsItem'


export class news extends Component {
  render() {
    return (
      <div className='container'>
        <h2>Daily News - Top Headings</h2>
        <div className="row">
          <div className="col-md-4">
            <NewsItem title="myTitle" description = "desc" />
          </div>
          <div className="col-md-4">
            <NewsItem title="myTitle" description = "desc" />
          </div>
          <div className="col-md-4">
            <NewsItem title="myTitle" description = "desc" />
          </div>
        </div>
      </div>
    )
  }
}

export default news
