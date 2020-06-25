export const SET_TEXT = 'SET_TEXT'
export const setText = text => {
    return {
        type: SET_TEXT,
        text
    }
}

export const ADD_TODO = 'ADD_TODO'
export const addTodo = todo => {
    return {
        type: ADD_TODO,
        todo
    }
}

export const TOGGLE_TODO = 'TOGGLE_TODO'
export const toggleTodo = todo => {
    return {
        type: TOGGLE_TODO,
        todo
    }
}
