import { useContext } from "react";
import {TaskContext} from '../context/TaskContext';

export default function TaskCard({ task }) {

  const {deleteTask} = useContext(TaskContext)

  return (
    
      <div className="cards">
        <h1 className="title">{task.title}</h1>
        <p className="desc">{task.description} </p>
        <button className="buttons" onClick={() => deleteTask(task.id)}>Delete Task</button>
      </div>
    
  );
}
