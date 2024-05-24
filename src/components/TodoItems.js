import React from "react";

const TodoItems = (props) => {
  return (
    <div
      className={`bg-[#f4f4f4] text-2xl p-5 border-black-1 ${
        props.todoProps.status ? "line-through" : ""
      }`}
    >
      {" "}
      <input
        type="checkbox"
        className="m-2"
        onChange={props.markCompleteFunc.bind(this, props.todoProps.id)}
        checked={props.todoProps.status}
      />
      {props.todoProps.title}
      <button
        className="float-right"
        onClick={props.deleteTodoFunc.bind(this, props.todoProps.id)}
      >
        Xoá
      </button>
    </div>
  );
};

export default TodoItems;
