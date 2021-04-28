import './App.css';
import React, { useState, useEffect } from "react";
import { client } from './client'

function App() {
  const [articles, setArticles] = useState([])

  useEffect(() => {
    client.getEntries({
      content_type: 'kocktailBlog'
    })
      .then(response => setArticles(response.items))
  })

  console.log(articles)

  return (
    <div className="App">
      {/* <NavBar />
      <Main />
      <Footer /> */}
    </div>
  )
}

export default App;
