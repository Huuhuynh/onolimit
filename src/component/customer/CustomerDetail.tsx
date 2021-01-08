import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
// import { BrowserRouter as Router, Route, Link, RouteComponentProps } from "react-router-dom";
import queryString from 'query-string'
import axios from 'axios';
import { DatePickerComponent } from '@syncfusion/ej2-react-calendars';

class CustomerDetail extends React.Component<any, any> {
    private dateValue:Date=new Date();
    constructor(props: any) {
        super(props);
    
        this.state = {
            data:{
                STT: 0,
                NO_OBJ: 0,
                CustomerCode: "",
                CustomerName: "",
                Address: "",
                Email: "",
                Phone: "",
                Birthday: this.dateValue,
                Facebook: "",
                WarehouseId: 0,
                UserName: "",
                Password: "",
                VISIBLE: true
            },
            token: sessionStorage.getItem('Token')
        };
      }
      changeHandler=(e: any)=>{
        let data = this.state.data;
        data[e.target.name] = e.target.value;
        this.setState({data : data});
      }
      handleOptionChange =(e: any)=> {
        let data = this.state.data;
        data["WarehouseId"] = parseInt(e.target.value);
        //alert(e.target.value);
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
            axios.post('http://api.o-nolimit.com/Admin/Api/Customer/InsertCustomerApi', this.state.data)
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
            axios.put('http://api.o-nolimit.com/Admin/Api/Customer/UpdateCustomerApi', this.state.data,
            {
                headers : headers
            }).then(response =>{
              if(response.status==200)
              {
                  alert("Chỉnh sửa thông tin khách hàng thành công!");
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
        fetch('http://api.o-nolimit.com/Admin/Api/Customer/GetCustomerApi?NO_OBJ='+ values.NO_OBJ,
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
                STT,
                NO_OBJ,
                CustomerCode,
                CustomerName,
                Address,
                Email,
                Phone,
                Birthday,
                Facebook,
                WarehouseId,
                UserName,
                Password,
                VISIBLE
         } =  this.state.data;
         
        //console.log(UserName);
        //console.log( this.state.data) ;
        //console.log( this.props.onChangeCustomerName)
        return (
            <div className="container">
            <form onSubmit={this.submitHandler}>
                <div className="row">
                    <div className="col-sm-4">
                        <div className="form-group">
                            <label >Mã khách hàng:</label>
                            <input type="text" className="form-control"
                                name="CustomerCode" 
                                required value={CustomerCode} 
                                onChange={this.changeHandler}
                            />
                        </div>  
                        <div className="form-group">
                            <label >Mail:</label>
                            <input type="text" className="form-control" 
                                name="Email" 
                                value={Email} 
                                onChange={this.changeHandler}
                            />
                        </div>  
                        <div className="form-group">
                            <label >Facebook:</label>
                            <input type="text" className="form-control" placeholder="Địa chỉ facebook"
                                name="Facebook" 
                                value={Facebook} 
                                onChange={this.changeHandler}
                            />
                        </div>
                        <div className="form-group">
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
                        </div>
                    </div>
                    
                    <div className="col-sm-4">
                        <div className="form-group">
                            <label >Tên khách hàng:</label>
                            <input type="text" className="form-control" 
                                onChange={this.changeHandler}
                                name="CustomerName" 
                                value={CustomerName} 
                            />
                        </div>  
                            
                        <div className="form-group">
                            <label >Điện thoại:</label>
                            <input type="text" className="form-control" 
                                name="Phone" 
                                onChange={this.changeHandler}
                                value={Phone} 
                            />
                        </div>
                        {/* <div className="form-group">
                            <label >Tên đăng nhập:</label>
                            <input type="text" className="form-control" 
                                name="UserName" 
                                onChange={this.changeHandler}
                                value={UserName} 
                            />
                        </div> */}
                        <div className="form-group">
                            <label >Hiển thị:</label>
                            <input type="checkbox" className="form-control"
                                name="VISIBLE" 
                                onChange={this.changeHandler}
                                value={VISIBLE} 
                                checked={ VISIBLE}
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
                                style={{width: "100%"}}
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
