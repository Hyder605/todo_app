'use client'

import { newTodo } from "@/lib/drizzle";
import { useRouter } from "next/navigation";
import { useState } from "react";



export function AddTodo() {
    const [Task, setTask] = useState<newTodo | null>(null)
    const { refresh } = useRouter()
    const handleSubmit = async () => {
        try {
            if (Task) {
                const res = await fetch("/api/todo", {
                    method: "POST",
                    body: JSON.stringify({
                        task: Task.Task
                    }),

                })
                refresh();
            }
        } catch (error) {
            console.log("error")
        }

    }
    return (
        <div>
            <form className='w-full flex gap-x-3'>
                <input
                    onChange={(e) => setTask({ Task: e.target.value })}
                    className='rounded-full w-full py-3.5 px-5 border focus:outline-secondary' type="text" />
                <button type='button' onClick={handleSubmit} className='p-4 shrink-0 rounded-full bg-gradient-to-b from-primary to-secondary' >
                    ADD            </button>
            </form>
        </div>
    )
}

