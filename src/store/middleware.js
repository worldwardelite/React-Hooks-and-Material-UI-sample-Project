import types from './typeAction'
import axios from 'axios'
export const applyMiddleware = dispatch => action => {
    switch (action.type) {
        case types.LOAD_CUSTOMER:
            return axios
                .get('api/customers')
                .then(res => dispatch({
                    type: types.LOAD_SUCESS,
                    payload: res.data
                }))
                .catch(err => dispatch({
                    type: types.LOAD_FAIL,
                    payload: err.response.data
                }))
        case types.DELETE_CUSTOMER:
            return axios
                .delete(`/api/customers/${action.payload}`)
                .then(res => dispatch({
                    type: types.DELETE_CUSTOMER,
                    payload: action.payload
                }))
                .catch(err => dispatch({
                    type: types.LOAD_FAIL,
                    payload: err.response
                }))
        case types.ADD_CUSTOMER:
            return axios
                .post('/api/customers', action.payload.formData, action.payload.config)
                .then(res => dispatch({
                    type: types.LOAD_SUCESS,
                    payload: res.data
                }))
                .catch(err => dispatch({
                    type: types.LOAD_FAIL,
                    payload: err.response
                }))
        default: dispatch(action)
    }
}