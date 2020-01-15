import React from "react";
import Header from "./components/Header";
import CustomerAdd from "./components/CustomerAdd";
// import CustomerStore from "./CustomerStore";
import CustomerList from "./components/CustomerList";
import { StoreProvider } from "./store/store";

function App() {
  return (
    <StoreProvider>
      {/* <CustomerStore> */}
      <Header />
      <CustomerAdd />
      <CustomerList />
      {/* </CustomerStore> */}
    </StoreProvider>
  );
}

export default App;
