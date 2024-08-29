import { memo } from "react";
import CompletedTodos from "./CompletedTodos";
import TotalTodos from "./TotalTodos";

function Footer({ todos }) {
  console.log("Footer rerendered");

  return (
    <footer className="py-3 bg-yellow-600 flex justify-center items-center">
      <div className=" w-60% flex items-center justify-between">
        <TotalTodos totalTodos={todos.length} />
        <CompletedTodos todos={todos} />
      </div>
    </footer>
  );
}

export default memo(Footer);
