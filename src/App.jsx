import TaskList from "./components/TaskList";
import TaskForm  from "./components/TaskForm";

function App() {


   return (
    <main className="house">  
      <div className="container">
      <TaskForm />
      <TaskList />
      </div>
    </main>
  );
}

export default App;
