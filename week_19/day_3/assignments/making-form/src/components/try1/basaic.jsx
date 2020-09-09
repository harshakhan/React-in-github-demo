import React from "react";
import { v4 as uuid } from "uuid";

export default class HiringForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      age: "",
      maritalStatus: false,
      gender: "",
      role: "",
      data: []
    };
  }

  handleChange = (e) => {
    const { name, value, checked, type } = e.target;
    const val = type === "checkbox" ? checked : value;

    this.setState({
      [name]: val
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { name, age, maritalStatus, gender, role, data } = this.state;

    const item = {
      id: uuid(),
      name: name,
      age: age,
      maritalStatus: maritalStatus,
      gender: gender,
      role: role
    };

    this.setState({
      data: [...data, item]
    });
  };

  render() {
    console.log(this.state)
    const { data } = this.state;
    // console.log(data);
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label>
              Full Name:
              <input
                type="text"
                placeholder="full name"
                name="name"
                value={this.state.name}
                onChange={this.handleChange}
              />
            </label>
          </div>

          <div>
            <label>
              Age:
              <input
                type="number"
                placeholder="age"
                name="age"
                value={this.state.age}
                onChange={this.handleChange}
              />
            </label>
          </div>

          <div>
            <label>
              Marital Status:
              <input
                type="checkbox"
                name="maritalStatus"
                value={this.state.maritalStatus}
                onChange={this.handleChange}
              />
            </label>
          </div>

          <div>
            <h3>Gender</h3>
            <label>
              Male:
              <input
                type="radio"
                name="gender"
                value="male"
                onChange={this.handleChange}
              />
            </label>

            <label>
              Female:
              <input
                type="radio"
                name="gender"
                value="female"
                onChange={this.handleChange}
              />
            </label>

            <label>
              Do not prefer to reveal:
              <input
                type="radio"
                name="gender"
                value="other"
                onChange={this.handleChange}
              />
            </label>
          </div>

          <div>
            <label>
              role:
              <select
                name="role"
                value={this.state.role}
                onChange={this.handleChange}
              >
                {[
                  "Full Stack developer",
                  "Android Developer",
                  "Frontend Developer"
                ].map((item) => (
                  <option key={item} value={item}>
                    {item}
                  </option>
                ))}
              </select>
            </label>
          </div>
          <input type="submit" value="Submit" />
        </form>

        <div>
          {data.map((item) => (
            <div key={item.id}>
              {" "}
              {item.name} {item.age}
              {item.maritalStatus}
              {item.gender} {item.role}{" "}
            </div>
          ))}
        </div>

        <br />
        <table>
          <thead>
            <th>Full Name</th>
            <th>Age</th>
            <th>Marital Status</th>
            <th>Gender</th>
            <th>Role</th>
          </thead>
        </table>
      </>
    );
  }
}
