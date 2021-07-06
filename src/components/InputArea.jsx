import React, { useState } from "react";

function InputArea(props) {
  const [item, setItem] = useState("");
  function onInput(event) {
    const newItem = event.target.value;
    setItem(newItem);
  }

  return (
    <div className="form">
      <input
        onChange={onInput}
        value={item}
        type="text"
        placeholder="Add Items"
      />
      <button
        onClick={() => {
          props.onAdd(item);
          setItem("");
        }}
      >
        <span>Add</span>
      </button>
      <button onClick={props.onClear}>
        <span>Clear</span>
      </button>
    </div>
  );
}

export default InputArea;
