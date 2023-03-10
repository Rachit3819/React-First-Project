import React from "react";
import Card from "../UI/Card";
import classes from "./UserList.module.css";
function UserList(props) {
  return (
    <Card className={classes.users}>
      <ul>
        {props.users.map((user) => (
          <li key={Math.random()}>
            {user.name} ({user.age}is year old) {user.collegeName}
          </li>
        ))}
      </ul>
    </Card>
  );
}
export default UserList;
