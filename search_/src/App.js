import React, { useState } from "react";
import searchImages from "./api";
import SearchBar from "./components/SearchBar";
import ImagesList from "./components/ImagesList";

function App() {
  const [images, setImages] = useState([]);

  const handleSubmit = async (term) => {
    // console.log("Do a search with", term);
    const result = await searchImages(term);
    // console.log(result);
    setImages(result);
  };
  return (
    <div>
      <SearchBar onSubmit={handleSubmit} />
      <ImagesList images={images} />
    </div>
  );
}

export default App;
