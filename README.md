# To-Do List Application
This is a **To-Do List App** built using **React.js** and **CSS**, with **LocalStorage** and **SQLight** for persisting task data across browser sessions and storing the lists. The app allows users to manage their daily tasks with full CRUD functionality, categorize tasks by priority, and mark tasks as completed.

## Features

### User Features:
1. **Home Page (To-Do List):**
   - Displays a list of tasks, each showing:
     - Task title.
     - Description.
     - Priority rank (color-coded: blue for low, yellow for medium, red for high).
     - Action buttons to edit, delete, or mark the task as completed.

2. **Add Task Form:**
   - Inputs for:
     - Task title.
     - Task description.
     - Priority rank selection (Low, Medium, High).
   - Button to add the task to the to-do list.
   - Validation for required fields.

3. **Edit Task Page:**
   - Pre-filled form with the selected task's details.
   - Allows the user to update:
     - Task title.
     - Description.
     - Priority rank (Low, Medium, High).
   - Button to save changes.

4. **Completed Tasks Page:**
   - Displays a Complete button to use if tasks have been completed on the to-do list.

5. **Delete Task Confirmation:**
   - Button to confirm deletion.
   
6. **Task Priority Color Classification:**
   - Low priority tasks are displayed with a **blue** background.
   - Medium priority tasks are displayed with a **yellow** background.
   - High priority tasks are displayed with a **red** background.

======= 

7. **LocalStorage Integration:**
   - All tasks (to-do and completed) are stored in the browser's LocalStorage.
   - Tasks persist even after refreshing the browser or reopening the app.
   - Storing the list of items in SQLite.


### Navigation Bar:
- **Links:**
  - To-Do List (Displays the list of tasks to complete).
  - Edit Task (Form to edit a existing task).
  - Delete (Clears a task you do not wish to do anymore).


## Technology Stack
- **Frontend:** React.js
- **Styling:** CSS
- **Data Persistence:** LocalStorage (for storing tasks)
- **Data Storage:** SQLite


## Images
![To-Do List Screen](src/images/Todo.png)
![Edit Task Form](src/images/Todo4.png)


## Installation
To run this project locally, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/Cornel-MIT/Todo-List.git
   ```
2. Install the dependencies:
   ```bash
   cd react-js---TodoList
   npm install
   ```
3. Start the React development server:
   ```bash
   npm start
   ```
4. Open the app in your browser:
   ```
   http://localhost:3000

5. The app server is running on:
   ```
   http://localhost:3002 

6. Go into src/db to run the following:
   ```
   [ json-server --watch db.json --port 5000 ]

7. Domain Name:   
   ```
   https://todo-list-sooty-gamma-59.vercel.app/