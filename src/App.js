import './App.css';
import { Card } from './components/card';
import { useState } from 'react';

function App() {

  const [users, setUsers] = useState([
    {
      name: "Mary Doe",
      id: 1,
      age: 30,
      photo: "./images/avatar-01.jpeg",
    },
    {
      name: "Jane Doe",
      id: 2,
      age: 25,
      photo: "./images/avatar-02.jpeg",
    },
    {
      name: "Vladimir Cocos",
      id: 3,
      age: 23,
      photo: "./images/avatar-03.jpeg",
    },
    {
      name: "Myshell Poma",
      id: 4,
      age: 22,
      photo: "./images/avatar-04.jpeg",
    }
  ])

  const handleClearButton = () =>{
    setUsers([])
  }

  return (
    <div className="wrapper">
      <Card users={users} clear={handleClearButton} />
    </div>
  );
}

export default App;
