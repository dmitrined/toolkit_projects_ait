import type { JSX } from "react";

export default function Home(): JSX.Element {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-64px)] bg-gray-100 p-6 text-center">
      <h1 className="text-5xl md:text-6xl font-extrabold text-gray-800 mb-6 leading-tight">
        Добро пожаловать!
      </h1>
      <p className="text-xl md:text-2xl text-gray-700 max-w-2xl">
        Это сайт, где я обучаюсь <span className="font-bold text-blue-600">React</span> и 
        находятся мои <span className="font-bold text-indigo-600">проекты</span>.
      </p>
      <p className="mt-8 text-lg text-gray-600 mb-10">
        Исследуйте мои работы и следите за прогрессом!
      </p>
      
      <p className="text-lg font-semibold text-red-600 bg-red-100 py-3 px-6 rounded-lg shadow-md border border-red-300">
        Пожалуйста, залогиньтесь, чтобы посмотреть проекты
      </p>

    </div>
  );
}