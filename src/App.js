import './App.css';
import React, { useState, useEffect } from "react";
import { client } from './client';
import NavBar from "./components/NavBar";
import Main from "./components/Main";
import Footer from "./components/Footer";
import ScrollUpButton from "react-scroll-up-button";



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
      <ScrollUpButton ContainerClassName="footButton"><button>Back to Top</button></ScrollUpButton>
      <NavBar />
      <Main articles={articles}/>
      <Footer />
    </div>
  )
}

export default App;
