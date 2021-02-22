import React, { useState, useEffect } from 'react';

export default function TodoList() {
  const [todoList, setTodoList] = useState([]);
  useEffect(() => {
    fetch('/api/todos')
      .then(res => res.json())
      .then(result => {
        setTodoList(result);
      });
  });

  const listItems = todoList.map(todo => {
    const { isCompleted, task, todoId } = todo;
    return (
      <li key={todoId}>
        <div>
          <p>{task}</p>
          <span>{isCompleted}</span>
        </div>
      </li>
    );
  });

  return (
    <ul className="todo-list-container">
      {listItems}
    </ul>
  );
}
