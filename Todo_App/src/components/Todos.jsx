import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import TodoItem from './TodoItem'


const Todos = () => {

    const todos = useSelector(state => state.todos)

    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos))
    }, [todos])

    return (
        <>
            <div>
                {todos && todos.map((todo) => (
                    <div
                        className="mt-4 flex justify-center items-center px-4 py-2 rounded"
                        key={todo.id}
                    >
                        <TodoItem todo={todo} />
                    </div>
                ))}
            </div>
        </>
    )
}

export default Todos