
import { CiEdit } from "react-icons/ci";
import { MdDeleteForever } from "react-icons/md";
const Itemtask = ({task}) => {

  return (
    <div className="task-item flex justify-between items-center bg-gray-600 p-5 rounded hover:bg-gradient-to-r hover: from-green-600 duration-200 group">
      <div>
        <span className="task-left flex gap-2">
          <input type="checkbox" className="accent-green-400"/>
          <p  className="group-hover:text-green-200">{task.text}</p>
        </span>
      </div>
      <div className="task-right flex gap-4">
    <span>   <CiEdit className="cursor-pointer text-gray-300 duration-300 hover:text-gray-900"/> </span>
    <span><MdDeleteForever className="cursor-pointer text-gray-300 hover:text-red-600 duration-300"/> </span>
      </div>
    </div>
  );
};

export default Itemtask;
 