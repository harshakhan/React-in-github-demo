import React from "react";
import TableItem from "./TableItem";

export default class Table extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filter: "all",
      sort: null
    };
  }

  handleFilterChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  };

  render() {
    const { data, updateTask } = this.props;
    const { filter, sort } = this.state;
    return (
      <>
        <div
          style={{
            border: "2px solid black",
            borderRadius: "15px",
            width: "40%",
            marginTop: "20px",
            padding: "20px"
          }}
        >
          <div>
            {" "}
            Filter :
            <select
              onChange={this.handleFilterChange}
              name="filter"
              value={filter}
            >
              {["all", "Bangalore", "Chennai", "Delhi"].map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </div>
          <div>
            {" "}
            Short :
            <select onChange={this.handleFilterChange} name="sort" value={sort}>
              {["all", "asc", "desc"].map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </div>
        </div>
        <hr />
        <div>
          {data
            ?.filter((item) => {
              if (filter === "all") {
                return true;
              }
              return filter === item.location;
            })
            .sort((a, b) => {
              if (sort === null) {
                return 0;
              }
              if (sort === "asc") {
                return a.salary - b.salary;
              } else if (sort === "desc") {
                return b.salary - a.salary;
              }
            })
            .map((item) => (
              <TableItem
                key={item.id}
                handleDelete={() => this.props.handleDelete(item.id)}
                {...item}
                update={updateTask}
              />
            ))}
        </div>
      </>
    );
  }
}
