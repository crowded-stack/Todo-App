import { memo } from "react";

function Header() {
  console.log("rendered");

  return (
    <header className=" flex items-center justify-center text-center py-3 bg-yellow-600">
      <h1 className=" text-center text-4xl font-extrabold">TODO LIST</h1>
    </header>
  );
}

export default memo(Header);
