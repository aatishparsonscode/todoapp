import logo from './logo.svg';
import './App.css';
import { API } from 'aws-amplify';
import * as queries from './graphql/queries'
import * as mutations from './graphql/mutations'
function App() {

  async function fetchTodos(){

    const res = await API.graphql({
      query: queries.listTodos
    })
    console.log("fetching todos")
    console.log(res)
  }

  async function createTodo(){
    const newTodo = {
      name : "specialTodo",
      description: "hellooo"
    }
    const res = await API.graphql({
      query: mutations.createTodo,
      variables:{
        input: newTodo
      }
    })
    console.log(res)
  }

  async function updateBigTask(){
    const updateBigTask = {
      id : "5d79ed38-2445-4790-b70b-f1e3d170cbf2",
      job : "UPDATED JOB AGAIN"
    }
    const res = await API.graphql({
      query : mutations.updateBigTask,
      variables:{
        input: updateBigTask
      }
    })
    console.log(res)
  }

  async function getBigTasks(){
    const res = await API.graphql({
      query : queries.listBigTasks
    })
    console.log(res)
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React wit me
        </a>
        <button onClick={fetchTodos}>Fetch Todo</button>
        <button onClick={createTodo}>Create Todo</button>
        <button onClick={updateBigTask}>UpdateBigTask</button>
        <button onClick={getBigTasks}>GetBigTask</button>
      </header>
    </div>
  );
}

export default App;
