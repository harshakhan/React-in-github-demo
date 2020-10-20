import React from "react";
import Styled from "styled-components";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "../App.css";
import { FaRegUserCircle } from "react-icons/fa";

const RegisterContaier = Styled.div`
margin: 7% auto 0 auto;
width:100%;
height:700px;
background-color:white;
border-radius:30px;
background: #A1FFCE;  /* fallback for old browsers */
background: -webkit-linear-gradient(to right, #FAFFD1, #A1FFCE);  /* Chrome 10-25, Safari 5.1-6 */
background: linear-gradient(to right, #FAFFD1, #A1FFCE); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */


box-shadow: 10px 10px 5px grey;

img {
    height: 700px;
    width: 100%;
    border-radius: 30px 0 0 30px;
}
`;

const FormContent = Styled.div`
margin-top:120px;

input{
    background: transparent;
    margin-top:20px;
}
h5{
    margin-top:-12px;
}
`;

const Register=() =>{
  return (
    <>
      <div className="container">
        <RegisterContaier>
          <div className="row">
            <div className="col-6">
              <img
                src="https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80"
                alt="logo"
              />
            </div>
            <div className="col-6">
              <FormContent>
                <h1 className="logoFont" style={{marginLeft:"30%"}}>
                  <div style={{fontSize:"68px",marginLeft:"11%"}}>

                <FaRegUserCircle /> 
                  </div>
                  SIGN UP
                </h1>
                <p className="ml-3">Create your account</p>
                <div className="col-lg-9">
                  <Form.Control size="lg" type="text" placeholder="Enter Your Full Name" />
                </div>
                <div className="col-lg-9">
                  <Form.Control
                    size="lg"
                    type="text"
                    placeholder="Enter your Email Address"
                  />
                </div>
                <div className="col-lg-9">
                  <Form.Control size="lg" type="text" placeholder="Create your Password" />
                </div>
                <div className="col-lg-9 mt-4">
                  <Button size="lg" block style={{ background: "black" }}>
                    Register
                  </Button>
                </div>
                <p className="text-muted mt-4 ml-3">Already have a acount? Login here</p>
                <h6 className="mt-5 ml-3">Terms of use. Privacy policy</h6>
              </FormContent>
            </div>
          </div>
        </RegisterContaier>
      </div>
    </>
  );
}
export {Register}
