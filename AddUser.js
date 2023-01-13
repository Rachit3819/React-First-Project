import React, { useState } from "react";
import classes from "./AddUser.module.css";
import Card from "../UI/Card";
import Button from "./Button";
const AddUser = (props) => {
  const [entereduserName, setEntereduserName] = useState("");
  const [entereduserage, setEntereduserage] = useState("");
  const addUserHandler = (event) => {
    event.preventDefault();
    if (
      entereduserName.trim().length === 0 ||
      (entereduserage === 0)
    ) {
      alert("Please Enter the valid text ")
      return
    }
    if (entereduserage<1){
      alert("Please enter the valid age ")
      return
    }
    props.onAddUser(entereduserName,entereduserage);
    setEntereduserName("");
    setEntereduserage("");
  };
  const usernameChangeHandler = (event) => {
    setEntereduserName(event.target.value);
  };
  const userAgeChangeHandler = (event) => {
    setEntereduserage(event.target.value);
  };
  return (
    <Card className={classes.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor="userName">Name</label>
        <input
          id="userName"
          type="text"
          onChange={usernameChangeHandler}
          value={entereduserName}
        />
        <label htmlFor="userAge">Age</label>
        <input
          id="userAge"
          type="number"
          onChange={userAgeChangeHandler}
          value={entereduserage}
        />
        <Button type="Submit">AddUser</Button>
      </form>
    </Card>
  );
};
export default AddUser;
