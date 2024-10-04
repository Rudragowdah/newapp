import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

export class news extends Component {
  static defaultProps = {
    country: "in",
    pageSize: 10,
    category: "science",
  };

  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  };

  capitalizeFirstLetter(category) {
    return category.charAt(0).toUpperCase() + category.slice(1);
  }

  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: false,
      page: 1,
      totalResults: 0,
    };
    document.title = `${this.capitalizeFirstLetter(
      this.props.category
    )} - Daily News`;
  }

  updateArticles = (articles2) => {
    for (let i = 0; i < articles2.length; i++) {
      if (articles2[i].title === "[Removed]" || articles2[i].urlToImage === null) {
        delete articles2[i];
      }
    }
    return articles2;
  };

  async componentDidMount() {
    let url = `https://newsapi.org/v2/top-headlines?country=${
      this.props.country
    }&category=${
      this.props.category
    }&apiKey=87548a2330b446aa9c1e6a3347e50155&pageSize=${
      this.props.pageSize
    }&page=${this.state.page}`;
    this.setState({
      loading: true,
    });
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      loading: false,
      totalResults: parsedData.totalResults,
    });
    let articles2 = this.updateArticles(parsedData.articles);
    this.setState({
      articles : articles2
    });
  }

  checkDisablity = () => {
    if (this.state.totalResults >= 100) {
      if ((this.state.page + 1) * this.props.pageSize <= 100) {
        return false;
      } else {
        return true;
      }
    } else if (
      this.state.totalResults - (this.state.page * this.props.pageSize) >
      0
    ) {
      return false;
    } else {
      return true;
    }
  };

  fetchMoreData = async ()=> {
    console.log(this.state.page);
    console.log(this.state.totalResults);
    if (this.checkDisablity) {
      this.setState({ page: this.state.page + 1 })

      let url = `https://newsapi.org/v2/top-headlines?country=${
        this.props.country
      }&category=${
        this.props.category
      }&apiKey=87548a2330b446aa9c1e6a3347e50155&pageSize=${
        this.props.pageSize
      }&page=${this.state.page}`;
      this.setState({
        loading: true,
      });
      let data = await fetch(url);
      let parsedData = await data.json();
      this.setState({
        loading: false
      });

      let articles2 = parsedData.articles;
     
      articles2 = this.updateArticles(articles2);

      this.setState({
        articles: this.state.articles.concat(articles2),
      });
    }
  }

  render() {
    return (
      <>
        <h2 className="text-center my-3">
          Daily News - Top {this.capitalizeFirstLetter(this.props.category)}{" "}
          Headlines
        </h2>
        {/* {this.state.loading && <Spinner />} */}
        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length <= this.state.totalResults}
          loader={this.state.loading && <Spinner />}
        >
          <div className="container">
          <div className="row">
            {this.state.articles.map((element,index) => {
              return (
                <div className="col-md-4 my-3" key={element.url + index}>
                  <NewsItem
                    title={element.title ? element.title.slice(0, 45) : ""} description={element.description? element.description.slice(0, 88): ""}
                    imageUrl={element.urlToImage}
                    newsUrl={element.url}
                    author={element.author}
                    date={element.publishedAt}
                    source={element.source.name}
                  />
                </div>
              );
            })}
          </div>
          </div>
        </InfiniteScroll>
      </>
    );
  }
}

export default news;
