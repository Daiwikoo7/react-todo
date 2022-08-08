import React from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from "./component/Header";
import Footer from "./component/Footer";
import Addtodo from "./component/Addtodo";
import Table from "./component/Table";
import { createStore } from "redux";
import "./App.css"; // Provider
import { Provider } from "react-redux";
import toDoReducer from "./service/reducers/reducer";
import EditTodo from "./component/EditTodo";
const h = createStore(toDoReducer);

function App() {
  return (
    <Provider store={h}>
      <div>
        <Router>
          <Header />
          <Switch>
            <Route path="/addtodo">
              <Addtodo />
            </Route>
            <Route exact path="/">
              <Table />
            </Route>
            <Route path="/editTodo/:todoId">
              <EditTodo />
            </Route>
          </Switch>
        </Router>
        <Footer />
      </div>
    </Provider>
  );
}

export default App;
