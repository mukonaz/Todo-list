import React, { useEffect, useState } from 'react';
import axios from 'axios';

export const Home = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [newPriority, setNewPriority] = useState('Medium');
  const [editIndex, setEditIndex] = useState(null);

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      const response = await axios.get('http://localhost:8000/tasks');
      setTasks(response.data.data);
    } catch (error) {
      console.error('Error fetching tasks:', error);
    }
  };

  const handleTaskChange = (event) => {
    setNewTask(event.target.value);
  };

  const handlePriorityChange = (event) => {
    setNewPriority(event.target.value);
  };

  const addOrEditTask = async () => {
    if (newTask.trim() !== '') {
      if (editIndex !== null) {
        try {
          await axios.put(`http://localhost:8000/tasks/${editIndex}`, {
            text: newTask,
            priority: newPriority,
          });
          fetchTasks();
          setEditIndex(null);
        } catch (error) {
          console.error('Error updating task:', error);
        }
      } else {
        try {
          await axios.post('http://localhost:8000/tasks', {
            text: newTask,
            priority: newPriority,
          });
          fetchTasks();
        } catch (error) {
          console.error('Error adding task:', error);
        }
      }
      setNewTask('');
      setNewPriority('Medium');
    }
  };

  const deleteTask = async (index) => {
    try {
      await axios.delete(`http://localhost:8000/tasks/${index}`);
      fetchTasks();
    } catch (error) {
      console.error('Error deleting task:', error);
    }
  };

  const editTask = (index) => {
    const task = tasks.find((task) => task.id === index);
    setNewTask(task.text);
    setNewPriority(task.priority);
    setEditIndex(index);
  };

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
        {tasks.map((task) => (
          <li key={task.id}>
            <span className='text' style={{ color: getPriorityColor(task.priority) }}>
              {task.text} ({task.priority})
            </span>
            <button className='edit-button' onClick={() => editTask(task.id)}>
              Edit
            </button>
            <button className='delete-button' onClick={() => deleteTask(task.id)}>
              Delete
            </button>
          </li>
        ))}
      </ol>
    </div>
  );
};
