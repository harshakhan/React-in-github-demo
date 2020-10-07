import React from "react";
import axios from "axios";
import { fetchUserData } from "../Redux/actions";
import { connect } from "react-redux";

class Github extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ""
    };
  }

  render() {
    const { value } = this.state;
    const { userData, fetchUserData, isLoading, isError } = this.props;
    return (
      <div>
        <input
          onChange={e =>
            this.setState({
              value: e.target.value
            })
          }
          value={value}
        />
        <button onClick={() => fetchUserData(value)}>SEARCH</button>
        <div>{isLoading && "LOADING"}</div>
        {!isLoading &&
          userData &&
          userData.map(item => <div key={item.id}> {item.login} </div>)}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  userData: state.app.userData,
  isLoading: state.app.isLoading,
  isError: state.app.isError
});

const mapDispatchToProps = dispatch => ({
  fetchUserData: payload => dispatch(fetchUserData(payload))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Github);
