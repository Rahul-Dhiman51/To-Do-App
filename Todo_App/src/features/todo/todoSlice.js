import { createSlice, nanoid } from "@reduxjs/toolkit";

const todos = JSON.parse(localStorage.getItem("todos"))

const initialState = {
    todos: todos && todos.length > 0 ? todos : [{
        id: 1,
        text: "Hello, Add your todos here!",
        completed: false,
    },
    {
        id: 2,
        text: "Click on the checkbox to mark it as completed",
        completed: false,
    },
    {
        id: 3,
        text: "Click on the ✏️ icon to edit the todo",
        completed: false,
    },
    {
        id: 4,
        text: "Click on the ❌ icon to delete the todo",
        completed: false,
    }]
}

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            // console.log(action.payload)
            const todo = {
                id: nanoid(),
                text: action.payload
            }

            state.todos.push(todo)
        },
        removeTodo: (state, action) => {
            const id = action.payload

            state.todos = state.todos.filter((todo) => (
                todo.id !== id
            ))
        },
        updateTodo: (state, action) => {
            const id = action.payload.id
            state.todos = state.todos.map(todo => todo.id === id ? action.payload : todo)
        },
        toggleCompleted: (state, action) => {
            // console.log(action.payload)
            const id = action.payload
            state.todos = state.todos.map(todo => todo.id === id ? { ...todo, completed: !todo.completed } : todo)
        },
        updateFromLocalStorage: (state, action) => {
            state.todos = action.payload
        }
    }
})

export const { addTodo, removeTodo, updateTodo, toggleCompleted, updateFromLocalStorage } = todoSlice.actions

export default todoSlice.reducer