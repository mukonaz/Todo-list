const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const db = require('./database');

const app = express();
const port = 8000;

app.use(cors());
app.use(bodyParser.json());

// Get all tasks
app.get('/tasks', (req, res) => {
  db.all("SELECT * FROM tasks", [], (err, rows) => {
    if (err) {
      res.status(400).json({"error": err.message});
      return;
    }
    res.json({
      "message": "success",
      "data": rows
    });
  });
});

// Add a new task
app.post('/tasks', (req, res) => {
  const { text, priority } = req.body;
  db.run(`INSERT INTO tasks (text, priority) VALUES (?, ?)`, [text, priority], function(err) {
    if (err) {
      res.status(400).json({"error": err.message});
      return;
    }
    res.json({
      "message": "success",
      "data": {
        id: this.lastID,
        text,
        priority
      }
    });
  });
});

// Delete a task
app.delete('/tasks/:id', (req, res) => {
  db.run(`DELETE FROM tasks WHERE id = ?`, req.params.id, function(err) {
    if (err) {
      res.status(400).json({"error": err.message});
      return;
    }
    res.json({"message": "deleted", "changes": this.changes});
  });
});

// Edit a task
app.put('/tasks/:id', (req, res) => {
  const { text, priority } = req.body;
  db.run(`UPDATE tasks SET text = ?, priority = ? WHERE id = ?`, [text, priority, req.params.id], function(err) {
    if (err) {
      res.status(400).json({"error": err.message});
      return;
    }
    res.json({
      "message": "updated",
      "data": {
        id: req.params.id,
        text,
        priority
      }
    });
  });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
