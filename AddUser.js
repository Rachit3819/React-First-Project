import React, { useState } from "react";
import classes from "./AddUser.module.css";
import Card from "../UI/Card";
import Button from "../UI/Button";
import ErrorModule from "../UI/ErrorModel";
const AddUser = (props) => {
  const [entereduserName, setEntereduserName] = useState("");
  const [entereduserage, setEntereduserage] = useState("");
  const [entereduserCollegeName, setUserCollegeName] = useState("");
  const [error, setError] = useState();

  const addUserHandler = (event) => {
    event.preventDefault();
    if (
      entereduserName.trim().length === 0 ||
      entereduserage === 0 ||
      entereduserCollegeName.trim().length === 0
    ) {
      setError({
        title: "Invalid Input",
        message: "Please enter the details",
      });
      return;
    }
    if (entereduserage < 1) {
      setError({
        title: "Invalid Age",
        message: "Please enter the age",
      });
      return;
    }
    props.onAddUser(entereduserName, entereduserage, entereduserCollegeName);
    setEntereduserName("");
    setEntereduserage("");
    setUserCollegeName("");
  };
  const usernameChangeHandler = (event) => {
    setEntereduserName(event.target.value);
  };
  const userAgeChangeHandler = (event) => {
    setEntereduserage(event.target.value);
  };
  const CollegeNameChangeHandler = (event) => {
    setUserCollegeName(event.target.value);
  };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <div>
      {error && (
        <ErrorModule
          title={error.message}
          message={error.title}
          onConfirm={errorHandler}
        />
      )}
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
          <label htmlFor="CollegeName">CollegeName</label>
          <input
            id="collegeName"
            type="text"
            onChange={CollegeNameChangeHandler}
            value={entereduserCollegeName}
          />
          <Button type="Submit">AddUser</Button>
        </form>
      </Card>
    </div>
  );
};
export default AddUser;
