import types from "./typeAction";

const initialState = {
  loading: false,
  customers: [],
  searchKey: "",
  error: ""
};

export const reducer = (state = initialState, { type, payload }) => {
  console.log(payload);
  switch (type) {
    case types.SET_LOADING_INDICATOR:
      return { ...state, loading: true };

    case types.LOAD_SUCESS:
      return { ...state, customers: payload, searchKey: "", loading: false };

    case types.LOAD_FAIL:
      return { ...state, loading: false, error: payload };

    case types.LOAD_FAIL:
    case types.ADD_CUSTOMER:
      return {
        customers: [
          ...state.customers,
          {
            ID: state.customers.length + 1,
            Title: payload,
            status: "todo"
          }
        ],
        searchKey: ""
      };

    case types.SEARCH:
      return { ...state, searchKey: payload };

    case types.DELETE_CUSTOMER:
      const newCustomer = state.customers.map(customer => {
        if (customer.id === +payload) {
          customer.isDeleted = 1;
        }
        return customer;
      });
      console.log(newCustomer);
      return { ...state, customers: newCustomer };

    default:
      break;
  }
};
