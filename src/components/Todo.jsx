import { useState } from "react";
import closeIcon from "../assets/close.svg";

const Todo = ({ todos, id, setTodos }) => {
  let todosCopy = [...todos];
  return (
    <div className="w-full">
      {id > 0 && <hr />}
      <div className="  py-5 h-fit w-full">
        <div className=" flex justify-between px-4 w-full">
          <p
            className={`bg-white outline-none ${
              todosCopy[id].completed ? "line-through-custom" : ""
            }  placeholder:text-yellow-950 text-lg font-bold`}
            onClick={() => {
              todosCopy[id].completed = !todosCopy[id].completed;
              setTodos(todosCopy);
            }}
          >
            {todos[id].name}
          </p>
          <div
            className="btn-2"
            onClick={() => {
              console.log("onclick");
              todosCopy.splice(id, 1);
              setTodos(todosCopy);
            }}
          >
            <img className="w-3 h-3" src={closeIcon} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Todo;
