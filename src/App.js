import { useEffect, useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Taskadd from "./components/Taskadd";
import Tasklist from "./components/Tasklist";

const App = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    // geting data from the server
    fetchingData();
  }, []);

  // fetching data
  const fetchingData = async () => {
    try {
      const res = await fetch(
        "https://aluminum-delicate-snowshoe.glitch.me/tasks"
      );

      if (!res.ok) throw new Error("sopmething went wrong");
      const data = await res.json();
      setTasks(data);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="wrapper bg-gradient-to-t from-fuchsia-200 to-violet-900 min-h-screen text-xl text-gray-50 flex flex-col py-10">
      <Header />
      <Taskadd />
      <Tasklist tasks={tasks}/>
      <Footer />
    </div>
  );
};

export default App;
