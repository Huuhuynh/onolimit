import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../home/Home.css';
import Sidebar from '../sidebar/sidebar';
import Header from '../sidebar/header';
import { Link } from 'react-router-dom';
import EditEmployees from './editemployees';
import { string, any, number } from 'prop-types';

class ListEmployees extends React.Component<any, any> {
    constructor(props:any) {
        super(props);
        this.state = {
          data: [],
          token: sessionStorage.getItem('Token'),
          detailKey: any
        };
      }

      componentDidMount() {
        fetch('http://api.o-nolimit.com/Admin/Api/Employee/GetEmployees',
        {headers:new Headers ({
            "Token": this.state.token,
        })})
            .then(response => response.json())
            .then(data => this.setState({ data }))
            .catch(e => {
                console.log(e);
                return e;
            });
            // this.handleSubmit;
      }
      refreshPage(){ 
        setTimeout(
            function() {
                window.location.reload();
            },300
        );
 
    }
       handleDeleteData(NO_OBJ: any) {     
        return fetch("http://api.o-nolimit.com/Api/Employee/DeleteEmployeeApi?NO_OBJ="+ NO_OBJ,
         {
          method: 'delete',
          headers:new Headers ({
            "Token": this.state.token,
        })

        }).then(response =>
          response.json().then(json => {
            return json;
          })
          
        );
        
      }

      dataListEmployees() {
        return(
          this.state.data.map((item: any, i: any)=>
                  <tr  key = {item.NO_OBJ} >
                      <td>{item.EmployeeCode}</td>
                      <td >{item.EmployeeName}</td>
                      <td >{item.Address}</td>
                      <td >{item.Email}</td>
                      <td >{item.MobilePhone}</td>
                      <td >{item.Birthday}</td>
                      <td >
                          {item.VISIBLE}
                          </td>
                      {/* <td className="w-6">{item.Sex}</td> */}
                      <td > 
                            <button 
                            className="margin-l-20 btn btn-primary" 
                                        type="button"  
                                        style= {{marginTop: "0px"}}
                                        onClick={
                                            () => {
                                                if(window.confirm("Bạn có chắc chắn muốn xóa nhân viên [" + item.EmployeeName + "] ?"))
                                                {
                                                    this.handleDeleteData(item.NO_OBJ); 
                                                    this.refreshPage();
                                                }
                                            }
                                        }
                                        >
                                <span className="glyphicon glyphicon-trash"></span>
                            </button> 
                            &nbsp;&nbsp;
                            <a href="#myModal" role="button" className="btn btn-primary" data-toggle="modal"  
                            onClick={ () => { this.setState( { detailKey : item.NO_OBJ }) } }>
                            <span className="glyphicon glyphicon-pencil"></span>                 
                            </a>
                          {/* <button className="margin-l-20 btn btn-primary" 
                                      data-toggle="modal" 
                                      data-target="#myModalEdit">
                              <span className="glyphicon glyphicon-pencil"></span>              
                          </button> */}
                      </td>
                  </tr>
          )
        ) 
  }
    render(){
        return (
            <div className="wrapper">
           <Sidebar/>
            <div className="modal" id="myModal" role="dialog" aria-labelledby="myExtraLargeModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-xl modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                        <h4 className="modal-title">Chi tiết nhân viên</h4>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                        </div>
                        <div className="modal-body">
                            <iframe src= { "./employeeDetail?NO_OBJ="+ this.state.detailKey } style={ { border:"0px" } }   width="100%" height="470px"> </iframe>
                        </div>
                        <div className="modal-footer">
                           
                        </div>
                    </div>
                </div>
            </div>
            <div id="content">
                <Header/>
                <div  style={{padding: "20px"}}>
                <h2>Danh mục nhân viên</h2>
                <button data-toggle="modal" data-target="#myModal" type="button" className="btn btn-primary"
                        onClick={ ()=> { this.setState( { detailKey : 0 })  } }
                    >Thêm nhân viên</button>
                    <div className="line"></div>
                {/* <table className="table table-bordered table-striped"> */}
                <table id="dtVerticalScrollExample" className="table table-striped table-bordered table-sm">
                    <thead>
                        <tr>
                            <th scope="col" className="th-sm">Mã NV</th>
                            <th scope="col" className="th-sm">Tên NV</th>
                            <th scope="col" className="th-sm">Địa chỉ</th>
                            <th scope="col" className="th-sm">Email</th>
                            <th scope="col" className="th-sm">Di động</th>
                            <th scope="col" className="th-sm">Ngày sinh</th>
                            <th scope="col" className="th-sm">Hiển thị</th>
                            <th scope="col" className="th-sm">Thao tác</th>
                            <th scope="col "className="w-1"></th>
                        </tr>
                    </thead>
                    <tbody>
                         {this.dataListEmployees()}
                    </tbody>
                </table>      
            </div>
                <EditEmployees/>
                </div>
        </div>
        );
    }

}

export default ListEmployees;
