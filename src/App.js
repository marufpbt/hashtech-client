import logo from './logo.svg';
import './App.css';
import React, { createContext, useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home/Home/Home';
import Admin from './components/Admin/Admin/Admin';
import AddService from './components/AddService/AddService';
import PrivateRoute from './components/Login/PrivateRoute/PrivateRoute';
import Login from './components/Login/Login/Login';
import AddAdmin from './components/AddAdmin/AddAdmin';
import ServiceDetail from './components/Home/ServiceDetail/ServiceDetail';
import Orders from './components/Home/Orders/Orders';
import ManageService from './components/ManageService/ManageService';
import NotFound from './components/NotFound/NotFound';
import ServiceCheckout from './components/Home/ServiceCheckout/ServiceCheckout';
import AddReview from './components/AddReview/AddReview';
import OrderItem from './components/Home/OrderItem/OrderItem';


export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <PrivateRoute path="/admin">
            <Admin></Admin>
          </PrivateRoute>
          <Route path="/addService">
            <AddService></AddService>
          </Route>
          <Route path="/addReview">
            <AddReview></AddReview>
          </Route>
          <Route path="/manageServices">
            <ManageService></ManageService>
          </Route>
          <Route path="/addAdmin">
            <AddAdmin></AddAdmin>
          </Route>
          <PrivateRoute path="/service/:serviceKey">
            <ServiceCheckout></ServiceCheckout>
          </PrivateRoute>
          <PrivateRoute path="/orders">
            <Orders></Orders>
          </PrivateRoute>
          <PrivateRoute path="/orderItems">
            <OrderItem></OrderItem>
          </PrivateRoute>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
