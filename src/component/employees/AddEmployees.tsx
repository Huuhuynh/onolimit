import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../home/Home.css';
import Sidebar from '../sidebar/sidebar';
import Header from '../sidebar/header';
import axios from 'axios';

class AddEmployees extends React.Component<any, any> {
    constructor(props:any) {
        super(props);
        this.state = {
            token: sessionStorage.getItem('Token'),
           //mã nv
           EmployeeCode: "",
           //ten nv
           EmployeeName: "",
           //dia chi
           Address: "" ,
           //mail
           Email: "",
           //
           HomePhone: "",
           //
           OfficePhone: "",
           //web
           MobilePhone: "",
            //mail
            Fax: "",
            //
            Birthday: "",
            //
            Sex: "",
            //
            UserName: "",
            //
            Password: "", 
        };
      }

      submitHandler = (e: any) =>{
        e.preventDefault()
        console.log(this.state)
        axios
        .post('http://api.o-nolimit.com/Admin/Api/Employee/InsertEmployeeApi', this.state,
        //.post('http://localhost:2690/Admin/Api/Employee/InsertEmployeeApi', this.state,
        { headers: { 'Content-Type': 'application/json' 
    ,
    "Token": this.state.token} }
       
        )
        .then(response =>{
          console.log(response)
        })
        .catch(error =>{
          console.log(error)
        })
      }
      changeHandler=(e: any)=>{
        this.setState({[e.target.name]: e.target.value})
      }
    render(){
        const {
            //mã nv
            EmployeeCode,
            //ten nv
            EmployeeName,
            //dia chi
            Address ,
            //mail
            Email,
            //
            HomePhone,
            //
            OfficePhone,
            //web
            MobilePhone,
             //mail
             Fax,
             //
             Birthday,
             //
             Sex,
             //
             UserName,
             //
             Password,
         } = this.state;
        return (
            <div className="wrapper">
           <Sidebar/>

            <div id="content">
               <Header/>
               <div style={{padding: "20px"}}>
                    <h2>Chức năng thao tác thêm mới nhân viên</h2>
                    <div className="line"></div>
                    <form action="/action_page.php" onSubmit={this.submitHandler}>
                        <div className="row">
                            <div className="col-sm-5">
                                <div className="form-group">
                                    <label >Mã nhân viên:</label>
                                    <input type="text" className="form-control" placeholder="Nhập mã nhân viên"
                                        name="EmployeeCode" 
                                        required value={EmployeeCode}
                                        onChange={this.changeHandler}
                                    />
                                </div>  
                                <div className="form-group">
                                    <label >Tên nhân viên:</label>
                                    <input type="text" className="form-control" placeholder="Nhập tên nhân viên"
                                         name="EmployeeName" 
                                         required value={EmployeeName}
                                         onChange={this.changeHandler}
                                    />
                                </div>
                                <div className="form-group">
                                    <label >Địa chỉ:</label>
                                    <input type="text" className="form-control" placeholder="Nhập địa chỉ"
                                        name="Address" 
                                        required value={Address}
                                        onChange={this.changeHandler}
                                    />
                                </div>  
                                <div className="form-group">
                                    <label >Email:</label>
                                    <input type="text" className="form-control" placeholder="Nhập email"
                                        name="Email" 
                                        required value={Email}
                                        onChange={this.changeHandler}
                                    />
                                </div>
                                <div className="form-group">
                                    <label >Home phone:</label>
                                    <input type="text" className="form-control" placeholder="Nhập home phone"
                                         name="HomePhone" 
                                         required value={HomePhone}
                                         onChange={this.changeHandler}
                                    />
                                </div>
                            </div>
                            <div className="col-sm-2"></div>
                            <div className="col-sm-5">
                                <div className="form-group">
                                    <label >Office Phone:</label>
                                    <input type="text" className="form-control" placeholder="Nhập Office Phone"
                                        name="OfficePhone" 
                                        required value={OfficePhone}
                                        onChange={this.changeHandler}
                                    />
                                </div>  
                                <div className="form-group">
                                    <label >Mobile Phone:</label>
                                    <input type="text" className="form-control" placeholder="Nhập Mobile Phone"
                                        name="MobilePhone" 
                                        required value={MobilePhone}
                                        onChange={this.changeHandler}
                                    />
                                </div>
                                <div className="form-group">
                                    <label >Fax:</label>
                                    <input type="text" className="form-control" placeholder="Nhập Fax"
                                        name="Fax" 
                                        required value={Fax}
                                        onChange={this.changeHandler}
                                    />
                                </div>  
                                <div className="form-group">
                                    <label >Ngày sinh:</label>
                                    <input 
                                        style={{width: "100%"}}
                                        className="date-style " 
                                        type="date" 
                                        name="Birthday" 
                                        value={Birthday} 
                                        onChange={this.changeHandler}>
                                    </input>
                                </div>
                                {/* <div className="form-group">
                                    <label >Sex:</label>
                                    <input type="text" className="form-control" placeholder="Nhập Sex"
                                        name="Sex" 
                                        required value={Sex}
                                        onChange={this.changeHandler}
                                    />
                                </div> */}
                                <div className="form-group">
                                    <label >UserName:</label>
                                    <input type="text" className="form-control" placeholder="Nhập username	"
                                        name="UserName" 
                                        required value={UserName}
                                        onChange={this.changeHandler}
                                    />
                                </div>
                                <div className="form-group">
                                    <label >Mật khẩu:</label>
                                    <input type="text" className="form-control" placeholder="Nhập mật khẩu"
                                        name="Password" 
                                        required value={Password}
                                        onChange={this.changeHandler}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-10"></div>
                            <div className="col-sm-1">
                                <button type="submit" className="btn btn-primary">Hủy</button>
                            </div>
                            <div className="col-sm-1">
                                <button type="submit" className="btn btn-primary">Lưu</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <div className="footer">
                <p>Footer</p>
            </div>
        </div>
        );
    }

}

export default AddEmployees;
