import { useEffect, useState } from 'react'
import './App.css'
import { TodoProvider } from './context'
import TodoForm from './component/TodoForm'
import TodoItem from './component/TodoItem'

function App() {
  const [todo, setTodo] = useState([])
  const addTodo = (title) =>{
    setTodo((prev) =>[{id : Date.now() , ...title} , ...prev])
  }
  const updateTodo = (id , title) =>{
    setTodo((prev) =>prev.map((prevElement) =>(prevElement.id === id ? title : prevElement)))
  }
  const deleteTodo= (id) =>{
    setTodo((prev) => prev.filter((prevElement) => (prevElement.id !== id)))
  }

  const toggleTodo = (id) =>{
    setTodo((prev) => prev.map((prevElement) => prevElement.id === id ? {...prevElement , checked: !prevElement.checked}: prevElement))
  }

  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todo"));
    if(todos && todos.length > 0){
      setTodo(todos);
    }
  }, []);
  useEffect(() => {
    localStorage.setItem("todo" , JSON.stringify(todo))
  }, [todo]);
  return (
    <TodoProvider value = {{todo, addTodo , deleteTodo , updateTodo , toggleTodo}}>
    <div className="bg-[#172842] min-h-screen py-8">
                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
                    <div className="mb-4">
                        {/* Todo form goes here */} 
                        <TodoForm/>
                    </div>
                    <div className="flex flex-wrap gap-y-3">
                        {/*Loop and Add TodoItem here */}
                        {todo.map((todo) =>(
                          <div key={todo.id}
                          className='w-full'>
                            <TodoItem todo = {todo}/>

                          </div>
                        ))}
                    </div>
                </div>
            </div>
    </TodoProvider>
  )
}

export default App
