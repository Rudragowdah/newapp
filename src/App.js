import './App.css';

import React, { Component } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
export class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <NavBar />
          <Routes>
               key=""<Route path="/" element={<News key="general" id='' pageSize={10} country='us' category='general'/>}></Route>
              <Route path="/business" element={<News key="business" id='business' pageSize={10} country='us' category='business'/>}></Route>
              <Route path="/entertainment" element={<News key="entertainment" id='entertainment' pageSize={10} country='us' category='entertainment'/>}></Route>
              <Route path="/health" element={<News key="health" id='health' pageSize={10} country='us' category='health'/>}></Route>
              <Route path="/science" element={<News key="science" id='science' pageSize={10} country='us' category='science'/>}></Route>
              <Route path="/sports" element={<News key="sports" id='sports' pageSize={10} country='us' category='sports'/>}></Route>
              <Route path="/technology" element={<News key="technology" id='technology' pageSize={10} country='us' category='technology'/>}></Route>
          </Routes>
        </Router>
      </div>
    )
  }
}

export default App;

