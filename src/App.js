import './App.css';
import React, { useState, useEffect } from "react";
import { client } from './client';
import NavBar from "./components/NavBar";
import Main from "./components/Main";
import Footer from "./components/Footer";
import Example from './components/imgSlider';
import Info from './components/info'




function App() {
  const [articles, setArticles] = useState([])

  useEffect(() => {
    client.getEntries({
      content_type: 'kocktailBlog'
    })
      .then(response => setArticles(response.items))
  }, [])

  return (
    <div className="App">
      <NavBar />
      <Example />
      <Info />
      <Main articles={articles}/>
     
      <Footer />
    </div>
  )
}

export default App;
