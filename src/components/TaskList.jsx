import TaskCard from "./TaskCard.jsx";
import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";

function TaskList() {

  const { tasks } = useContext(TaskContext)

  if (tasks.length === 0) {
    return <h1>There are no tasks at the moment</h1>;
  }

  return (
    <div className="taskList">
      {tasks.map((task) => (
        <TaskCard key={task.id} task={task} />
      ))}
    </div>
  );
}

export default TaskList;
