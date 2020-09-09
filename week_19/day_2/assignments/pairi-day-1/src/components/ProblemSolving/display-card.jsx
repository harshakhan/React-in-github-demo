import React from "react";
import { v4 as uuid } from "uuid";
import Button from "./Button";
import Container from "./Container"

export default class DisplayCard extends React.Component {
    constructor(props){
        super(props);
        this.state ={
            data: [
                {
                  "name": "Agnes",
                  "dob": "10th December, 1992"
                },
               { 
                  "name": "Mridul",
                  "dob": "9th Jan, 1991"
                },
              {
                  "name": "Pranav",
                  "dob": "27th October, 1992"
                },
              ], 
              activeIndex: -1
        };
    }

    handleNameChange = (index) =>{
        this.setState({
            activeIndex: index
        })
    }
    render(){
        const {activeIndex,data}=this.state;
        return (
            <>
                <h3>DisplayCard</h3>

                <div style={{display:"flex",flexDirection: "row"}}>
                    <div>
                        {data.map((item,index)=>(
                            <div key={index}>
                                <Button 
                                active={index === activeIndex}
                                label = {item.name}
                                onClick={() => this.handleNameChange(index)}
                                />
                            </div>
                        ))}
                    </div>
                    {activeIndex !== -1 && (
                        <Container
                        name={data[activeIndex].name}
                        dob={data[activeIndex].dob}
                        />
                    )}
                </div>
            </>
        )
    }
}