import React from "react";
import { v4 as uuid } from "uuid";

export default class DeleteTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      data: []
    };
  }

  renderChange = (event) => {
    const { name, value } = event.target;

    this.setState({
      [name]: value
    });
  };

  renderSubmit = (event) => {
    event.preventDefault();
    const { name, email, data } = this.state;

    const item = {
      deleteId: uuid(),
      name: name,
      email: email
    };

    this.setState({
      data: [...data, item]
    });
  };

  renderDelete = (deleteId) => {
    const { data } = this.state;
    const info = data.filter((d) => d.deleteId!== deleteId);
    this.setState({ data: info });
  };

  render() {
    const { data } = this.state;
    console.log(this.state);
    return (
      <>
        <form onSubmit={this.renderSubmit}>
          <div>
            <label>
              Name:
              <input
                type="text"
                placeholder="full name"
                name="name"
                value={this.state.name}
                onChange={this.renderChange}
              />
            </label>
          </div>

          <div>
            <label>
              Email:
              <input
                type="email"
                placeholder="email"
                name="email"
                value={this.state.email}
                onChange={this.renderChange}
              />
            </label>
          </div>

          <input type="submit" value="ADD" />
        </form>

        <div>
          {data.map((item) => (
            <div key={item.deleteId}>
              {" "}
              {item.name} {item.email}
              <button onClick={() => this.renderDelete(item.deleteId)}>Delete</button>
            </div>
          ))}
        </div>
      </>
    );
  }
}
