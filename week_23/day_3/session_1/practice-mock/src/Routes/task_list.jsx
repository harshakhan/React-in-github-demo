import React from "react";
import Styles from "./all.module.css";
import axios from "axios"
import {Link} from "react-router-dom"

export default class Tasks extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            data: []
        }
    }

    componentDidMount() {
        this.fetchTodo()
    }

    fetchTodo = async () => {
        await axios
            .get("http://localhost:3000/task")
            .then((res) => {
                this.setState({
                    data: res.data,
                });
            })
            .catch((error) => alert(error));
    };



    render() {
        const data = this.state.data
        return (
            <>
                {data && data.map((item) => (

                     
                  <Link to={`/tasks/${item.id}`}> <div className={Styles.tasks_div}>
                        <p
                            className={item.status ? `${Styles.done} ${Styles.task}` : Styles.task}
                        >
                            {item.title}
                        </p>
                        
                    </div>
                    </Link> 
                ))}
            </>
        )
    }

}
