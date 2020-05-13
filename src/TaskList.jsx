import React from 'react';
import './TaskList.css';
import uuid from 'react-uuid';


let Task = props =>{
  let uID = uuid();
  return(
    <div className="task">
      <div className="action">
        <button onClick={props.editTask}><img src="./img/edit.png" alt=""/></button>
        <button onClick={props.deleteTask}><img src="./img/trash.png" alt=""/></button>
      </div>
      <div className="wrap">
      <input className="click" type="checkbox" name="" id={uID}/>
      <label htmlFor={uID}>
      <div className="header_task">
        <span>{props.titleTask}</span>
        <div className="task_info">
          <span>Status: {props.status}</span>
          <span>Due to: {props.date}</span>
        </div>
      </div>
      </label>
      <div className="footer_task">{props.description}</div>
      </div>
    </div>
  );
}




let TaskList = props => {

let arrTask = props.TaskData.map(t => <Task deleteTask={() =>props.deleteTask(t.id)} editTask={() =>props.editTask(t.id)} key={t.id} titleTask={t.titleTask} description={t.description} status={t.status} date={t.date}/> );

let tytleTask = React.createRef();
let descriptionTask = React.createRef();
let findTextTask = React.createRef();

let add = () =>{
  let tText = tytleTask.current.value;
  let dText = descriptionTask.current.value;
  props.addTask(tText,dText);
}

let uppdate = () =>{
  let tText = tytleTask.current.value;
  let dText = descriptionTask.current.value;
  let fText = findTextTask.current.value;
  props.uppdateText(tText,dText, fText)
}

  return (
    <div className="taskList">
        <div className="wrapper">

          {/* Разметка фильраци Задач */}
          <div className="searchTask">
            <input onChange={uppdate} value={props.findTextTask} ref={findTextTask} type="search" placeholder='Search...'/>
            <button><img src="./img/zoom.png" alt=""/></button>
          </div>

          {/* Разметка для добавления сообщений */}
          <div className="createTask">
            <div className="header_create">
              <input onChange={uppdate} ref={tytleTask} value={props.textValue} type="text" placeholder="Title task"/>
              <div className="info">
                <span>Status: WIP</span>
                <span>Due to: none</span>
              </div>
            </div>
            <div className="footer_create">
              <textarea onChange={uppdate} value={props.textDescriptionValue} ref={descriptionTask}  cols="100" rows="6" placeholder="Description title..." />
              <button onClick={add}>ADD TASK</button>
            </div>
          </div>

          {/* Массив JSX разметки с задачами */}
          {arrTask}

        </div>
    </div>
  );
}

export default TaskList;