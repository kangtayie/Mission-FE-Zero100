import Text from "./component/Text1";
import Input from "./component/Input";
import Button from "./component/Button";
import CheckBox from "./component/CheckBox";

function App() {
  const tasks=[
    {id: "eat", label: "Eat", checked: true},
    {id: "sleep", label:"Sleep", checked: false},
    {id: "repeat", label:"Repeat", checked: false},
  ];

  return (
    <>
      <div style={{padding:"10px"}}>
        <div className="Header">
          <Text as="h1" text="TodoMatic"/>
          <Text as="h2" text="What needs to be done?"/>
        </div>

        <div>
          <Input />
          <Button text="Add"></Button>
        </div>

        <div>
          <Button text="Show All tasks" />
          <Button text="Show active tasks" />
          <Button text="Show completed tasks" />
        </div>

        <Text as="h2" text="3 tasks remaining"></Text>

        <ul>
          {tasks.map((task)=>(
            <li key={task.id}>
              <CheckBox id={task.id}/>
              <label>{task.label}</label>
              <div>
                <Button text={`Edit ${task.label}`}/>
                <Button text={`Delete ${task.label}`}/>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}

export default App
