import React, { useState } from 'react';
import './index.css'
function App() {
  const [todos, setTodos] = useState([]);
  const [inputval, setInputval] = useState('');

  function handleInputChange(e){
    setInputval(e.target.value);
  };

  function handleSubmit (e){
    e.preventDefault();
    setTodos((prevTodos) => [...prevTodos, inputval]);
    setInputval('');
  };

  function handleRemove(index){
    setTodos((prevTodos) => prevTodos.filter((_,i) => i !== index));
  };

  return (
    <div id="form">
       

        <form onSubmit={handleSubmit}>
        <h1 id="todo">To Do List</h1>
          <input id="" type="text" placeholder="Enter the text" name="entry" value={inputval} onChange={handleInputChange} />
          <button id="add">Add task</button>
        </form>        
        <ul>
          {todos.map((todo, index) => (
            <p key={index} id="task_2"> {todo} <button id="remove" onClick={() => handleRemove(index)}>Remove</button>
          </p>
          ))}
        </ul>
    </div>
  );
};

export default App;
