import uuid from 'react-uuid';

const addTask = 'add';
const deleteTask = 'delete';
const editTask = 'edit';
const uppdateText = 'uppdate';
const findTask = 'find';

const initialState = {
    TaskData:[],
    textValue: '',
    textDescriptionValue: '',
    findTextTask: '',
}

let reducer_TaskList = (state = initialState, action)=>{
    window.s = state.TaskData;
    switch(action.type){
        case addTask:
            return {
                ...state,
                TaskData: [...state.TaskData, 
                        {
                         id: uuid(),
                         titleTask: action.titleTask,
                         description: action.descriptionTask,
                         status: 'WIP', 
                         date: 'none',
                        }],
                textValue: '',
                textDescriptionValue: '',
            };
        case deleteTask:
            return {
                ...state,
                TaskData:[...state.TaskData.filter(t => t.id !== action.taskID)]
            };
        case editTask:
            const a = state.TaskData.find(t => t.id === action.taskID);
            return{
                ...state,
                TaskData:[...state.TaskData.filter(t => t.id !== action.taskID)],
                textValue: a.titleTask,
                textDescriptionValue: a.description,
            };
        case uppdateText:
            return{
                ...state,
                textValue: action.newtText,
                textDescriptionValue: action.newdText,
                findTextTask: action.fText,
            };
        
        // case findTask:
            // return state.TaskData.map(

            // );

        default:
            return state;
    }
};

export let addTaskAC = (tText, dText) => ({type: addTask, titleTask: tText, descriptionTask: dText});
export let deleteTaskAC = (id) => ({type: deleteTask, taskID: id});
export let editTaskAC = (id) => ({type: editTask, taskID: id,});
export let findTaskAC = () => ({type: findTask});
export let uppdateTextAC = (tText,dText, fText) => ({type: uppdateText, newtText: tText, newdText: dText, fText: fText});

export default reducer_TaskList;