// import React from 'react';
import { connect } from "react-redux";
import TaskList from './TaskList';
import { addTaskAC, uppdateTextAC, deleteTaskAC, editTaskAC } from './Redux/reducer_TaskList';

let mapStateToProps = state => {
    return {
        TaskData: state.TaskList.TaskData,
        textValue: state.TaskList.textValue,
        textDescriptionValue: state.TaskList.textDescriptionValue,
        findTextTask: state.TaskList.findTextTask,
    };   
};

let mapDispatchToProps = dispatch =>{
    return {
        addTask: (tText, dText) => dispatch(addTaskAC(tText, dText)),
        uppdateText: (tText, dText, fText) => dispatch(uppdateTextAC(tText,dText,fText)),
        deleteTask: (id) => dispatch(deleteTaskAC(id)),
        editTask: (id) => dispatch(editTaskAC(id)),
    };
}

let TaskList_Container = connect(mapStateToProps, mapDispatchToProps)(TaskList);

export default TaskList_Container;