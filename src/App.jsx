import { useState } from "react"

export default function App () {

  const [tasks, setTasks] = useState([])
  const [newTask, setNewTask] = useState("")

  function inputTask (e) {
    setNewTask(e.target.value)
  }

  function addTask (e) {
    if (newTask.trim() !== "") {
      setTasks(t => [...t, newTask])
      setNewTask("")
    } else {
      alert("Please enter a task")
    }
    
  }

  function deleteTask (index) {
    const updatedTasks = tasks.filter((_, i) => i !== index)
    setTasks(updatedTasks)
  }

  function moveUpTask (index) {
    const updatedTasks = [...tasks]
    if (index > 0) {
      [updatedTasks[index], updatedTasks[index - 1]] = 
      [updatedTasks[index - 1], updatedTasks[index]]
      setTasks(updatedTasks)
    }
    
  }

  function moveDownTask (index) {
    const updatedTasks = [...tasks]
    if (index < tasks.length - 1) {
      [updatedTasks[index], updatedTasks[index + 1]] = 
      [updatedTasks[index + 1], updatedTasks[index]]
      setTasks(updatedTasks)
    }
  }

    return (
        <div className="todo-app">
          <h1>Todo App <i style={{fontSize: "15px"}}>by Ridwan</i></h1>
          <div className="input-field">
            <input type="text" 
                 value={newTask} 
                 onChange={inputTask}
                 placeholder="Enter task"
                 maxLength={30} />
            <button onClick={addTask} >Add</button>
          </div>
          

          <div className="lists">
            <ol>
              {tasks.map((task, index) => 
                <li 
                key={index}>
                  <span>{task}</span>
                  <button className="del-btn" onClick={() => deleteTask(index)}>Delete</button>
                  <button className="up-btn" onClick={() => moveUpTask(index)} disabled={index === 0} >⬆️</button>
                  <button className="down-btn" onClick={() => moveDownTask(index)} disabled={index === tasks.length - 1}>⬇️</button>
                </li>
              )}
            </ol>
          </div>
        </div>
    )
}