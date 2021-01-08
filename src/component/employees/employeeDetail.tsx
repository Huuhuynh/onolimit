import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import queryString from 'query-string'
import axios from 'axios';
import { DatePickerComponent } from '@syncfusion/ej2-react-calendars';

class CustomerDetail extends React.Component<any, any> {
    private dateValue:Date=new Date();
    constructor(props: any) {
        super(props);
    
        this.state = {
            data:{
                "NO_OBJ": 1,
                "EmployeeCode": "",
                "EmployeeName": "",
                "Address": "",
                "Email": "",
                "HomePhone": "",
                "OfficePhone": "",
                "MobilePhone": "",
                "Fax": "",
                "Birthday": this.dateValue,
                "Sex": true,
                "AllowLogin": true,
                "UserName": "",
                "Password": "",
                "VISIBLE": true
            },
            token: sessionStorage.getItem('Token')
        };
      }
      changeHandler=(e: any)=>{
        let data = this.state.data;
        data[e.target.name] = e.target.value;
        this.setState({data : data});
      }
      submitHandler = (e: any) =>{
        //
        e.preventDefault();
        //console.log(this.state.data);
        const values = queryString.parse(this.props.location.search);
        const headers = {
            'Content-Type': 'application/json',
            'Token': this.state.token
          }
        if(values.NO_OBJ=="0")
        {
            axios.post('http://api.o-nolimit.com/Admin/Api/Employee/InsertEmployeeApi', this.state.data)
            .then(response =>{
              if(response.status==201)
              {
                  alert("Thêm mới khách hàng thành công!");
                  //window.location.href= window.location.origin ;
              }
              else  
              {
                alert(response.statusText);
              }
            })
            .catch(error =>{
              alert(error);
            });
        }
        else    
        {
            axios.put('http://api.o-nolimit.com/Admin/Api/Employee/UpdateEmployeeApi', this.state.data,
            {
                headers : headers
            }).then(response =>{
              if(response.status==200)
              {
                  alert("Chỉnh sửa thông tin nhân viên thành công!");
                  window.location.href= window.location.href ;
              }
              else  
              {
                alert(response.statusText);
              }
            })
            .catch(error =>{
              alert(error);
            });
        }
        
        
      }
      componentDidMount() {
        const values = queryString.parse(this.props.location.search);
        fetch('http://api.o-nolimit.com/Admin/Api/Employee/GetEmployeeApi?NO_OBJ='+ values.NO_OBJ,
        {headers:new Headers ({
            "Token": this.state.token,
        })}
        )
            .then(response => response.json())
            .then(data => this.setState({ data }))
            .catch(e => {
                console.log(e);
                return e;
            });
      }
     
      render(){
        const {
            NO_OBJ,
            EmployeeCode,
            EmployeeName ,
            Address ,
            Email ,
            HomePhone ,
            OfficePhone ,
            MobilePhone ,
            Fax ,
            Birthday ,
            Sex,
            AllowLogin,
            UserName,
            Password,
            VISIBLE
         } =  this.state.data;
        return (
            <div className="container">
            <form onSubmit={this.submitHandler}>
                <div className="row">
                    <div className="col-sm-4">
                        <div className="form-group">
                            <label >Mã nhân viên:</label>
                            <input type="text" className="form-control"
                                name="CustomerCode" 
                                required value={EmployeeCode} 
                                onChange={this.changeHandler}
                            />
                        </div>  
                        <div className="form-group">
                            <label >Email:</label>
                            <input type="text" className="form-control" 
                                name="Email" 
                                value={Email} 
                                onChange={this.changeHandler}
                            />
                        </div>  
                        <div className="form-group">
                            <label>Điện thoại nhà riêng:</label>
                            <input type="text" className="form-control" placeholder="Nhập số điện thoại"
                                name="HomePhone" 
                                value={HomePhone} 
                                onChange={this.changeHandler}
                            />
                        </div>
                        <div className="form-group">
                            <label>Fax:</label>
                            <input type="text" className="form-control"
                                name="Fax" 
                                value={Fax} 
                                onChange={this.changeHandler}
                            />
                        </div>
                    </div>
                    
                    <div className="col-sm-4">
                        <div className="form-group">
                            <label >Tên nhân viên:</label>
                            <input type="text" className="form-control" 
                                onChange={this.changeHandler}
                                name="EmployeeName" 
                                value={EmployeeName} 
                            />
                        </div>  
                            
                        <div className="form-group">
                            <label >Di động:</label>
                            <input type="text" className="form-control" 
                                name="MobilePhone" 
                                onChange={this.changeHandler}
                                value={MobilePhone} 
                            />
                        </div>
                        <div className="form-group">
                            <label>Tên đăng nhập:</label>
                            <input type="text" className="form-control"
                                name="UserName" 
                                value={UserName} 
                                onChange={this.changeHandler}
                            />
                        </div>
                        <div className="form-group">
                            <label >Hiển thị:</label>
                            <input type="checkbox" className="form-control"
                                name="VISIBLE" 
                                checked={VISIBLE}
                                onChange={this.changeHandler}
                                value={VISIBLE} 
                            />
                        </div>
                    </div>
                    <div className="col-sm-4">
                        <div className="form-group">
                            <label >Địa chỉ:</label>
                            <input type="text" className="form-control" 
                                name="Address" 
                                onChange={this.changeHandler}
                                value={Address} 
                            />
                        </div>
                        <div className="form-group">
                            <label >Ngày sinh:</label>
                            {/* <input 
                                className="form-control" 
                                type="date" 
                                onChange={this.changeHandler}
                                value={Birthday} 
                                name="Birthday">
                            </input> */}
                              <DatePickerComponent id="datepicker"  value={this.state.data.Birthday} format='yyyy-MM-dd' placeholder='Enter date' />
                        </div>
                        <div className="form-group">
                            <label >Mật khẩu:</label>
                            <input type="password" className="form-control" 
                                name="Password" 
                                value={Password} 
                                onChange={this.changeHandler}
                            />
                        </div>
                    </div>
                </div>
                <div style={ { margin: "auto", width: "100px", height:"100px" } } >
                    <button type="submit" className="btn btn-primary" data-dismiss="modal">Lưu</button>
                </div>
            </form>
            </div>   
        );
    }

}

export default CustomerDetail;
