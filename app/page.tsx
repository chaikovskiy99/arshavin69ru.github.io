import TodoItem from '@/components/TodoItem';
import { prisma } from '@/db';
import Link from 'next/link';

function getTodo() {
  return prisma.todo.findMany();
}

export default async function Home() {
  // await prisma.todo.create({
  //   data: {
  //     title: "Gotta pee!!", complete: false
  //   }
  // });

  const todos = await getTodo();

  return (
    <>
      <header className='flex items-center justify-between my-8'>
        <h1 className="text-2xl ">Todos</h1>
        <Link className='outline-none border-2 border-white py-1 hover:bg-red-400 px-5 rounded-md' href={"/new"}>New</Link>
      </header>
      <ul className='pl-4'>
        {todos.map(todo => (<TodoItem key={todo.id} {...todo} />))}
      </ul>
    </>
  );
}


