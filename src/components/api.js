import { useEffect, useState } from "react";
import axios from "axios";

const LoadImages = () => {
  const [state, setState] = useState([]);
  useEffect(() => {
    axios
      .get("https://api.unsplash.com/photos/?client_id=VP3vNPwuUesOW3z54cpzJJ1pUPqW4aUoPWYt5aGEI6Y")
      .then((res) => setState(res.data))
      .catch((e) => console.error(e));
  }, []);

  return state;
};

export default LoadImages;

export const SearchImages = (query, setQuery) => {
  const [state, setState] = useState([]);
  useEffect(() => {
    if (query) {
      axios
        .get(
          "https://api.unsplash.com/search/photos?query=" +
            query +
            "&client_id=VP3vNPwuUesOW3z54cpzJJ1pUPqW4aUoPWYt5aGEI6Y"
        )
        .then((res) => {
          setState(res.data.results);
          setQuery("");
        })
        .catch((e) => console.error(e));
    }
  }, [query, setQuery]);

  return state;
};
