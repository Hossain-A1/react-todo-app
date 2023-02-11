import Itemtask from './Itemtask';
const Tasklist = ({tasks}) => {
  return (
    <div className='container mx-auto flex flex-col gap-3 bg-green-900 p-10 '>
     {
      tasks.map((task)=> <Itemtask task={task} key={task.id}/>)  
     }
    </div>
  )
}

export default Tasklist