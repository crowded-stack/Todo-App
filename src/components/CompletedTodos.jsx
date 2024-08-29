const CompletedTodos = ({ todos }) => {
  return (
    <div>
      <h1 className=" text-yellow-950 text-3xl font-extrabold">
        Completed Todos:{" "}
        {(() => {
          let comp = todos.filter((a) => a.completed);
          return comp.length;
        })()}
      </h1>
    </div>
  );
};

export default CompletedTodos;
