import {sql} from "@vercel/postgres"
import { NextRequest, NextResponse } from "next/server";
import {todoTable,db} from "@/lib/drizzle"

export async function GET(request:NextRequest){

    try{
        // await sql`CREATE TABLE IF NOT EXISTS todos(id serial, Task varchar(255))`;
        const res=await db.select().from(todoTable);
        
        // console.log(res[0].Task)
        return NextResponse.json ({DATA:res})
    }
    catch(err){
        console.log((err as {message:string}).message)
        return new NextResponse("something went wrong")
    }
    
}


export async function POST(request:NextRequest){
    const req= await request.json()    //Data received in request will be store in variable "req"

    try {
        
        if(req.task){
            const res=await db.insert(todoTable).values({
                Task:req.task
            }).returning();
            console.log(res)
            return NextResponse.json({"message":"Task added successfully"});
        }else{
            throw new Error ("Task is required") 
        }
    } catch (error) { //catch "error" which is thrown by  "throw new Error"
        return NextResponse.json({"messagee":(error as{message:string}).message})   //return "Task is required"     
    }
}