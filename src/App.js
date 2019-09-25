import React from "react";
import "./App.css";
import Connected from "./Connected";
import { Provider } from "react-redux";
import store from "./redux/store";
import Hooked from "./Hooked";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Connected />
        <Hooked />
      </Provider>
    </div>
  );
}

export default App;
