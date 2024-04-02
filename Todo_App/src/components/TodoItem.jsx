import { useState } from 'react'
import { removeTodo, updateTodo, toggleCompleted } from '../features/todo/todoSlice.js'
import { useDispatch } from 'react-redux'

const TodoItem = ({ todo }) => {

    // using useDispatch hook to dispatch the actions to the store.
    const dispatch = useDispatch()
    // using useState hook to manage the state of the todo message and isTodoEditable.
    const [isTodoEditable, setIsTodoEditable] = useState(false)
    const [todoMsg, setTodoMsg] = useState(todo.text)

    return (
        <div
            className={`flex border border-black/10 w-3/4 rounded-lg px-3 py-1.5 gap-x-3 shadow-sm shadow-white/50 duration-300  text-black ${todo.completed ? "bg-[#c6e9a7]" : "bg-[#ccbed7]"
                }`}
        >
            <input
                type="checkbox"
                className="cursor-pointer"
                checked={todo.completed}
                onChange={() => dispatch(toggleCompleted(todo.id))}
            />
            {/* Todo Message and implementing the line through logic if to-do is completed */}
            <input
                type="text"
                className={`border outline-none w-full bg-transparent rounded-lg ${isTodoEditable ? "border-black/10 px-2" : "border-transparent"
                    } ${todo.completed ? "line-through" : ""}`}
                value={todoMsg}
                onChange={(e) => setTodoMsg(e.target.value)}
                readOnly={!isTodoEditable}
            />
            {/* Edit, Save Button */}
            <button
                className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 disabled:opacity-50"
                {/* onclick if the todo is Editable the dispatch will be called for updating the todo. Also, diabled is used here that will make editing the todo possible when it is not completed only. */}
                onClick={() => {
                    if (todo.completed) return;

                    if (isTodoEditable) {
                        dispatch(updateTodo({
                            id: todo.id,
                            text: todoMsg
                        }));
                        setIsTodoEditable((prev) => !prev);
                    } else setIsTodoEditable((prev) => !prev);
                }}
                disabled={todo.completed}
            >
                {isTodoEditable ? "📁" : "✏️"}
            </button>
            {/* Delete Todo Button */}
            <button
                className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0"
                onClick={() => dispatch(removeTodo(todo.id))}
            >
                ❌
            </button>
        </div>
    )
}

export default TodoItem