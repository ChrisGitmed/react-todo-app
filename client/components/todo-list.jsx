import React, { useState, useEffect } from 'react';

export default function TodoList() {
  const [todoList, setTodoList] = useState([]);
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    fetch('/api/todos')
      .then(res => res.json())
      .then(result => {
        setTodoList(result);
      });
  }, [toggle]);

  function handleClick(todoId, isCompleted) {
    const req = {
      method: 'put',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ isCompleted: !isCompleted })
    };
    fetch('/api/todos/' + todoId, req)
      .then(res => res.json())
      .then(result => {
        setToggle(!toggle);
      })
      .catch(err => {
        if (err) throw err;
      });
  }
  const listItems = todoList.map(todo => {
    const { isCompleted, task, todoId } = todo;
    return (
      <li key={todoId} onClick={ () => handleClick(todoId, isCompleted)}>
        <div className="row align-center justify-between">
          <p>{task}</p>
          <span style={{ color: 'green' }} className={isCompleted
            ? 'lnr lnr-checkmark-circle'
            : ''}>
          </span>
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
