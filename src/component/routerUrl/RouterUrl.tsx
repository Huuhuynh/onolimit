import React from 'react';
import { BrowserRouter as Router, Route, Link, BrowserRouter } from "react-router-dom";
import Home from '../home/Home';
import Login from '../login/Login';
import Order from '../order/order';
import Setting from '../setting/setting';
import Customer from '../customer/Customer';
import CustomerDetail from '../customer/CustomerDetail';
import CD from '../customer/CD';
import GroupCustomer from '../customer/GroupCustomer';
import Debt from '../customer/Debt';
import ListEmployees from '../employees/ListEmployees';
import EmployeeDetail from '../employees/employeeDetail';
import SignUp from '../sign_up/SignUp';
import AddEmployees from '../employees/AddEmployees';
import AddOrder from '../order/addOrder';
import DetailOrder from '../order/detailOrder';
import User from '../user/user';

class RouterUrl extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
  }

  render(){
    return (
      <BrowserRouter>
        <Router>
          <Route path="/login" component={Login} />
          <Route exact path="/" component={Home} />
          <Route path="/order" component={Order} />
          <Route path="/setting" component={Setting} />
          <Route path="/customer" component={Customer} />
          <Route path="/customerDetail" component={CustomerDetail} />
          <Route path="/employee" component={ListEmployees} />
          <Route path="/employeeDetail" component={EmployeeDetail} />
          <Route path="/sign-up" component={SignUp} />
          <Route path="/add-employees" component={AddEmployees} />
          <Route path="/add-order" component={AddOrder} /> 
          <Route path="/detailOrder" component={DetailOrder} />
          <Route path="/home" component={Order} />
          <Route path="/user" component={User} />
          </Router>
      </BrowserRouter>
      
  );
}
}
export default RouterUrl;
