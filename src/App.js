
import './App.css';
import { useEffect, useState } from 'react';
import UserData from './component/UserData';

const api ="https://jsonplaceholder.typicode.com/users"
function App() {
  
  const [users, setUsers]= useState([]);

  const fetchUsers = async (url) => {
    try{
      const res= await fetch(url);
      const data = await res.json();
      if(data.length > 0){
        setUsers(data);
      }
      console.log(data);

    }catch(e){
      console.error(e);
    }

  }
  useEffect(() => {
    fetchUsers(api);
  },  [])
  return (
    <table>
      <thead>
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th>Email</th>
          <th>Address</th>
        </tr>
      </thead>
      <tbody>
        <UserData users={users}/>
      </tbody>
    </table>
  );
}

export default App;
