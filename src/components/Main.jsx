import AddTodo from "./AddTodo";
import { useEffect, useState } from "react";
import Todo from "./Todo";

function Main({ todos, setTodos }) {
  useEffect(() => {
    console.log(todos);
  }, [todos]);

  return (
    <main className=" h-75% flex items-center justify-center w-screen">
      <div className="h-75% flex justify-center w-50% items-center  flex-col gap-3 ">
        <AddTodo todos={todos} setTodos={setTodos} />
        <div className="overflow-y-scroll rounded-2xl shadow-lg items-center no-scrollbar flex w-70% flex-col">
          {todos
            .sort((a, b) => b.id - a.id)
            .sort((a, b) => a.completed - b.completed)
            .map((todo, index) => {
              return (
                <Todo
                  key={index}
                  todos={todos}
                  setTodos={setTodos}
                  id={index}
                />
              );
            })}
        </div>
      </div>
    </main>
  );
}

export default Main;
