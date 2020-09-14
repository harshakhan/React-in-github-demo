import React from "react";
import Form from "./Form";
import { v4 as uuid } from "uuid";
import Table from "./Table";


export default class FormWrapper extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      name: "",
      date: "",
      company_name: "",
      location: "",
      salary: "",
      remote: false
    };
  }

  onChange = (e) => {
    const { name, value, type, checked } = e.target;

    const val = type === "checkbox" ? checked : value;

    this.setState({
      [name]: val
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { data, ...formState } = this.state;
    const newData = [...data, { ...formState, id: uuid() }];
    this.setState({
      data: newData
    });
  };
  render() {
    const { data, ...formState } = this.state;

    return (
      <>
        <div
          style={{
            border: "2px solid black",
            borderRadius: "15px",
            width: "40%",
            padding: "20px"
          }}
        >
          <h2> Add a New Job</h2>
          <Form onSubmit={this.handleSubmit}>
            <div>
              <label>
                Title:
                <input value={data.name} name="name" onChange={this.onChange} />
              </label>
            </div>

            <div>
              <label>
                Date:
                <input
                  style={{ padding: "10px" }}
                  type="date"
                  value={data.date}
                  name="date"
                  onChange={this.onChange}
                />
              </label>
            </div>

            <div>
              <label>
                Company Name:
                <input
                  value={data.company_name}
                  name="company_name"
                  onChange={this.onChange}
                />
              </label>
            </div>

            <div>
              <label>
                Location :
                <select
                  onChange={this.onChange}
                  name="location"
                  value={data.location}
                >
                  {["Bangalore", "Chennai", "Delhi."].map((item) => (
                    <option kry={item} value={item}>
                      {item}
                    </option>
                  ))}
                </select>
              </label>
            </div>

            <div>
              <label>
                Salary:
                <input
                  value={data.salary}
                  name="salary"
                  onChange={this.onChange}
                />
              </label>
            </div>

            <div>
              <label>
                Remote :
                <input
                  checked={data.remote}
                  name="remote"
                  type="checkbox"
                  onChange={this.onChange}
                />
              </label>
            </div>
            <div>
              <input type="submit" value="SUBMIT" />
            </div>
          </Form>
        </div>

        <Table
          data={data}
          
        />
      </>
    );
  }
}
