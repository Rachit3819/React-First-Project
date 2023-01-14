import React, { Fragment, useState } from "react";
import AddUser from "./Component/User/AddUser";
import UserList from "./Component/User/UserList";

function App() {
  const [userList, setUserList] = useState([]);
  const addUserHandler = (uName, uAge, uCollegeName) => {
    setUserList((previousList) => {
      return [
        ...previousList,
        { age: uAge, name: uName, collegeName: uCollegeName },
      ];
    });
  };
  return (
    <Fragment>
      <AddUser onAddUser={addUserHandler} />
      <UserList users={userList} />
    </Fragment>
  );
}

export default App;
