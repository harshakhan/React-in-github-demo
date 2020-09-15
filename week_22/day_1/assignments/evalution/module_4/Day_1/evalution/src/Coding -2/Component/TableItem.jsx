import React from "react";

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
     
    } = this.props;

    return (
      <>
        <div style={{ border: "1px solid  black", margin: "20px" ,padding:"10px"}}>
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
              {remote ? "Yes" : "No"}
            </div>
            
          </div>
        </div>
      </>
    );
  }
}

export default TableItem;
