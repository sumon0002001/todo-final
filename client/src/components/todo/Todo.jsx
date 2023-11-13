import React, { useState } from "react";
import "./todo.css";

const Todo = () => {
  const [input, setInput] = useState({ title: "", body: "" });
  const show = () => {
    document.getElementById("textarea").style.display = "block";
  };

  const change = (e) => {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
  };

  const submit = () => {
    console.log(input);
    setInput({ title: "", body: "" });
  };
  return (
    <div className="todo">
      <div className="todo-main container d-flex justify-content-center align-items-center my-4 flex-column">
        <div className="d-flex flex-column todo-inputs-div w-50 p-1">
          <input
            type="text"
            placeholder="Title"
            className="my-2 p-2 todo-inputs"
            name="title"
            value={input.title}
            onChange={change}
            onClick={show}
          />
          <textarea
            id="textarea"
            type="text"
            placeholder="Body"
            name="body"
            value={input.body}
            onChange={change}
            className="p-2 todo-inputs"
          />
        </div>
        <div className="w-50 d-flex justify-content-end my-3">
          <button className="home-btn px-2 py-1" onClick={submit}>
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default Todo;
