import './App.css';
import React, { useState, useEffect } from "react";
import { client } from './client';
import NavBar from "./components/NavBar";
import Main from "./components/Main";
import Footer from "./components/Footer";




function App() {
  const [articles, setArticles] = useState([])
  const [query, setQuery] = useState({ content_type: 'kocktailBlog' })
  const [input, setInput] = useState('')

  useEffect(() => {
    client.getEntries(query)
      .then(response => setArticles(response.items))
  }, [query])


  return (
    <div className="App">
      <NavBar input={input} setInput={setInput} setQuery={setQuery} />
      <Main articles={articles} />
      <Footer />
    </div>
  )
}

export default App;
