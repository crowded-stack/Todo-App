import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";
import { useState } from "react";

function App() {
  const [todos, setTodos] = useState([]);

  return (
    <div className=" h-screen">
      <Header />
      <Main todos={todos} setTodos={setTodos} />
      <Footer todos={todos} />
    </div>
  );
}

export default App;
