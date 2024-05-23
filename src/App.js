import logo from "./logo.svg";
import "./App.css";

import useFetch from "./components/useFetch";
import { useState } from "react";

function App() {
  const [id, setId] = useState("");
  const [url, setUrl] = useState("https://jsonplaceholder.typicode.com/users");
  const { data, loading } = useFetch(url);
  if (loading) return <p>hi</p>;

  //   console.log(data);

  const handleChange = (e) => {
    setId(e.target.value);

  };
  console.log("value: ", id);

  const handleClick = () => {
    if (id) {
        setUrl(`https://jsonplaceholder.typicode.com/users/${id}`)
    }
    setId("")
  };

  return (
    <div>
      <input
        type="text"
        value={id}
        placeholder="Enter Your Id...."
        onChange={handleChange}
      />
      <button onClick={handleClick}>Click</button>
      {
        data && (
            <div>
                <h1>{data.id}</h1>
                <h1>{data.name}</h1>
            </div>
        )
        
      }

    </div>
  );
}

export default App;
