import React,{useState} from 'react'
import AddUser from "./Component/User/AddUser";
import UserList from "./Component/User/UserList";


function App() {
  const [userList,setUserList]=useState([])
  const addUserHandler=(uName,uAge)=>{
    setUserList((previousList)=>{
      return [...previousList,{age:uAge,name:uName}]
    })
  }
  return (
    <div>
      <AddUser onAddUser={addUserHandler}/>
      <UserList users={userList}/>
    </div>
  );
}

export default App;
