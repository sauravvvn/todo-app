import { useEffect, useState } from 'react'
import {Todoprovider} from "./contexts"
import './App.css'
import { Todoform } from './component'
import Todoitem from './component/Todoitem'
function App() {
  const [todos,setTodos]=useState([])
  const addtodo=(todo)=>{
    setTodos((prev)=>[{id:Date.now(),...todo}, ...prev])
  }
  const updatetodo=(id,todo)=>{
    setTodos((prev)=>prev.map((prevTodo)=>(prevTodo.id=== id ? todo:prevTodo )))
    // prev.map((eachVal)=>{
    //   if(eachVal.id=== id){
    //     todo
    //   }
   // }) ye setTodo ka dusra logic hai upr wala kro ya phr ye
  }
  const deletetodo=(id)=>{
    setTodos((prev)=>prev.filter((todo)=>todo.id !==id)) //delete filter arry ka use kro jayda acha hota

  } 
   const togglecomplete=(id)=>{
    setTodos((prev)=> prev.map((prevTodo)=>prevTodo.id ===id?{...prevTodo,completed:!prevTodo.completed}:prevTodo))
   }
   useEffect(()=>{
   const todos=JSON.parse( localStorage.getItem("todos") )
   if(todos && todos.length>0){
    setTodos(todos)
   }
   },[])

   useEffect(()=>{
    localStorage.setItem("todos",JSON.stringify(todos))
   },[todos])
  return (
    <Todoprovider value={{todos,addtodo,updatetodo,deletetodo, togglecomplete}}>
    <div className="bg-[#172842] min-h-screen py-8">
                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
                    <div className="mb-4">
                        {/* Todo form goes here */} 
                        <Todoform />
                    </div>
                    <div className="flex flex-wrap gap-y-3">
                        {/*Loop and Add TodoItem here */}
                        {todos.map((todo) => (
                          <div key={todo.id}
                          className='w-full'
                          >
                            <Todoitem todo={todo} />
                          </div>
                        ))}
                    </div>
                </div>
            </div>
     </Todoprovider>
  )
}

export default App
