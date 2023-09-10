"use client";
import { Metadata } from 'next';
import React, { useState } from 'react';
import Link from 'next/link';
import { prisma } from '@/db';
import { redirect } from 'next/navigation';

function createTodo(title: string) {
    // console.log("hello");
    // const title = data.get('title')?.valueOf();
    if (typeof title !== 'string' || title.length === 0) {
        throw new Error("Invalid title!");
    }
    const saveData = async () => {
        await prisma.todo.create({
            data: {
                title: title,
                complete: false
            }
        });
    };
    saveData()
    
    redirect('/');
}



const meta: Metadata = {
    title: "Create Todo",
    description: "create new todo"
};

const CreateTodo = () => {
    const [title, setTitle] = useState("");
    return (
        <>
            <header className='flex justify-between items-center mb-4'>
                <h1 className='text-2xl'>Create New Todo</h1>
            </header>
            <form >
                <input type="text" name='title' value={title} className='border block w-full border-slate-300 bg-transparent rounded px-2 py-1 focus-within:border-slate-100 outline-none' onChange={e => setTitle(e.target.value)} />
            </form>

            <div className='flex justify-end p-3'>
                <Link className='border border-slate-300 bg-transparent rounded px-2 py-1 focus-within:border-slate-100 outline-none' href="..">{"Cancel"}</Link>
                <button onClick={() => createTodo(title)} className="border border-slate-300 bg-transparent rounded px-2 py-1 focus-within:border-slate-100 outline-none" type='submit'>Create</button>
            </div>

        </>

    );
};

export default CreateTodo;