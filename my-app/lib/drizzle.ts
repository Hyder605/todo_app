import { integer, pgTable, serial, text, timestamp, varchar } from 'drizzle-orm/pg-core';
import { drizzle } from 'drizzle-orm/vercel-postgres';
import { InferModel} from 'drizzle-orm';
import { sql } from '@vercel/postgres';

//Creating the structure of the table we made in databse
export const todoTable=pgTable("todos",{
    ID:serial("id").primaryKey(),
    Task:varchar("task",{length:255}).notNull()
})

//Creating Types

export type Todo=InferModel<typeof todoTable> //setting the type of "Todo" to "todoTable"
export type newTodo=InferModel<typeof todoTable,"insert"> //for insert


//Exporting DATABASE

export const db = drizzle(sql); //drizzle method is making a connection.sql will fetch the required data from environmental varibale