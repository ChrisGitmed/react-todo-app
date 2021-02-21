import React from 'react';

export default function InputBox() {
  return (
    <div className="row input-box">
      <input type="text" placeholder="Enter a todo:" />
      <button type="submit">{'<+>'}</button>
    </div>
  );
}
