import React, { useState } from 'react';

export const Home = () => {
  const [tasks, setTasks] = useState([
    { text: 'Eat', priority: 'Medium' },
    { text: 'Shower', priority: 'Low' },
    { text: 'Code', priority: 'High' },
  ]);
  const [newTask, setNewTask] = useState('');
  const [newPriority, setNewPriority] = useState('Medium');
  const [editIndex, setEditIndex] = useState(null);

  function handleTaskChange(event) {
    setNewTask(event.target.value);
  }

  function handlePriorityChange(event) {
    setNewPriority(event.target.value);
  }

  function addOrEditTask() {
    if (newTask.trim() !== '') {
      if (editIndex !== null) {
        const updatedTasks = tasks.map((task, index) =>
          index === editIndex ? { text: newTask, priority: newPriority } : task
        );
        setTasks(updatedTasks);
        setEditIndex(null);
      } else {
        setTasks(t => [...t, { text: newTask, priority: newPriority }]);
      }
      setNewTask('');
      setNewPriority('Medium');
    }
  }

  function deleteTask(index) {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  }

  function editTask(index) {
    setNewTask(tasks[index].text);
    setNewPriority(tasks[index].priority);
    setEditIndex(index);
  }

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'High':
        return 'red';
      case 'Medium':
        return 'yellow';
      case 'Low':
        return 'green';
      default:
        return 'black';
    }
  };

  return (
    <div className='to-do-list'>
      <h1>To-Do-List</h1>
      <div>
        <input
          type='text'
          placeholder='Enter a task...'
          value={newTask}
          onChange={handleTaskChange}
        />
        <select className='combobox' value={newPriority} onChange={handlePriorityChange}>
          <option value='High'>High</option>
          <option value='Medium'>Medium</option>
          <option value='Low'>Low</option>
        </select>
        <button className='add-button' onClick={addOrEditTask}>
          {editIndex !== null ? 'Edit' : 'Add'}
        </button>
      </div>
      <ol>
        {tasks.map((task, index) => (
          <li key={index}>
            <span className='text' style={{ color: getPriorityColor(task.priority) }}>
              {task.text} ({task.priority})
            </span>
            <button className='edit-button' onClick={() => editTask(index)}>
              Edit
            </button>
            <button className='delete-button' onClick={() => deleteTask(index)}>
              Delete
            </button>
          </li>
        ))}
      </ol>
    </div>
  );
};
