import React from "react";

const deveRole = [
  "FullStack Developer",
  "Android Developer",
  "FrontEnd Developer"
];

export default class FormHiring extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      age: "",
      maritalStatus: false,
      value: "",
      role: "",
      array: []
    };
  }

  handleChange = (e) => {
    let { name, checked, type, value } = e.target;
    //console.log("name:",name,"checked",checked,"type",type,"value",value)
    let val = type === "checkbox" ? checked : type === "radio" ? value : value;
    this.setState({
      [name]: val
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    let { name, age, maritalStatus, value, role,array } = this.state;
    let item = {
      name: name,
      age: age,
      maritalStatus: maritalStatus,
      value: value,
      role: role
    };
    this.setState({ array: [...array, item] });
    this.resetForm();
  };
  resetForm = () => {
    this.setState({
      name: "",
      age: "",
      maritalStatus: false,
      value: "",
      role: ""
    });
  };

  render() {
    let { name, age, array } = this.state;
    console.log(this.state);
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label>
              Name
              <input
                type="text"
                name="name"
                value={name}
                onChange={this.handleChange}
              />
            </label>
          </div>
          <div>
            <label>
              Age
              <input
                type="text"
                name="age"
                value={age}
                onChange={this.handleChange}
              />
            </label>
          </div>
          <div>
            <label>
              Marital Status
              <input
                type="checkbox"
                name="maritalStatus"
                onChange={this.handleChange}
                checked={this.state.maritalStatus}
              />
            </label>
          </div>
          <div>
            <label>
              M
              <input
                type="radio"
                name="value"
                value="Male"
                onChange={this.handleChange}
              />
            </label>
            <label>
              F
              <input
                type="radio"
                name="value"
                value="Female"
                onChange={this.handleChange}
              />
            </label>
            <label>
              T
              <input
                type="radio"
                name="value"
                value="Transgender"
                onChange={this.handleChange}
              />
            </label>
          </div>
          <div>
            <select
              onChange={this.handleChange}
              value={this.state.role}
              name="role"
            >
              {deveRole.map((item) => (
                <option value={item}>{item}</option>
              ))}
            </select>
          </div>
          <input type="submit" value="submit" />
        </form>
        <div>
          <table border="1">
            {array.map((item) => {
              return (
               
                <tr>
                  <td>{item.name}</td>
                  <td>{item.age}</td>
                  <td>{item.maritalStatus ? "Married" : "UnMarried"}</td>
                  <td>{item.value}</td>
                  <td>{item.role}</td>
                </tr>
              );
            })}
          </table>
        </div>
      </>
    );
  }
}
