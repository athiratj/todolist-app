import React from 'react';
import AppNavbar from './components/AppNavbar';
import TodoList from './components/TodoList';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <div className="App">
      <AppNavbar />
      <TodoList />
    </div>
  );
}

export default App;
