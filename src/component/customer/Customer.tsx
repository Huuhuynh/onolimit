import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../home/Home.css';
import Sidebar from '../sidebar/sidebar';
import Header from '../sidebar/header';
import { string, any, number } from 'prop-types';

class Customer extends React.Component<any, any> {
    private id: any
    constructor(props:any) {
        super(props);
        this.state = {
          data: [],
          setShow: false,
          isClose: true,
          NAME_OBJ: string,
          ID_OBJ: any,
          ID_OGR: number,
          NO_OBJ: any,
          CustomerCode: any,
          CustomerName: any,
          show: false,
          Email:any,
          Phone: any,
          Address: any,
            Birthday: any,
            Facebook: any,
            WarehouseId: any,
            UserName: any,
            Password : any,
            VISIBLE:any,
          token: sessionStorage.getItem('Token'),
          detailKey: any

        };
        this.dataListCustomer= this.dataListCustomer.bind(this)
        this.handleDeleteData= this.handleDeleteData.bind(this)
        //this.showPopupEdit= this.showPopupEdit.bind(this)
        
      }
      componentDidMount() {
        fetch('http://api.o-nolimit.com/Admin/Api/Customer/LoadCustomersApi',
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
            // this.handleSubmit;
      }
       refreshPage(){ 
        setTimeout(
            function() {
                window.location.reload();
            },300
        );
 
    }
    // showPopupEdit(id: any, code: any, name: any, email: any, phone: any ,address: any ){
    //     this.setState({show : true});
    //     this.setState({NO_OBJ: id});
    //     this.setState({CustomerCode: code});
    //     this.setState({CustomerName : name});
    //     this.setState({Email: email});
    //     this.setState({Phone: phone});
    //     this.setState({Address: address});
    // }
       handleDeleteData(NO_OBJ: any) {     
        return fetch("http://api.o-nolimit.com/Admin/Api/Customer/DeleteCustomerApi?NO_OBJ="+ NO_OBJ, {
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
        dataListCustomer() {
          return(
            this.state.data.map((item: any, i: any)=>( 
                    <tr key = {item.NO_OBJ} >
                        <th className="w-2" scope="row">{item.STT}</th>
                        <td className="w-20">{item.CustomerCode}</td>
                        <td className="w-20">{item.CustomerName}</td>
                        <td className="w-20">{item.Email}</td>
                        <td className="w-9">{item.Phone}</td>
                        <td className="w-20">{item.Address}</td>
                        <td className="w-10">  
                            <button 
                            className="margin-l-20 btn btn-primary" 
                                        type="button"  
                                        style= {{marginTop: "0px"}}
                                        onClick={
                                            () => {
                                                if(window.confirm("Bạn có chắc chắn muốn xóa khách hàng " + item.CustomerName + " ?"))
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
                        </td>
                    </tr>
                )
            )
          ) 
    }

    render(){
        const styleshow = {
            display: this.state.show ? "block" : "none"
        }
        let show=false;
        
        const handleClose = () => { show=false; };
        const handleShow = () => { show=true; };
        //console.log(this.state.data)
        return (
            <div className="wrapper">
                <Sidebar/>
                <div className="App">
                    <div className="modal" id="myModal" role="dialog" aria-labelledby="myExtraLargeModalLabel" aria-hidden="true">
                        <div className="modal-dialog modal-xl modal-dialog-centered">
                            <div className="modal-content">
                                <div className="modal-header">
                                <h4 className="modal-title">Chi tiết khách hàng</h4>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                                </div>
                                <div className="modal-body">
                                    <iframe src= { "./customerDetail?NO_OBJ="+ this.state.detailKey } style={ { border:"0px" } }   width="100%" height="460px"> </iframe>
                                </div>
                                <div className="modal-footer">
                                    <div style={ { margin: "auto", width: "100px", height:"100px" } } >
                                        <button type="button" className="btn btn-danger" data-dismiss="modal">Đóng</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="content">
                <Header/>
                <div  style={{padding: "20px"}}>
                    <h2>Danh mục khách hàng</h2>
                    <button data-toggle="modal" data-target="#myModal" type="button" className="btn btn-primary"
                        onClick={ ()=> { this.setState( { detailKey : 0 })  } }
                    >Thêm khách hàng</button>
                    <div className="line"></div>
                    <table className="table table-bordered table-striped">
                    <thead>
                        <tr>
                        <th scope="col " className="w-2">STT</th>
                        <th scope="col " className="w-20">Mã KH</th>
                        <th scope="col "className="w-20">Tên Khách Hàng</th>
                        <th scope="col "className="w-20">Email</th>
                        <th scope="col "className="w-9">Điện thoại</th>
                        <th scope="col "className="w-20">Địa chỉ</th>
                        <th scope="col "className="w-10">Hiển thị</th>
                        <th scope="col "className="w-1"></th>
                        </tr>
                    </thead>
                    <tbody>
                         {this.dataListCustomer()}
                    </tbody>
                </table>      
                </div>
                </div>
        </div>
        );
    }

}

export default Customer;
