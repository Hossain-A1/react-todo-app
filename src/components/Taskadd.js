import { useRef, useState } from "react";

const Taskadd = () => {
  const [task, setTask] = useState("");
  const inputRef = useRef(null);
  //  Add task Handeler
  const addTaskHandeler = (e) => {
    e.preventDefault();
    // post task into surver
    taskPosting(task)


    inputRef.current.blur();
    setTask('')
  };

  // task postion
  const taskPosting = async(text)=>{
 const res = await   fetch('https://aluminum-delicate-snowshoe.glitch.me/tasks',{
  method: 'post',
  headers:{
    'Content-type': 'application/json'
  },
  body: JSON.stringify({text})
 })
  }
  return (
    <form
      className="container mx-auto bg-green-900 flex justify-between p-10"
      onSubmit={addTaskHandeler}
    >
      <input
        ref={inputRef}
        required
        value={task}
        onChange={(e) => setTask(e.target.value)}
        type="text"
        placeholder="what is to do?"
        className="bg-transparent outline-none border-b-2 py-2 focus:border-green-500"
      />
      <button
        type="submit"
        className="bg-neutral-900 py-2 px-4 rounded border-2 border-gray-900 hover:bg-green-900 duration-300"
      >
        Add task
      </button>
    </form>
  );
};

export default Taskadd;
