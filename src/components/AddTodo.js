import React, { useState } from "react";

const AddTodo = (props) => {
  const addTodo = props.addTodoFunc;
  const [title, setTitle] = useState("");

  const changeTitle = (event) => {
    setTitle(event.target.value);
  };

  const addSingleTodo = (event) => {
    event.preventDefault();
    if (title !== "") {
      addTodo(title);
      setTitle("");
    }
  };
  return (
    <form className="flex  justify-evenly text-2xl" onSubmit={addSingleTodo}>
      <input
        type="text"
        name="title"
        placeholder="insert here"
        className="flex p-2"
        onChange={changeTitle}
        value={title}
      />
      <input type="submit" value="Thêm" className="flex p-[5px] " />
    </form>
  );
};

export default AddTodo;
