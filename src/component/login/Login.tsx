import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Login.css';
import { BrowserRouter as Router, Route, Link, RouteComponentProps } from "react-router-dom";
import { any, number } from 'prop-types';

class Login extends React.Component<RouteComponentProps, any> {
    constructor(props: RouteComponentProps) {
        super(props);
    
        this.state = {
            data: [],
            UserName: '',
            Password: '',
            Token: '',
            Code:  '',
            Email: '',
            HO: '',
            TEN: '',
            ID_OTY: any
        };
         this.handleChangeUserName = this.handleChangeUserName.bind(this);
         this.handleChangePassWord = this.handleChangePassWord.bind(this);
         this.submitHandler = this.submitHandler.bind(this);
      }
      submitHandler(evt: any) {
        evt.preventDefault();
        fetch('http://api.o-nolimit.com/Admin/Api/Login/CheckLogin?username='+this.state.UserName+'&password='+ this.state.Password)
            .then(response => response.json())
            .then(data => {this.setState({ data });
            sessionStorage.setItem('Token', (this.state.data.Token));
            sessionStorage.getItem('Token')
            sessionStorage.setItem('UserId', (this.state.data.UserId));
            sessionStorage.getItem('UserId')
            sessionStorage.setItem('Name', (this.state.data.Name));
            sessionStorage.getItem('Name')
            sessionStorage.setItem('Code', (this.state.data.Code));
            sessionStorage.getItem('Code')
            sessionStorage.setItem('Email', (this.state.data.Email));
            sessionStorage.getItem('Email')
            sessionStorage.setItem('HO', (this.state.data.HO));
            sessionStorage.getItem('HO')
            sessionStorage.setItem('TEN', (this.state.data.TEN));
            sessionStorage.getItem('TEN')
            sessionStorage.setItem('ID_OTY', (this.state.data.ID_OTY));
            sessionStorage.getItem('ID_OTY')
            sessionStorage.setItem('UserName', (this.state.data.UserName));
            sessionStorage.getItem('UserName')
            if(sessionStorage.getItem('UserId')!="undefined"){
                this.props.history.push('/');
                window.location.reload();
            }else{
                alert("Sai tên đăng nhập hoặc mật khẩu");
            }
        })
            .catch(e => {
                console.log(e);
                return e;
            });
           
        

      }
      
      handleChangeUserName(event: any) {
        this.setState({
            UserName: event.target.value
        });
      }
      handleChangePassWord(event: any) {
        this.setState({
            Password: event.target.value
        });
      }

      submitHandlerCall=()=>{
        
            
      }
      componentDidMount() {
        
        
      }
     
    render(){
        // const {
        //     UserName,
        //     Password,
        //     Token,
        // }= this.state
        console.log(this.state.data)
        return (
            
            <form className ="login-form" onSubmit={this.submitHandler} >
            <div className="imgcontainer">
                <div className="avatar"></div>
            </div>

            <div className="container">
                <label ><b>Tên đăng nhập</b></label>
                <input type="text" placeholder="Điền tên đăng nhập"
                   id="theInput" 
                   value={this.state.UserName} 
                   onChange={this.handleChangeUserName}
            />

                <label ><b>Mật khẩu</b></label>
                <input type="password" placeholder="Điền mật khẩu" 
                  id="theInput" 
                  value={this.state.Password} 
                  onChange={this.handleChangePassWord}
      />
                    
                     {/* <input type="submit" /> */}
                <button type="submit" onClick ={()=>this.submitHandlerCall()}>
                    <a>Đăng nhập</a>
                </button>
                
            </div>

            <div className="container">
                <button type="button" className="cancelbtn"
                >
                <a href="/sign-up">Đăng ký</a>
                </button>
            </div>
            </form>
            
           
        );
    }

}

export default Login;
