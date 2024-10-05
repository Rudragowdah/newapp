import React, { useState, useEffect } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props={ country: "in", pageSize: 10, category: "science",})=> {
  
  const [articles,setArticles] = useState([]);
  const [loading,setLoading] = useState(false);
  const [page,setPage] = useState(1);
  const [totalResults,setTotalResults] = useState(0);


  const capitalizeFirstLetter = (category)=> {
    return category.charAt(0).toUpperCase() + category.slice(1);
  }
  
  
  const updateArticles = (articles2) => {
    for (let i = 0; i < articles2.length; i++) {
      if (articles2[i].title === "[Removed]" || articles2[i].urlToImage === null) {
        delete articles2[i];
      }
    }
    return articles2;
  };

  useEffect(()=>{
  document.title = `${capitalizeFirstLetter( props.category)} - Daily News`;
    updateNews();
    // eslint-disable-next-line
  }, [])
  
  const updateNews = async ()=>{
    props.setProgress(10);
    let url = `https://newsapi.org/v2/top-headlines?country=${
      props.country
    }&category=${
      props.category
    }&apiKey=${props.apikey}&pageSize=${
      props.pageSize
    }&page=${page}`;
    setLoading(true);
    let data = await fetch(url);
    props.setProgress(40);
    let parsedData = await data.json();
    props.setProgress(70);
    setLoading(false);
    setTotalResults(parsedData.totalResults);
    props.setProgress(100);
    let articles2 = updateArticles(parsedData.articles);
    setArticles(articles2);
    setPage(page + 1);
  }


  const checkDisablity = () => {
    if (totalResults >= 100) {
      if ((page + 1) * props.pageSize <= 100) {
        return false;
      } else {
        return true;
      }
    } else if (
      totalResults - (page * props.pageSize) >
      0
    ) {
      return false;
    } else {
      return true;
    }
  };

  const fetchMoreData = async ()=> {
    if (checkDisablity) {
      props.setProgress(10);
      let url = `https://newsapi.org/v2/top-headlines?country=${
        props.country
      }&category=${
        props.category
      }&apiKey=${props.apikey}&pageSize=${
        props.pageSize
      }&page=${page}`;
      setLoading(true);
      let data = await fetch(url);
      props.setProgress(40);
      let parsedData = await data.json();
      props.setProgress(70);
      setLoading(false);
      props.setProgress(100);
      setPage(page + 1);

      let articles2 = parsedData.articles;
     
      articles2 = updateArticles(articles2);

      setArticles(articles.concat(articles2));

    }
    
  }

    return (
      <>
        <h2 className="text-center my-3">
          Daily News - Top {capitalizeFirstLetter(props.category)}{" "}
          Headlines
        </h2>
        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length <= totalResults}
          loader={loading && <Spinner />}
        >
          <div className="container">
          <div className="row">
            {articles.map((element,index) => {
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


News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
};

export default News;
