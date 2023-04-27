import { useReducer } from "react";
import AddTask from './helpers/AddTask';
import TaskList from './helpers/TaskList';

const initialTasks = [];

export default function TaskApp() {
  // Reducer: função que recebe um estado e uma ação e devolve o
  // próximo estado (taskReducer)
  const [tasks, dispatch] = useReducer(tasksReducer, initialTasks);

  function handleAddTask(text) {
    // dispatch: a função que dispara uma ação (um objeto qualquer)
    dispatch({ type: 'added', text })
  }

  function handleChangeTask(newTaskData) {
    dispatch({ type: 'changed', newTaskData })
  }

  function handleDeleteTask(taskId) {
    dispatch({ type: 'deleted', taskId })
  }

  return (
    <>
      <h1>Reducer</h1>
      <h2>Itinerary</h2>
      <AddTask onAddTask={handleAddTask} />
      <TaskList
        tasks={tasks}
        onChangeTask={handleChangeTask}
        onDeleteTask={handleDeleteTask}
        />
    </>
  );
}

// Simulando base de dados
let nextId = 1;

// Eis o reducer!
// tasks = o estado
// action = passado no dispatch
function tasksReducer(tasks, action) {
  switch (action.type) {
    case 'added':
      return addTask(tasks, action.text);
    case 'changed':
      return changeTask(tasks, action.newTaskData);
    case 'deleted':
      return deleteTask(tasks, action.taskId);
    default:
      throw Error('Unknown action: ' + action.type);
  }
}

function addTask(tasks, text) {
  return [
    ...tasks,
    {
      id: nextId++,
      text,
      done: false
    }
  ];
}

function changeTask(tasks, newTaskData) {
  return tasks.map(
    (t) => t.id === newTaskData.id
      ? newTaskData
      : t);
}

function deleteTask(tasks, taskId) {
  return tasks.filter((t) => t.id !== taskId);
}