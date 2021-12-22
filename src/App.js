import { useState } from "react";
import "./App.css";
import { SearchImages } from "./components/api";
import Image from "./components/Image";
import Loader from "./components/Loader";
import InfiniteScroll from "react-infinite-scroll-component";
import axios from "axios";
import { useEffect } from "react/cjs/react.development";

function App() {
  const [query, setQuery] = useState("");
  const [searchQ, setSearchQ] = useState();
  const [collection, setCollection] = useState([]);
  const [isSearch, setIsSearch] = useState(false);
  const SearchCollection = SearchImages(searchQ, setSearchQ);

  const search = (e) => {
    e.preventDefault();
    setSearchQ(query);
    setIsSearch(true);
  };

  const fetchImages = () => {
    const clientId = "l9TopwNImt3LKnyxRkYkNvcjklZB-46C5GKzwMD3ubo";
    setTimeout(() => {
      axios
        .get("https://api.unsplash.com/photos/random?client_id=" + clientId + "&count=10")
        .then((res) => {
          setCollection([...collection, ...res.data]);
        })
        .catch((e) => console.error(e));
    }, 1200);
  };

  useEffect(() => {
    fetchImages();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (query === "") {
      setIsSearch(false);
    }
  }, [query]);

  return (
    <div className="App">
      <form onSubmit={search}>
        <input type="text" placeholder="Search" onChange={(e) => setQuery(e.target.value)} />
        <button type="submit">Search</button>
      </form>

      {isSearch ? (
        <div className="container">
          {SearchCollection.map((data, index) => (
            <Image src={data.urls.thumb} alt={data.alt_description} key={index} />
          ))}
        </div>
      ) : (
        <InfiniteScroll
          dataLength={collection.length}
          hasMore={true}
          next={fetchImages}
          loader={<Loader />}
        >
          <div className="container">
            {collection.map((data, index) => (
              <Image src={data.urls.thumb} alt={data.alt_description} key={index} />
            ))}
          </div>
        </InfiniteScroll>
      )}
    </div>
  );
}

export default App;
