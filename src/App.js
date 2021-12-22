import "./App.css";
import LoadImages from "./components/api";
import Image from "./components/Image";

function App() {
  const Collection = LoadImages();

  return (
    <div className="App">
      {Collection.map((data, index) => (
        <Image src={data.urls.thumb} alt={data.alt_description} key={index} />
      ))}
    </div>
  );
}

export default App;
