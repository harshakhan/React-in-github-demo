import React from "react";
import axios from "axios";

export default function FilterGit() {
 
  const [query, setQuery] = React.useState("masai");
  const [data, setData] = React.useState([]);
  const [page, setPage] = React.useState(1);

  React.useEffect(() => {
    axios
      .get("https://api.github.com/search/users", {
        params: {
          q: query,
          page: page
        }
      })
      .then((res) => {
        setData(res.data.items);
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  }, [page]);

  return (
    <div className="FilterGit">
    
      <h3>Github Filter Page </h3>
      <input value={query} onChange={(e) => setQuery(e.target.value)} />
      <select onChange={(e) => setPage(e.target.value)}>
        {[1, 2, 3].map((item) => (
          <option key={item} value={item}>
            {" "}
            {item}
          </option>
        ))}
      </select>
      {data.map((item) => (
        <div key={item.id}> {item.login}</div>
      ))}
    </div>
  );
}

