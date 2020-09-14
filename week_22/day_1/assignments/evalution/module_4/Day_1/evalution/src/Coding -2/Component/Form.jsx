import React from "react";

export default class Form extends React.Component {
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

  render() {
    const { onSubmit } = this.props;

    return (
      <>
        <form onSubmit={onSubmit}>{this.props.children}</form>
      </>
    );
  }
}
