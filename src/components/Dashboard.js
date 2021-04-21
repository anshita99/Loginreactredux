import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

function Welcome({ userData }) {
  return (
    <div>
      {userData == "" ? (
          <div>
          <br/>
          <div className="container">
        <h1 className=" card text-black bg-danger ">Sorry User Register Yourself!!</h1>
        </div>
        </div>
      ) : (
        <center>
          {" "}
          <h1 className=" card text-black bg-success ">DASHBOARD</h1>
          <hr />
          <div className="container">
          <div className=" conatiner card text-black bg-info ">
            <h2>Welcome User</h2>
            <h4>{userData.email}</h4>
            </div>
            <br/>
            <div>
            <Link to="/"><button className="btn btn-warning" >Logout</button></Link>
            </div>
          </div>
        </center>
      )}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    userData: state.inputs.value,
  };
};

export default connect(mapStateToProps, null)(Welcome);
