import { useState } from "react";
import axios from "axios";

const LoadImages = () => {
  const [state, setState] = useState([]);
  axios
    .get("https://api.unsplash.com/photos/?client_id=VP3vNPwuUesOW3z54cpzJJ1pUPqW4aUoPWYt5aGEI6Y")
    .then((res) => setState(res.data))
    .catch((e) => console.error(e));

  return state;
};

export default LoadImages;
