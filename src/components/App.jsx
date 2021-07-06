import React, { useState } from "react";
import InputArea from "./InputArea";
import TODoItem from "./ToDoItem";

function App() {
  const [itemArray, setItemArray] = useState([]);

  function onAdd(inputText) {
    setItemArray((previousItem) => {
      return [...previousItem, inputText];
    });
  }
  function onClear(event) {
    setItemArray([]);
  }
  function deleteItem(id) {
    setItemArray((previousItem) => {
      return previousItem.filter((item, index) => {
        return index !== id;
      });
    });
  }
  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <InputArea onAdd={onAdd} onClear={onClear} />
      <div>
        <ul>
          {itemArray.map((item, index) => (
            <TODoItem
              key={index}
              id={index}
              text={item}
              deleteItem={deleteItem}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
