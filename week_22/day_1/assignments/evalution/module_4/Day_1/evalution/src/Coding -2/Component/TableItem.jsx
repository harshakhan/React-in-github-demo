import React from "react";
import styles from "./form.module.css";
class TableItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isEdit: false,
      value: {
        ...props
      }
    };
  }

  // toggleEdit = () => {
  //   this.setState({
  //     isEdit: !this.state.isEdit
  //   });
  // };

  handleEdit = (e) => {
    let { name, value: val, type, checked } = e.target;
    val = type === "checkbox" ? checked : val;
    const { value } = this.state;

    this.setState({
      value: { ...value, [name]: val }
    });
  };

  handleUpdate = () => {
    const { value } = this.state;
    this.props.update(value.id, value);
    this.toggleEdit();
  };

  render() {
    const {
      name,
      date,
      company_name,
      location,
      salary,
      remote
      // handleDelete
    } = this.props;

    // const { isEdit, value } = this.state;

    // if (isEdit) {
    //   return (
    //     <>
    //       <div style={{ display: "flex", flex: "1" }}>
    //         <input
    //           onChange={this.handleEdit}
    //           style={{ flex: "1" }}
    //           name="name"
    //         ></input>
    //         <input
    //           onChange={this.handleEdit}
    //           style={{ flex: "1" }}
    //           name="date"
    //         ></input>
    //         <input onChange={this.handleEdit} style={{ flex: "1" }}></input>
    //         <div style={{ flex: "1" }}>{location}</div>
    //         <div style={{ flex: "1" }}>{salary}</div>
    //         <div style={{ flex: "1" }}>{remote ? "Yes" : "No"}</div>
    //         <button onClick={this.handleUpdate} style={{ flex: "1" }}>
    //           Update
    //         </button>
    //         <button onClick={this.toggleEdit} style={{ flex: "1" }}>
    //           Cancel
    //         </button>
    //       </div>
    //     </>
    //   );
    // }

    return (
      <>
        <div style={{ border: "1px solid  black", margin: "20px" }}>
          <div style={{ display: "flex", flex: "1" }}>
            <div style={{ flex: "1" }}>
              <p>Title</p>
              {name}
            </div>
            <div style={{ flex: "1" }}>
              <p>Date</p>
              {date}
            </div>
            <div style={{ flex: "1" }}>
              <p>Company Name</p>
              {company_name}
            </div>
            <div style={{ flex: "1" }}>
              <p>Location</p>
              {location}
            </div>
            <div style={{ flex: "1" }}>
              <p>Salary</p>
              {salary}
            </div>
            <div style={{ flex: "1" }}>
              <p>Remote</p>
              <div className ={remote ? styles.green : styles.red}></div>
            </div>
            {/* <button onClick={handleDelete} style={{ flex: "1" }}>
            DELETE
          </button> */}
            {/* <button onClick={() => this.toggleEdit()} style={{ flex: "1" }}>
            EDIT
          </button> */}
          </div>
        </div>
      </>
    );
  }
}

export default TableItem;
