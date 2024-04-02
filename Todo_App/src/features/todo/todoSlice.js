import { createSlice, nanoid } from "@reduxjs/toolkit";

const todos = JSON.parse(localStorage.getItem("todos"))

// Taking the initial value from the local storage if it exists, otherwise setting the initial value to an array of 4 todos.

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

// created a slice using redux-toolkit createSlice function and passed the initial state and reducers to it.

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    // reducers are functions that take the current state and an action as arguments, and return a new state result.
    reducers: {
        // addTodo is for adding a new todo to the list. It takes current state and action and returns a new state.
        addTodo: (state, action) => {
            // console.log(action.payload)
            const todo = {
                id: nanoid(),
                text: action.payload
            }

            state.todos.push(todo)
        },
        // removeTodo for removing a todo based on their id from the list.
        removeTodo: (state, action) => {
            const id = action.payload

            state.todos = state.todos.filter((todo) => (
                todo.id !== id
            ))
        },
        // udpateTodo for updating a todo based on their id and text object.
        updateTodo: (state, action) => {
            const id = action.payload.id
            state.todos = state.todos.map(todo => todo.id === id ? action.payload : todo)
        },
        // toggleCompleted for toggling the completed status of a todo based on their id and finding that particular todo and changing the completed status.
        toggleCompleted: (state, action) => {
            // console.log(action.payload)
            const id = action.payload
            state.todos = state.todos.map(todo => todo.id === id ? { ...todo, completed: !todo.completed } : todo)
        }
    }
})

export const { addTodo, removeTodo, updateTodo, toggleCompleted } = todoSlice.actions

export default todoSlice.reducer