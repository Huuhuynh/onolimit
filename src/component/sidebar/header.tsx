// import React from 'react';
import './header.css';
import React, { Component } from "react";

class Header extends React.Component<any, any> {
	logOut(){
		sessionStorage.clear();	
	}
	state = {
		isOpen: false,
	  };
	  
	  toggleCollapse = () => {
		this.setState({ isOpen: !this.state.isOpen });
	  }
	   
    render(){
        return (
			
			<nav className="navbar navbar-expand-sm bg-dark navbar-dark row">
						<div className="col-sm-10">
							{/* <form className="form-inline my-2 my-lg-0">
								<input className="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search"/>
								<button className="btn btn-outline-success my-2 my-sm-0" type="submit" style={{fontSize: "15px", width: "60px"}}>Search</button>
							</form>	 */}
						</div>
						<div className="col-sm-2" style={{display: "contents"}}>
							<div className="icon-admin"></div>
							<div className="nav-item dropdown" style={{margin: "9px"}}>	
		                        <a className=" dropdown-toggle style-item" href="#" id="navbardrop" data-toggle="dropdown">{sessionStorage.getItem("Name")}</a>
								<div className="dropdown-menu">
									<a className="dropdown-item" href="/">Trang chủ</a>
									<a className="dropdown-item" href="/setting">Thiết lập</a>
									<a className="dropdown-item" href="/" onClick={this.logOut}>Đăng xuất</a>
								</div>
							</div>
						</div>
			</nav>
        );
    }

}

export default Header;
