import { useState } from "react";
import "./App.css";
import LoadImages, { SearchImages } from "./components/api";
import Image from "./components/Image";

function App() {
  const [query, setQuery] = useState("");
  const [searchQ, setSearchQ] = useState();
  const Collection = LoadImages();
  const SearchCollection = SearchImages(searchQ, setSearchQ);

  const search = (e) => {
    e.preventDefault();
    setSearchQ(query);
  };

  return (
    <div className="App">
      <form onSubmit={search}>
        <input type="text" placeholder="Search" onChange={(e) => setQuery(e.target.value)} />
        <button type="submit">Search</button>
      </form>
      <div className="container">
        {SearchCollection.map((data, index) => (
          <Image src={data.urls.thumb} alt={data.alt_description} key={index} />
        ))}
        {Collection.map((data, index) => (
          <Image src={data.urls.thumb} alt={data.alt_description} key={index} />
        ))}
      </div>
    </div>
  );
}

export default App;
