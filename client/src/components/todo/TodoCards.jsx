import React from "react";
import { AiFillDelete } from "react-icons/ai";
import { GrDocumentUpdate } from "react-icons/gr";

const TodoCards = ({ title, body }) => {
  return (
    <div className="p-3 todo-card">
      <div>
        <h4>{title}</h4>
        <p className="todo-p">{body.split("", 77)}....</p>
      </div>
      <div className="d-flex justify-content-around ">
        <div className="d-flex justify-content-center align-items-center card-icons-head px-2 py-1">
          <GrDocumentUpdate className="card-icons card-icons-head" />
          Update
        </div>
        <div className="d-flex justify-content-center align-items-center card-icons-head px-2 py-1 text-danger">
          <AiFillDelete className="card-icon del " />
          Delete
        </div>
      </div>
    </div>
  );
};

export default TodoCards;
