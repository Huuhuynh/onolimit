import React from 'react';
import './App.css';
import RouterUrl from './component/routerUrl/RouterUrl';
// import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
// import Home from './component/home/Home';
// import Login from './component/login/Login';
// import Order from './component/order/order';
// import Setting from './component/setting/setting';
// import Customer from './component/customer/Customer';
// import GroupCustomer from './component/customer/GroupCustomer';
// import Debt from './component/customer/Debt';
// import ListEmployees from './component/employees/ListEmployees';
// import SignUp from './component/sign_up/SignUp';
// import AddEmployees from './component/employees/AddEmployees';
// import AddOrder from './component/order/addOrder';
// import DetailOrder from './component/order/detailOrder';
// import User from './component/user/user';

class App extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
  }
  render(){
    return (
      
          <RouterUrl/>
    );
  }
  
}

export default App;