import React, {useState,useEffect} from "react";

import axios from "axios";

export default function Github() {

  const [query, setQuery] = React.useState("masai");
  const [data, setData] = React.useState([]);



  useEffect(() =>{
      console.log("Success query or data updated", query,data);
  },[data, query]);

  const handleClick = () => {
    axios
      .get("https://api.github.com/search/users", {
        params: {
          q: query,
        }
      })
      .then((res) => {
        setData(res.data.items);
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="Github">
      <h3> Github Serach </h3>
      <input value={query} onChange={(e) => setQuery(e.target.value)} />
      <button onClick ={handleClick}>Search</button>
      {data.map((item) => (
        <div key={item.id}> {item.login}</div>
      ))}
    </div>
  );
}