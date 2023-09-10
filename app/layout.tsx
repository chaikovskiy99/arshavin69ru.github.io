import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Todo App',
  description: 'todo app, add your todo',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {



  return (
    <html lang="en">
      <body className={`${inter.className} container bg-slate-800 text-slate-100 mx-auto -4`}>
        <nav className=' bg-gradient-to-tr from-green-200 to-yellow-300'>
          <ul className='flex md:flex-row flex-col md:gap-10 gap-5 justify-end px-2 py-4 border-gray-500 border-2 shadow-md'>
            <li className="text-2xl font-serif text-blue-950 hover:bg-green-700 hover:px-4 hover:rounded-md transition:hover delay-500 ease-linear" >Home</li>
            <li className="text-2xl font-serif text-blue-950 hover:bg-green-700 hover:px-4 hover:rounded-md transition:hover delay-500 ease-linear" >Movies</li>
            <li className="text-2xl font-serif text-blue-950 hover:bg-green-700 hover:px-4 hover:rounded-md transition:hover delay-500 ease-linear" >Genre</li>
            <li className="text-2xl font-serif text-blue-950 hover:bg-green-700 hover:px-4 hover:rounded-md transition:hover delay-500 ease-linear" >About</li>
          </ul>
        </nav>
        {children}
      </body>
    </html>
  );
}
