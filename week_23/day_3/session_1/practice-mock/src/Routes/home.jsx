import React from "react";
import { v4 as uuid } from "uuid";
import Styles from "./all.module.css"
import axios from "axios"

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
    };
  }


  handleSubmit = async () => {

    let payload = {
      id: uuid(),
      title: this.state.value,
      status: false,
    };

    await axios.post("http://localhost:3000/task", {...payload})
    .then((res)=>alert(res))
    .catch((error) => alert(error));
  }

  

  render() {
    return (
      <>

        <div className={Styles.container}>
        <div className={Styles.todo_input_div}>
        <button className={Styles.todo_add} onClick={this.handleSubmit}>+</button>
          <input
            className={Styles.todo_input}
            placeholder="Add a to-do here"
            value={this.state.value}
            onChange={(e) => this.setState({ value: e.target.value })}
            spellCheck="false"
          />
          </div>
          <div className={Styles.batch}>TODO ITEMS</div>

          <div className={Styles.batch}>SHOW COMPLETED TO-DOS</div>
          
        </div>
      </>
    );
  }
}