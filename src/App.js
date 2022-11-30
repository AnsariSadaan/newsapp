import './App.css';
import React, {useState } from 'react'
import Navbar from './components/Navbar'
import News from './components/News';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'
// import NewsItems from './components/NewsItems';


const App = () => {
  const pageSize = 9;
  const apikey = process.env.REACT_APP_NEWS_API
  const [progress, setProgress] = useState(0)
    
    return (
      <div>
        <BrowserRouter>
          <Navbar />
          <LoadingBar
            color='#f11946'
            progress={progress}
          />
          <Routes>
            <Route path='/' element={<News setProgress ={setProgress} apikey={apikey} key="general" pageSize={pageSize} country='in' category={"general"} />}></Route>
            <Route path='/business' element={<News setProgress ={setProgress} apikey={apikey} key="business" pageSize={pageSize} country='in' category={"business"} />} ></Route>
            <Route path='/entertainment' element={<News setProgress ={setProgress} apikey={apikey} key="entertainment" pageSize={pageSize} country='in' category={"entertainment"} />}></Route>
            <Route path='/general' element={<News setProgress ={setProgress} apikey={apikey} key="general" pageSize={pageSize} country='in' category={"general"} />}></Route>
            <Route path='/health' element={<News setProgress ={setProgress} apikey={apikey} key="health" pageSize={pageSize} country='in' category={"health"} />}></Route>
            <Route path='/science' element={<News setProgress ={setProgress} apikey={apikey} key="science" pageSize={pageSize} country='in' category={"science"} />}></Route>
            <Route path='/sports' element={<News setProgress ={setProgress} apikey={apikey} key="sports" pageSize={pageSize} country='in' category={"sports"} />}></Route>
            <Route path='/technology' element={<News setProgress ={setProgress} apikey={apikey} key="technology" pageSize={pageSize} country='in' category={"technology"} />}></Route>
          </Routes>
        </BrowserRouter>
      </div>
    )
}


export default App