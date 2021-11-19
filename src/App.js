import './App.css';
import MyOrders from './component/MyOrders/MyOrders';
import LogIn from './component/LogIn/LogIn';
import Register from './component/Register/Register';
import NotFound from './component/NotFound/NotFound';
import PrivateRoute from './component/PrivateRoute/PrivateRoute';
import Home from './component/Home/Home';
import AuthProvider from './context/AuthProvider';
import Navigation from './component/Navigation/Navigation';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Menu from './component/Menu/Menu';
import Booking from './component/Booking/Booking';
import Contacts from './component/Contacts/Contacts';
import ManageAllOrders from './component/ManageAllOrders/ManageAllOrders';
import AddNewService from './component/AddNewService/AddNewService';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Navigation></Navigation>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <PrivateRoute path="/menu">
              <Menu></Menu>
            </PrivateRoute>
            <PrivateRoute path="/orders">
              <MyOrders></MyOrders>
            </PrivateRoute>
            <PrivateRoute path="/manage">
              <ManageAllOrders></ManageAllOrders>
            </PrivateRoute>
            <PrivateRoute path="/addservice">
              <AddNewService></AddNewService>
            </PrivateRoute>
            <PrivateRoute path="/booking/:serviceId">
              <Booking></Booking>
            </PrivateRoute>
            <Route path="/contacts">
              <Contacts></Contacts>
            </Route>
            <Route path="/login">
              <LogIn></LogIn>
            </Route>
            <Route path="/registration">
              <Register></Register>
            </Route>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
