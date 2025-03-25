import { useState } from "react";
import "./App.css";
import Text from "./component/Text";
import Button from "./component/Button";
import Checkbox from "./component/Checkbox";
import Input from "./component/Input";

function App(){

  const [tasks, setTasks] =useState([
    {id:1,text:'Eat',checked:true},
    {id:2,text:'Sleep',checked:false},
    {id:3,text:'Repeat',checked:false},

  ]);

  const [newTask, setNewTask] = useState("");

  const addTask = () => {
    if (newTask.trim() === "") return; 
    setTasks([...tasks, { id: tasks.length + 1, text: newTask, checked: false }]);
    setNewTask("");
  };
   
  return (
  <div className="App">
    <Text text="TodoMatic" type="h1" />
    <Text text="What needs to be done?" type="h2" />
    <Input value={newTask} onChange={(e) => setNewTask(e.target.value)} placeholder="Add a task" />
    <Button label="Add" onClick={addTask} />
    <br />
    <Button label="Show all tasks" onClick={() => {}} />
    <Button label="Show active tasks" onClick={() => {}} />
    <Button label="Show completed tasks" onClick={() => {}} />
    <Text text={`${tasks.filter((t) => !t.checked).length} tasks remaining`} type="h2" />

{tasks.map((task) => (
  <div key={task.id}>
    <Checkbox 
      checked={task.checked} 
      onChange={() => {
        setTasks(tasks.map((t) =>
          t.id === task.id ? { ...t, checked: !t.checked } : t
        ));
      }}
    />
    <Text text={task.text} type="p" />
  </div>
))}
</div>
);
}

export default App;
    
    
   