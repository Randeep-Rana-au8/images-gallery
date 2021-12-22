import { useEffect, useState } from "react";
import axios from "axios";

export const SearchImages = (query, setQuery) => {
  const [state, setState] = useState([]);
  const clientId = "l9TopwNImt3LKnyxRkYkNvcjklZB-46C5GKzwMD3ubo";
  useEffect(() => {
    if (query) {
      axios
        .get(
          `https://api.unsplash.com/search/photos?query=" +
            query +
            "&client_id=${clientId}`
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
