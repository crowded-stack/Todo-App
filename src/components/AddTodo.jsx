import { useState } from "react";

const AddTodo = ({ todos, setTodos }) => {
  const [todo, setTodo] = useState({});

  return (
    <div className=" rounded-2xl  py-5 px-7 shadow-lg w-full h-fit">
      <form
        action=""
        onSubmit={(e) => {
          e.preventDefault();
          setTodos([todo, ...todos]);
          setTodo({ name: "", completed: false });
        }}
        className=" flex justify-between w-full"
      >
        <input
          onChange={(e) =>
            setTodo({
              id: todos.length + 1,
              name: e.target.value,
              completed: false,
            })
          }
          className=" bg-white outline-none  placeholder:text-gray-500  text-lg "
          type="text"
          placeholder="Add a task..."
          value={todo.name}
        />
        <button className=" btn text-lg ">Add</button>
      </form>
    </div>
  );
};

export default AddTodo;
