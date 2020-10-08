import React from "react";
import { profileRequest } from "../Redux/actions";
import { connect } from "react-redux";
import Style from "./navbar.module.css";
import { Redirect } from "react-router-dom";

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    console.log("hello");
    let { current_user, token, profileRequest } = this.props;

    let payload = {
      username: current_user,
      token,
    };
    profileRequest(payload);
  }

  render() {
    let { user_data, isLoading } = this.props;
    if(!this.props.isAuth){
        return <Redirect to="/login" />
    }
    return (
      <div>

        {isLoading ? (
          <p>Loading</p>
        ) : (
          <>
          <div className={Style.profileCard}>
            <h1>PROFILE</h1>
            <p style={{fontSize:"30px"}}>Name : {user_data.name}</p>
            <p style={{fontSize:"30px"}}>Email : {user_data.email}</p>
            <p style={{fontSize:"30px"}}>Username : {user_data.username}</p>
            <p style={{fontSize:"30px"}}>Mobile : {user_data.mobile}</p>
            <p style={{fontSize:"30px"}}>description : {user_data.description}</p>

          </div>
          </>
        )}

      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    current_user: state.current_user,
    isLoading: state.isLoading,
    token: state.token,
    user_data: state.user_data,
    isAuth:state.isAuth
  };
};

const mapDispatchToProps = (dispatch) => ({
  profileRequest: (payload) => dispatch(profileRequest(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
