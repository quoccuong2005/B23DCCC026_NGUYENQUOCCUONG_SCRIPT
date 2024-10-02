import React from 'react';
import './App.css';
import ToDoList from './todolist';
import ToDoItem from './todoitem';

function App() {
  return (
    <div className="App">
       <ToDoList></ToDoList>
      <ToDoItem></ToDoItem>
    </div>
  );
}

export default App;