import React, { useState } from 'react';

export default function InputBox() {
  const [task, setTask] = useState('');

  function handleChange(event) {
    setTask(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    const req = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ task })
    };
    fetch('/api/todos', req)
      .then(res => {
        setTask('');
      })
      .catch(err => {
        if (err) throw err;
      });
  }

  return (
    <form className="row input-box" onSubmit={handleSubmit}>
      <input type="text" name="task" placeholder="Enter a task:" value={task} onChange={handleChange}/>
      <button><span className="lnr lnr-plus-circle"></span></button>
    </form>
  );
}
