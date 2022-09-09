import React from 'react';
import { NavLink, Routes, Route } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import Home from './Pages/Home';
import TodoItemPage from './Pages/TodoItemPage';
import TodosPage from './Pages/TodosPage';
import UserItemPage from './Pages/UserItemPage';
import UsersPage from './Pages/UsersPage';
import styles from './App.module.css';

const App = () => {
  return (
    <BrowserRouter>
      <div className='app'>
        <div className={styles.nav__panel}>
          <NavLink className={styles.nav__link} to='/'>
            Home
          </NavLink>
          <NavLink className={styles.nav__link} to='/users'>
            Users
          </NavLink>
          <NavLink className={styles.nav__link} to='/todos'>
            Todos
          </NavLink>
        </div>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/users' element={<UsersPage />} />
          <Route path='/todos' element={<TodosPage />} />
          <Route path='/users/:id' element={<UserItemPage />} />
          <Route path='/todos/:id' element={<TodoItemPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
