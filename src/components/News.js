import React, { Component } from "react";
import NewsItem from "./NewsItem";

export class news extends Component {

  constructor() {
    super();
    console.log("I am a constructor");
    this.state = {
      articles: [],
      loading: false,
    };
  }

  async componentDidMount() {
    let url =
      "https://newsapi.org/v2/everything?q=movie&language=en&from=2024-09-01&sortBy=publishedAt&pageSize=20&apiKey=87548a2330b446aa9c1e6a3347e50155";
    let data = await fetch(url);
    let parsedData = await data.json();
    // console.log(data);
    console.log(parsedData);
    this.setState({ articles: parsedData.articles });
  }

  render() {
    return (
      <div className="container">
        <h2 className="my-3">Daily News - Top Headings</h2>

        <div className="row">
          {this.state.articles.map((element) => {
            return (
              <div className="col-md-4 my-3" key={element.url}>
                <NewsItem
                  title={element.title ? element.title.slice(0, 45) : ""}
                  description={
                    element.description ? element.description.slice(0, 88) : ""
                  }
                  imageUrl={element.urlToImage}
                  newsUrl={element.url}
                />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default news;
