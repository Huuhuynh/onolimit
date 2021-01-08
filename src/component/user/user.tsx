import React from 'react';
import { emit } from 'cluster';
import { string } from 'prop-types';

class User extends React.Component<any, any> {
    constructor(props:any) {
        super(props);
        this.state = {
            email: sessionStorage.getItem('Email'),
            ho:  sessionStorage.getItem('HO'),
            ten: sessionStorage.getItem('TEN'),
            code: sessionStorage.getItem('Code'),
            UserName: sessionStorage.getItem('UserName')
        }
    }
	logOut(){
		sessionStorage.clear();	
    }
    componentWillMount(){
		let num : any
		num  = 1
		if( sessionStorage.getItem('ID_OTY') == num ){
			this.setState({ID_OTY: true})
		}
	}
    render(){
		const styleshow3 = {
            display: this.state.ID_OTY ?  "block" : "none"
        }
        return (
			<div>
                <div id="preloder">
                    <div className="loader"></div>
                </div>

                <header className="header-section clearfix">
                    <a href="index.html" className="site-logo">
                        <img src="img/logo.png" alt=""/>
                    </a>
                    <ul className="main-menu">
                        <li><a href="index.html">Trang chủ</a></li>
                        <li><a href="#">Giới thiệu</a></li>
                        <li><a href="#">Đặt hàng</a>
                        </li>
                        <li><a href="blog.html">Tin tức</a></li>
                        <li><a href="contact.html">Liên hệ</a></li>

                        <li><a href="#"><span className="glyphicon glyphicon-user"></span>&nbsp;&nbsp;{sessionStorage.getItem("Name")}</a>
                            <ul className="sub-menu color-dropdown">
                                <li><a href="user">Thông tin tài khoản</a></li>
                                <li><a href="order">Theo giỏi đơn hàng</a></li>
                                <li style = {styleshow3}>
                                    <a href="home">Quản trị</a>
                                </li>
                                <li><a href="/" onClick={this.logOut}>Thoát</a></li>
                            </ul>
                        </li>
                    </ul>
                </header>
                <div style={{padding: "76px 553px"}}>
                    <h1>Thông tin tài khoản: </h1>
                    <div className="line"></div>
                    <label ><b>Email</b></label>
                    <input className="text-input" type="text" value = {this.state.email} />
                    <label ><b>Họ và tên đệm</b></label>
                    <input className="text-input" type="text" value = {this.state.ho}/>
                    <label ><b>Tên</b></label>
                    <input className="text-input" type="text" value = {this.state.ten}/>
                    <label ><b>Mã cá nhân</b></label>
                    <input className="text-input" type="text" value = {this.state.code}/>
                    <label ><b>Tên đăng nhập</b></label>
                    <input className="text-input" type="text" value = {this.state.UserName}/>
                </div>
                
            </div>
        );
    }

}

export default User;
