import React from 'react';
import InputBox from '../components/input-box';
import TodoList from '../components/todo-list';

export default function Home() {
  return (
    <div className="page-container">
      <InputBox />
      <TodoList />
    </div>
  );
}
