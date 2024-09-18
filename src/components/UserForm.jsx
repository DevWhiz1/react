import React from "react";
import "./userform.css"
const UserForm = () => {
  return (
    <>
      <div className="container">
        <h2 className="heading">Add User</h2>
        <form className="form">
            <div className="form-group">
                <label className="label">Name:</label><br/>
                <input type="text" name ="name" className="input" required></input>
            </div>
            <div className="form-group">
                <label className="label">Enter Email</label><br/>
                <input type="email" name ="email" className="input" required></input>
            </div>
            <div className="form-group">
                <label className="label">Enter Password:</label><br/>
                <input type="password" name ="password" className="input" required></input>
            </div>
            <button type="submit" className="button">Add user</button>
        </form>
      </div>
    </>
  );
};

export default UserForm;
