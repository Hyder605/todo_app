'use client'

import { newTodo } from "@/lib/drizzle";
import { useRouter } from "next/navigation";
import { useState } from "react";



export async function AddTodo() {
    const [task, setTask] = useState<newTodo|null>(null)
    const {refresh}=useRouter()
    const handleSubmit=async()=>{
        const res=await fetch('https://purple-psychiatrist-vzwgu.ineuron.app:3000/api/todo',{
            method:"POST",
            body: JSON.stringify({
                Task: task?.Task          
            })
        })
        // refresh the list 
        refresh(); 


    }
    return (
        <div>
            <form>
                <input onChange={(e)=>setTask({"Task":e.target.value})} type={"text"} className="focus:outline-none"/>
                <button onClick={handleSubmit} type="button" className="px-4 border rounded-2xl">Add</button>
            </form>

        </div>
    )
}