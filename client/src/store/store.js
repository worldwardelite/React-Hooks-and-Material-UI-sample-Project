import React, { createContext, useReducer } from 'react'
import { reducer } from './reducer'
import { useActions } from './action'
import { applyMiddleware } from './middleware'

const initialState = {
    loading: false,
    customers: [],
    searchKey: "",
    error: ""
};

const StoreContext = createContext()
const StoreProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState)
    const actions = useActions(state, applyMiddleware(dispatch))
    return (<StoreContext.Provider value={{ state, actions }}>
        {children}
    </StoreContext.Provider>)
}
export { StoreContext, StoreProvider }