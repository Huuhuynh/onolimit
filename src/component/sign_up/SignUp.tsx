import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './SignUp.css';
import axios from 'axios';
import { DatePickerComponent } from '@syncfusion/ej2-react-calendars';

class SignUp extends React.Component<any, any> {
  private dateValue:Date=new Date();
    constructor(props: any) {
        super(props);
        this.state = {
           //mail dki
           Email: '',
            //pass
            Password: '',
            //ten
            CustomerName : '',
            //ngay sinh
            Birthday: this.dateValue,
            //sdt
            Phone: '',
            //dia chi
            Address: '',
            WarehouseId:1,
            //web
            Facebook: '',
            isshow: false
        };
    }
      changeHandler=(e: any)=>{
        this.setState({[e.target.name]: e.target.value})
      }
      handleOptionChange =(e: any)=> {
        this.setState({ WarehouseId : parseInt(e.target.value)});
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
         WarehouseId,
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
                    {/* <input 
                        className="date-style " 
                        type="date" 
                        name="Birthday" 
                        value={Birthday} 
                        onChange={this.changeHandler}>
                    </input> */}
                     <DatePickerComponent id="datepicker"  value={this.state.Birthday} format='yyyy-MM-dd' placeholder='Enter date' />
                    <br/>
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
                            <label className="radio-inline">
                                <input type="radio" value="1" onChange={this.handleOptionChange} checked={ WarehouseId===1 } name="WarehouseId"/>Kho A
                            </label>
                            <label className="radio-inline">
                                <input type="radio" value="2" onChange={this.handleOptionChange} checked={ WarehouseId===2 } name="WarehouseId"/>Kho B
                            </label>
                            <label className="radio-inline">
                                <input type="radio" value="3" onChange={this.handleOptionChange} checked={ WarehouseId===3 } name="WarehouseId"/>Kho C
                            </label>
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

export default SignUp;
