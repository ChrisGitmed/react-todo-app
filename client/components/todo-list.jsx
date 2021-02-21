import React, { useEffect } from 'react';

export default function TodoList() {

  useEffect(() => {
    fetch('/api/todos')
      .then(res => {
        // eslint-disable-next-line no-console
        console.log('res: ', res);
      });
  });

  return (
    <div className="todo-list-container">
      <ul className="todo-list"></ul>
    </div>
  );
}
