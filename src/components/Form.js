import React, { useEffect, useState } from "react";
import { addData } from "../redux/action/FormAction";
import { useDispatch } from "react-redux";
import { Redirect } from "react-router";
import { Link } from "react-router-dom";

function Form() {
  const [value, setValue] = useState({
    
    email: "",
    password: "",
    currpass: "",
    number: "",
    gender: "",

  });
  const [flag, setFlag] = useState(false);
  const dispatch = useDispatch();
  var passReg = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;

  const validation = (e) => {
    e.preventDefault();
    const minNum = 10;
    const passlen = 6;

    if (value.password != value.currpass) {
      alert("passwords do not match, check again");
    } else if (value.password.length < passlen) {
      alert("Password should be atleast 6 characters long");
    } else if (value.number.length !== minNum) {
      alert("enter a valid mobile numer");
    } else if (!value.password.match(passReg)) {
      alert(
        "Password should contain 1 Uppercase,number and a special character"
      );
    } else if (value.gender == "") {
      alert("please enter gender");
    } else {
      dispatch(addData(value));
      alert("submitted");
      setFlag(true);
    }
  };
  return (
    <div >
        <nav class="navbar navbar-dark bg-dark">
  <div class="container col-sm-1">
   <div>
     <Link to="/"><button className="btn btn-warning" >home</button></Link>
   </div>
  </div>
</nav>
      <br />
      <div className=" container card text-black bg-danger ">
        <h1>Registration Form</h1>
        <form onSubmit={(e) => validation(e)} className="container form-group form-width" >
          <label>Email</label>
          <br />
          <input
            className="form-control"
            type="email"
            id="email"
            name="email"
            onChange={(e) => setValue({ ...value, email: e.target.value })}
            required
          />
          <br />
          <label>Password</label>
          <br />
          <input
            className="form-control"
            type="password"
            id="pass1"
            name="pass1"
            onChange={(e) => setValue({ ...value, password: e.target.value })}
            required
          />
          <br />
          <label>Current Password</label>
          <br />
          <input
            className="form-control"
            type="password"
            id="pass2"
            name="pass2"
            onChange={(e) => setValue({ ...value, currpass: e.target.value })}
            required
          />
          <br />
          <label>Phone</label>
          <br />
          <input
            className="form-control"
            type="number"
            id="num"
            name="num"
            min="0"
            onChange={(e) => setValue({ ...value, number: e.target.value })}
            required
          />
          <br />
          <label>Gender</label>
          <br />
          <input
            type="radio"
            id="gender"
            name="gender"
            value="male"
            onChange={(e) => setValue({ ...value, gender: e.target.value })}
            required
          />
          Male
          <br />
          <input
            type="radio"
            id="gender"
            name="gender"
            value="female"
            onChange={(e) => setValue({ ...value, gender: e.target.value })}
            required
          />
          Female
          <br />
          <button type="submit" className="btn btn-warning m-2">
            Submit
          </button>
        </form>
      </div>
      {flag ? <Redirect to="/dashboard" /> : null}
    </div>
  );
}

export default Form;