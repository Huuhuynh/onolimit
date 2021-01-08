import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class Sidebar extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            showAdmin: false,
            showCustomer: false
        }
      }
      componentWillMount(){
        let num1 : any
        num1  = 1
        let num2 : any
        num2  = 8
        if( sessionStorage.getItem('ID_OTY') == num2 ){
            this.setState({showAdmin: false})
            this.setState({showCustomer: true})
            }
            else if(sessionStorage.getItem('ID_OTY') == num1){
                this.setState({showCustomer: true})
                this.setState({showAdmin: true})
        }
    }
    refreshPage(){ 
        setTimeout(
            function() {
                window.location.reload();
            },300
        );
        }
    render(){
        const styleshow2 = {
            display: this.state.showAdmin ?"block" : "none"
		}
		const styleshow1 = {
            display: this.state.showCustomer ?"block" : "none"
		}
        return (
            <nav id="sidebar">
                <div className="sidebar-header">
                    <h3>O-NOLIMIT</h3>
                    <strong>ON</strong>
                </div>

                <ul  className="list-unstyled components">
                    <li>
                        <Link  to="/"  onClick={()=>{
                            this.refreshPage()
                        }}>
                            <i className="glyphicon glyphicon-home"></i>
                                Trang chủ  
                        </Link>
                        <div style={styleshow1}>
                            {/* <a href="#orderSubmenu" data-toggle="collapse" aria-expanded="false">
                                <i className="glyphicon glyphicon-duplicate"></i>
                                    Đơn hàng
                            </a> */}
                             <Link to="order">
                                <i className="glyphicon glyphicon-duplicate"></i>
                                Đơn hàng
                             </Link>
                            {/* <ul className="collapse list-unstyled" id="orderSubmenu">
                                <Link to="order">Danh mục đơn hàng</Link>
                                <Link to="detail-order">Chi tiết đơn hàng</Link>
                                <Link  to="add-order">Thêm đơn hàng</Link>
                            </ul> */}
                        </div>
                        
                        <div style={styleshow2}>
                            <Link to="customer">
                                <i className="glyphicon glyphicon-user"></i>
                                Khách hàng
                            </Link>
                            <Link to="employee">
                                <i className="glyphicon glyphicon-user"></i>
                                Nhân viên
                            </Link>

                            {/* <a href="#pageSubmenu" data-toggle="collapse" aria-expanded="false">
                                <i className="glyphicon glyphicon-user"></i>
                                Nhân viên
                            </a> */}
                            <ul className="collapse list-unstyled" id="pageSubmenu">
                                <Link to="list-employees">Danh mục nhân viên</Link>
                                <Link to="add-employees">Thêm mới nhân viên</Link>
                            </ul>
                        </div>
                       
                    </li>
                    
                    <Link to="setting">
                            <i className="glyphicon glyphicon-cog"></i>
                            Thiết lập
                    </Link>
                </ul>
            </nav>
        );
    }

}

export default Sidebar;
