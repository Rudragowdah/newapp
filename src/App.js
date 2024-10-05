import "./App.css";
import React, { useState } from "react";
import NavBar from "./components/NavBar";
import News from "./components/News";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";

const App = ()=> {

  const [progress, setProgress] = useState(0);

  const apikey = process.env.REACT_APP_NEWS_API

  // const apikey = 'bf1b8d6dab374148b6a5e4f4185e08db';

  const pageSize = 10;

    return (
      <div>
        <Router>
          <NavBar />
          <LoadingBar
            height={4}
            color="#f11946"
            progress={progress}
          />
          <Routes>
            <Route path="/" element={<News setProgress={setProgress} apikey={apikey} key="general" country="us" category="general" pageSize={pageSize} />}/> 
            <Route path="/business" element={ <News setProgress={setProgress} apikey={apikey} key="business" pageSize={pageSize} country="us" category="business" />} />
            <Route path="/entertainment" element={ <News setProgress={setProgress} apikey={apikey} key="entertainment" pageSize={pageSize} country="us" category="entertainment" />} />
            <Route path="/health" element={ <News setProgress={setProgress} apikey={apikey} key="health" pageSize={pageSize} country="us" category="health" />} />
            <Route path="/science" element={ <News setProgress={setProgress} apikey={apikey} key="science" pageSize={pageSize} country="us" category="science" />} />
            <Route path="/sports" element={ <News setProgress={setProgress} apikey={apikey} key="sports" pageSize={pageSize} country="us" category="sports" />} />
            <Route path="/technology" element={ <News setProgress={setProgress} apikey={apikey} key="technology" pageSize={pageSize} country="us" category="technology" />} />
          </Routes>
        </Router>
      </div>
    );
}

export default App;
