import { type FormEvent, useState, type JSX } from 'react'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { selectError } from './selectors'
import { login } from './authSlice'

export default function Login(): JSX.Element {
	const [username, setUsername] = useState<string>('')
	const [password, setPassword] = useState<string>('')
	const error = useAppSelector(selectError)
	const dispatch = useAppDispatch()
	function handleLogin(e: FormEvent<HTMLFormElement>): void {
		e.preventDefault()
		console.log(dispatch(login({ username, password })))
	}
	return (
		<div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
            <div className="w-full max-w-sm bg-white p-8 rounded-lg shadow-xl">
                <p className="text-sm text-center text-gray-500 mb-4">
                    Подсказка: <span className="font-semibold text-gray-700">emilys, emilyspass</span>
                </p>
                
                {error && (
                    <p className="text-sm text-center text-red-600 font-medium mb-4 p-2 bg-red-100 rounded">
                        {error}
                    </p>
                )}
                
                <form onSubmit={handleLogin} className="space-y-4">
                    <input
                        type="text"
                        placeholder="login" 
                        value={username}
                        onChange={e => setUsername(e.target.value)}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-150"
                    />
                    
                   
                    <input
                        type="password" 
                        placeholder="password" 
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-150"
                    />
                    
                    <button 
                        type="submit"
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition duration-200 ease-in-out transform hover:scale-[1.01]"
                    >
                        Войти
                    </button>
                </form>
            </div>
        </div>
	)
}
