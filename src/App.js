import { AddTodo } from './components/theAdd';
import { TheDisplayTodo } from './components/theTodo';
import useTodos from './hook/useTask';
import './index.css';
import TheHeader from './theHeader';
import TheContext from './theStore/myContext';

function App() {
  const { todos, addTodo, updateTodos } = useTodos();

  return (
  <TheContext.Provider value={{ todos, addTodo, updateTodos}}>
     <div className="App">
      <TheHeader />

      <div className='mycone'>
        <TheDisplayTodo
        data={todos}  />

      <div className='myfooter'>
        <AddTodo/>
        </div> 
        </div>    
     </div>

  </TheContext.Provider>
  );
}

export default App;
