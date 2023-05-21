'use client'

import { useState } from "react";



async function getData() {
  const res = await fetch('https://purple-psychiatrist-vzwgu.ineuron.app:3000/api/todo');

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
}

export default async function Home() {
  const[add,newAdd]=useState("Enter your task")

  const tasks = await getData();
  // console.log(tasks.DATA[0].Task)
  // console.log("hellou")
  return (
    <main className="bg-orange-600 h-screen">
      <div className="flex  justify-center items-center ">
        <form className="bg-green-200 w-80 h-32">
          <input type={"text"} placeholder={add}/>
          <button type="button" className="border rounded-2xl">Add</button>
          {tasks.DATA.map((items:any)=> {
            return <p key={items.id}>{items.Task}</p>
          })}

          

          
        </form>
      </div>
    </main>
  )
}
