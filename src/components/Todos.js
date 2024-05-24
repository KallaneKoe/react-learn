import React, { useEffect, useState } from "react";
import TodoItems from "./TodoItems";
import AddTodo from "./AddTodo";

import axios from "axios";
const Todos = () => {
  const [todoState, setTodoState] = useState([]);

  useEffect(() => {
    const getTodo = async () => {
      try {
        const res = await axios.get(
          "https://jsonplaceholder.typicode.com/todos?_limit=10"
        );
        setTodoState(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getTodo();
  }, []);

  const markComplete = (id) => {
    const newTodo = todoState.map((todo) => {
      if (todo.id === id) {
        todo.status = !todo.status;
      }
      return todo;
    });
    setTodoState(newTodo);
  };

  const deleteTodo = async (id) => {
    try {
      await axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`);
      const newTodos = todoState.filter((todo) => todo.id !== id);
      setTodoState(newTodos);
    } catch (error) {
      console.log(error.message);
    }
  };

  const addTodo = async (title) => {
    try {
      const res = await axios.post(
        "https://jsonplaceholder.typicode.com/todos",
        {
          title,
          completed: false,
        }
      );
      console.log(res.data);
      const newTodos = [...todoState, res.data];
      setTodoState(newTodos);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div>
      <AddTodo addTodoFunc={addTodo} />
      {todoState.map((todo) => {
        return (
          <TodoItems
            key={todo.id}
            todoProps={todo}
            markCompleteFunc={markComplete}
            deleteTodoFunc={deleteTodo}
          />
        );
      })}
    </div>
  );
};

export default Todos;
