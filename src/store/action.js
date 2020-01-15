import types from './typeAction'
export const useActions = (state, dispatch) => ({
    loadCustomers: data => {
        dispatch({ type: types.SET_LOADING_INDICATOR })
        dispatch({ type: types.LOAD_CUSTOMER, payload: data })
    },
    searchCustomers: data => {
        dispatch({ type: types.SEARCH, payload: data });
    },
    deleteCustomer: data => {
        dispatch({ type: types.DELETE_CUSTOMER, payload: data });
    },
    addCustomer: data => {
        dispatch({ type: types.ADD_CUSTOMER, payload: data });
    }
})