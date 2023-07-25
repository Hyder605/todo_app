'use client'

import {AddTodo } from "@/components/addtodo";
import { TodoList } from "@/components/todolist";



export default async function Home() {

  return (
    <main className="bg-orange-600 h-screen flex items-center justify-center">
      <div className="px-3 py-4 shadow-lg w-full max-w-md">
        <div className="bg-green-200">
          {/* @ts-ignore */} 
          <TodoList/>
          {/* @ts-ignore */} 
          <AddTodo/>

          

          
        </div>
      </div>
    </main>
  )
}
