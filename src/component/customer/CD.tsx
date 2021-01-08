import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../sign_up/SignUp.css';
import axios from 'axios';

class CD extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
          data: {
              "STT": 0,
              "NO_OBJ": 1,
              "CustomerCode": "admin",
              "CustomerName": "Quản trị",
              "Address": "Đà Nẵng",
              "Email": "",
              "Phone": "",
              "Birthday": "",
              "Facebook": "admin",
              "WarehouseId": 0,
              "UserName": "",
              "Password": "",
              "VISIBLE": true
          },
          token: sessionStorage.getItem('Token')
      };
    }
      changeHandler=(e: any)=>{
        this.setState({[e.target.name]: e.target.value})
      }
      submitHandler = (e: any) =>{
        e.preventDefault()
        console.log(this.state)
        axios
        .post('http://api.o-nolimit.com/Admin/Api/Register/SignUp', this.state)
        .then(response =>{
          if(response.status==201)
          {
              alert("Chúc mừng đăng ký thành công. Tiến hành đăng nhập");
              window.location.href= window.location.origin + '/login';
          }
          else  
          {
            alert(response.statusText);
          }
        })
        .catch(error =>{
          alert(error);
        })
      }
    render(){
      const {
         //mail dki
         Email,
         //pass
         Password,
         //ten
         CustomerName ,
         //ngay sinh
         Birthday,
         //sdt
         Phone,
         //dia chi
         Address,
         //web
         Facebook,
      } = this.state;
        return (
        <div>
            <form action="/action_page.php" onSubmit={this.submitHandler}>
                <div className="container signin">
                    <h1>Đăng ký tài khoản</h1>
                    <p>Điền thông tin tài khoản</p>
                    <hr/>

                    <label ><b>Mail đăng ký</b></label>
                    <input 
                      type="text" 
                      placeholder="Nhập mail đăng ký" 
                      name="Email" 
                      required value={Email}
                      onChange={this.changeHandler}
                    />

                    <label><b>Mật khẩu</b></label>
                    <input 
                      type="text" 
                      placeholder="Nhập mật khẩu" 
                      name="Password" 
                      required value={Password}
                      onChange={this.changeHandler}
                    />
                    <hr/>
                    <h3>
                    <b>Thông tin liên lạc</b>
                    </h3>
                    
                    <br/>
                    <label ><b>Họ và tên</b></label>
                    <input 
                      type="text" 
                      placeholder="Nhập họ và tên" 
                      name="CustomerName" 
                      required value={CustomerName} 
                      onChange={this.changeHandler}
                    />
                    <br/>
                    <label ><b>Ngày sinh</b></label><br/>
                    <input 
                        className="date-style " 
                        type="date" 
                        name="Birthday" 
                        value={Birthday} 
                        onChange={this.changeHandler}>
                    </input>
                    <br/>
                    <label ><b>Số điện thoại</b></label>
                    <input 
                      type="text" 
                      placeholder="Nhập số điện thoại" 
                      name="Phone" 
                      required value={Phone} 
                      onChange={this.changeHandler}/>
                    <br/>
                    <label ><b>Địa chỉ</b></label>
                    <input 
                      type="text" 
                      placeholder="Nhập địa chỉ" 
                      name="Address" 
                      required value={Address}  
                      onChange={this.changeHandler}/>
                    <br/>
                    {/* <label ><b>Mail</b></label>
                    <input type="text" placeholder="Nhập mail" name="mail" required/> */}
                    <br/>
                    <label ><b>Facebook</b></label>
                    <input 
                      type="text" 
                      placeholder="Nhập tên Facebook"
                      name="Facebook" 
                      required value={Facebook}  
                      onChange={this.changeHandler}/>
                    <br/>
                    <label ><b>Mã kho khách</b></label><br/>
                    <label className="radio-inline"><input type="radio" name="optradio" checked/>Kho A</label>
                    <label className="radio-inline"><input type="radio" name="optradio"/>Kho B</label>
                    <label className="radio-inline"><input type="radio" name="optradio"/>Kho C</label>
                    <hr/>
                    <button type="submit" className="registerbtn">Đăng ký</button>
                </div>
                
                <div className="container signin-text ">
                    <a href="/">Quay lại</a>
                </div>
            </form>
         </div>   
           
        );
    }

}

export default CD;
