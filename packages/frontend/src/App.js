import React, { useState, useEffect } from 'react';
import './App.css';

// INTENTIONAL ISSUE: API_URL should use environment variable or relative URL
const API_URL = 'http://localhost:3001/api/todos';

function App() {
  const [todos, setTodos] = useState([]);
  const [newTodoTitle, setNewTodoTitle] = useState('');
  const [loading, setLoading] = useState(false);
  // INTENTIONAL ISSUE: Missing error state
  // const [error, setError] = useState(null);

  // Load todos on component mount
  useEffect(() => {
    fetchTodos();
  }, []);

  // INTENTIONAL ISSUE: Missing error handling
  const fetchTodos = async () => {
    setLoading(true);
    const response = await fetch(API_URL);
    const data = await response.json();
    setTodos(data);
    setLoading(false);
  };

  // INTENTIONAL ISSUE: Missing validation and error handling
  const handleAddTodo = async (e) => {
    e.preventDefault();

    // TODO: Add validation for empty title

    const response = await fetch(API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title: newTodoTitle }),
    });

    const newTodo = await response.json();
    setTodos([...todos, newTodo]);
    setNewTodoTitle('');
  };

  // INTENTIONAL ISSUE: Missing optimistic update
  const handleToggleTodo = async (id) => {
    await fetch(`${API_URL}/${id}/toggle`, {
      method: 'PATCH',
    });

    // Refetch all todos (inefficient)
    fetchTodos();
  };

  // INTENTIONAL ISSUE: Missing implementation
  const handleDeleteTodo = async (id) => {
    // TODO: Implement delete functionality
    console.log('Delete todo:', id);
  };

  // INTENTIONAL ISSUE: Missing edit functionality entirely
  // const handleEditTodo = async (id, newTitle) => { ... }

  return (
    <div className="App">
      <div className="container">
        <header>
          <h1>TODO App</h1>
          <p className="subtitle">Session 5: Agentic Development</p>
        </header>

        <form onSubmit={handleAddTodo} className="add-todo-form">
          <input
            type="text"
            value={newTodoTitle}
            onChange={(e) => setNewTodoTitle(e.target.value)}
            placeholder="What needs to be done?"
            className="todo-input"
          />
          <button type="submit" className="add-button">
            Add Todo
          </button>
        </form>

        {loading && <div className="loading">Loading...</div>}

        {/* INTENTIONAL ISSUE: No empty state message */}
        <ul className="todo-list">
          {todos.map((todo) => (
            <li
              key={todo.id}
              className={`todo-item ${todo.completed ? 'completed' : ''}`}
            >
              <div className="todo-content">
                <input
                  type="checkbox"
                  checked={todo.completed}
                  onChange={() => handleToggleTodo(todo.id)}
                  className="todo-checkbox"
                />
                <span className="todo-title">{todo.title}</span>
              </div>
              <div className="todo-actions">
                {/* INTENTIONAL ISSUE: Edit button does nothing */}
                <button
                  className="edit-button"
                  onClick={() => console.log('Edit not implemented')}
                >
                  Edit
                </button>
                <button
                  className="delete-button"
                  onClick={() => handleDeleteTodo(todo.id)}
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>

        {/* INTENTIONAL ISSUE: Stats always show 0 */}
        <div className="todo-stats">
          <span>{0} items left</span>
          <span>{0} completed</span>
        </div>
      </div>
    </div>
  );
}

export default App;
