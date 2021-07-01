import React, { useState } from "react";

function App() {
  const [item, setItem] = useState("");
  const [itemArray, setItemArray] = useState([]);
  function onInput(event) {
    const newItem = event.target.value;
    setItem(newItem);
  }
  function onAdd(event) {
    setItemArray((previousItem) => {
      return [...previousItem, item];
    });
    setItem("");
  }
  function onClear(event) {
    setItemArray([]);
  }
  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input
          onChange={onInput}
          value={item}
          type="text"
          placeholder="Add Items"
        />
        <button onClick={onAdd}>
          <span>Add</span>
        </button>
        <button onClick={onClear}>
          <span>Clear</span>
        </button>
      </div>
      <div>
        <ul>
          {itemArray.map((item) => (
            <li>{item} </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
