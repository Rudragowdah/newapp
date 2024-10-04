import "./App.css";
import React, { Component } from "react";
import NavBar from "./components/NavBar";
import News from "./components/News";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";

export class App extends Component {
  state = {
    progress: 0,
  };

  apikey = process.env.REACT_APP_NEWS_API

  setProgress = (progress) => {
    this.setState({
      progress: progress,
    });
  };

  render() {
    return (
      <div>
        <Router>
          <NavBar />
          <LoadingBar
            height={4}
            color="#f11946"
            progress={this.state.progress}
          />
          <Routes>
            <Route path="/" element={<News setProgress={this.setProgress} apikey={this.apikey} key="general" country="us" category="general" pageSize={10} />}/> 
            <Route path="/business" element={ <News setProgress={this.setProgress} apikey={this.apikey} key="business" pageSize={10} country="us" category="business" />} />
            <Route path="/entertainment" element={ <News setProgress={this.setProgress} apikey={this.apikey} key="entertainment" pageSize={10} country="us" category="entertainment" />} />
            <Route path="/health" element={ <News setProgress={this.setProgress} apikey={this.apikey} key="health" pageSize={10} country="us" category="health" />} />
            <Route path="/science" element={ <News setProgress={this.setProgress} apikey={this.apikey} key="science" pageSize={10} country="us" category="science" />} />
            <Route path="/sports" element={ <News setProgress={this.setProgress} apikey={this.apikey} key="sports" pageSize={10} country="us" category="sports" />} />
            <Route path="/technology" element={ <News setProgress={this.setProgress} apikey={this.apikey} key="technology" pageSize={10} country="us" category="technology" />} />
          </Routes>
        </Router>
      </div>
    );
  }
}

export default App;
