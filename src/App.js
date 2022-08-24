import TaskList from './components/taskList.jsx';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="logo__container">
        <h2>TaskList</h2>
      </div>
      <div className="main__container">
        <h1 className="main__title">Task-List</h1>
          <TaskList />
      </div>
    </div>
  );
}

export default App;
