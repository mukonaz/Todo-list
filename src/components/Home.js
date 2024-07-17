import React from 'react'
import  { useState } from 'react'

export const Home = () => {

  const [tasks, settasks] = useState(["Eat", "Shower", "code"]);
  const [newtask, setNewTask] = useState("");

  function handleInputChange(event){
    setNewTask(event.target.value);

  }

  function addTask() {

    if(newtask.trim() !== ""){
      settasks(t => [...t, newtask]);
      setNewTask("");
    }
  }

  function deletetask(index) {
    const updatedTask = tasks.filter((element, i) => i !== index);
    settasks(updatedTask);

  }


  return (
    <div className='to-do-list'>

      <h1>To-Do-List</h1>

      <div>
        <input type='text' placeholder='Enter a task..' value={newtask} onChange={handleInputChange}/>

        <button className='add-button' onClick={addTask}>Add</button>
      </div>
      <ol>
        {tasks.map((task, index) =>
          <li key={index}>
            <span className='text'>{task}</span>
            <button className='delete-button' onClick={() => deletetask(index)}>Delete</button>
          </li>
        
        )}

      </ol>
    </div>
  )
}
