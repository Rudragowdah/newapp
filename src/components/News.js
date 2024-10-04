import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from 'prop-types';


export class news extends Component {
  static defaultProps = {
    country:'in',
    pageSize:10,
    category:'science',
    // key: 'general'
  }

  static propTypes = {
    country : PropTypes.string,
    pageSize : PropTypes.number,
    category : PropTypes.string,
    // key: PropTypes.string
  }

  constructor() {
    super();
    // console.log("I am a constructor");
    this.state = {
      articles: [],
      loading: false,
      page: 1
    };
  }

  updateArticles = (articles2)=>{
    // console.log(this.state.articles);
    // let articles2 = this.state.articles;
    // console.log(articles2);

    // console.log(articles2.length);
    for(let i=0;i<articles2.length;i++) {
      // console.log(articles2[i]);
      if(articles2[i].title === '[Removed]') {
        // console.log(articles2[i]);
        delete articles2[i];
      }
    }
    this.setState({
      articles : articles2
    })
    console.log(this.state.articles);
  }

  updateNews = async (updatePageBy)=> {
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=87548a2330b446aa9c1e6a3347e50155&pageSize=${this.props.pageSize}&page=${this.state.page + updatePageBy}`;
      this.setState({
        loading:true
      })
      let data = await fetch(url);
      let parsedData = await data.json();
      // console.log(this.state.page);
      this.setState({
        page: this.state.page + updatePageBy,
        articles: parsedData.articles,
        loading: false,
        totalResults:parsedData.totalResults
      });
      // console.log(parsedData.articles);
      this.updateArticles(parsedData.articles);
  }

  async componentDidMount() {

    this.updateNews(0);

    // let url =
    //   `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=87548a2330b446aa9c1e6a3347e50155&pageSize=${this.props.pageSize}&page=1`;
    //   this.setState({
    //     loading:true
    //   })
    // let data = await fetch(url);
    // let parsedData = await data.json();
    // this.setState({
    //   articles: parsedData.articles,
    //   loading: false,
    //   totalResults:parsedData.totalResults
    // });
  }

  handleNext = async () => {

    this.updateNews(1);

      // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=87548a2330b446aa9c1e6a3347e50155&pageSize=${this.props.pageSize}&page=${this.state.page + 1}`;
      // this.setState({
      //   loading:true
      // })
      // let data = await fetch(url);
      // let parsedData = await data.json();
      // console.log(this.state.page);
      // this.setState({
      //   page: this.state.page + 1,
      //   articles: parsedData.articles,
      //   loading: false,
      //   totalResults:parsedData.totalResults
      // });
  }

  handlePrevious = async () => {

    this.updateNews(-1);

    // console.log("Previous");
    // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=87548a2330b446aa9c1e6a3347e50155&pageSize=${this.props.pageSize}&page=${this.state.page - 1}`;
    // this.setState({
    //   loading:true
    // })
    // let data = await fetch(url);
    // let parsedData = await data.json();
    // this.setState({
    //   page: this.state.page - 1,
    //   articles: parsedData.articles,
    //   loading: false,
    //   totalResults:parsedData.totalResults
    // });
  }
  checkDisablity =()=> {
    // console.log(this.state.totalResults);
    if(this.state.totalResults>=100) {
      if((this.state.page+1)*this.props.pageSize <= 100)
      {
        return false;
      }
      else {
        return true;
      }
    }
    else if(this.state.totalResults - ((this.state.page)*this.props.pageSize) > 0){
        return false;
    }
    else{
      return true;
    }
  }

  render() {
      return (
        <div className="container">
          <h2 className="text-center my-3">Daily News - Top Headings</h2>
          {this.state.loading && <Spinner/>}
          <div className="row">
            {!this.state.loading && this.state.articles.map((element) => {
              return (
                <div className="col-md-4 my-3" key={element.url}>
                  <NewsItem
                    title={element.title ? element.title.slice(0, 45) : ""}
                    description={
                      element.description
                        ? element.description.slice(0, 88)
                        : ""
                    }
                    imageUrl={element.urlToImage}
                    newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name}
                  />
                </div>
              );
            })}
          </div>
          <div className="container d-flex justify-content-between my-3">
            <button
              disabled={this.state.page <= 1}
              type="button"
              className="btn btn-dark"
              onClick={this.handlePrevious}
            >
              &larr; Previous
            </button>
            <button
              type="button"
              disabled={this.checkDisablity()}
              className="btn btn-dark"
              onClick={this.handleNext}
            >
              Next &rarr;
            </button>
          </div>
        </div>
      );
  }
}

export default news;
