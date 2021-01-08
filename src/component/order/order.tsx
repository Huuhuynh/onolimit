import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../home/Home.css';
import Sidebar from '../sidebar/sidebar';
import Header from '../sidebar/header';
import { any } from 'prop-types';
import AddOrder from './addOrder';
import Moment from 'react-moment';
import { isTSEnumMember } from '@babel/types';
import { ComboBoxComponent, ChangeEventArgs } from '@syncfusion/ej2-react-dropdowns';

class Order extends React.Component<any, any> {
    constructor(props:any) {
        super(props);
        this.state = {
          data: [],
          id: any,
          isShowDetail: false,
          OrderId: any,
          token: sessionStorage.getItem('Token'),
          detailKey: any,
          lstStatus:
          [
            {
              "Id" :1,
              "Name":"Đang mua hàng"
            },
            {
                "Id" :2,
                "Name":"Đã mua hàng"
            },
            {
                "Id" :3,
                "Name":"Đã thanh toán"
            },

        ],
        };
        this.showDetail= this.showDetail.bind(this)
      }
      componentDidMount() {
        //fetch('http://api.o-nolimit.com/Admin/Api/Order/GetOrders',
        fetch('http://api.o-nolimit.com/Admin/Api/Order/GetOrders',
        {headers:new Headers ({
          "Token": this.state.token,
      })}
        )
            .then(response => response.json())
            .then(data => this.setState({ data }))
            .catch(e => {
                return e;
            });
      }
      refreshPage(){ 
        setTimeout(
            function() {
                window.location.reload();
            },300
        );
 
    }
      handleDeleteData(id: any) {     
        //return fetch("http://api.o-nolimit.com/Admin/Api/Order/DeleteOrder?NO_TRA_MAS="+ id, {
          return fetch("http://api.o-nolimit.com/Admin/Api/Order/DeleteOrder?NO_TRA_MAS="+ id, {
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
      showDetail(id: any){
        this.setState({isShowDetail: true});
        this.setState({OrderId: id});
      }
      private fields: object = { text: 'Name', value: 'Id' };
      dataListOrder() {
        return(
          this.state.data.map((item: any, i: any)=>(
                    <tr  key = {item.OrderId} >
                      <td className="w-20" scope="row">{item.OrderCode}</td>
                      <td className="w-20" scope="row">{item.UserName}</td>
                      <td className="w-20">
                        <Moment format="YYYY/MM/DD">
                          {item.OrderDate}
                      </Moment>
                      </td>
                      <td className="w-30">{item.Note}</td>
                      <td className="w-20">
                          <ComboBoxComponent id="games" dataSource={this.state.lstStatus} 
                          disabled={ true } autofill={ false } readonly={ true }
                          fields={this.fields} value={ item.Status } popupHeight="220px" />
                      </td>
                      <td className="w-10">  
                      <button 
                            className="margin-l-20 btn btn-primary" 
                                        type="button"  
                                        style= {{marginTop: "0px"}}
                                        onClick={
                                            () => {
                                                if(window.confirm("Bạn có chắc chắn muốn xóa đơn hàng " + item.OrderCode + " ?"))
                                                {
                                                    this.handleDeleteData(item.OrderId); 
                                                    this.refreshPage();
                                                }
                                            }
                                        }
                                        >
                                <span className="glyphicon glyphicon-trash"></span>
                            </button>
                        &nbsp;&nbsp;
                        <a href="#myModal" role="button" className="btn btn-primary" data-toggle="modal"  
                            onClick={ () => { this.setState( { detailKey : item.OrderId}) } }>
                            <span className="glyphicon glyphicon-option-vertical"></span>              
                        </a>               
                      </td>
                  </tr>
          )
          )
        ) 
  }
    render(){
      const styleshow = {
        display: this.state.isShowDetail ? "block" : "none"
    }
        return (
            <div className="wrapper">
           <Sidebar/>
            <div id="content">
                <Header/>
                <div  style={{padding: "20px", zIndex: 0}}>
                <h2>Danh mục đơn hàng</h2>
                <div className="row">
                <button data-toggle="modal" data-target="#myModalAdd" type="button" className="btn btn-primary"
                        // onClick={ ()=> { this.setState( { detailKey : 0 })  } }
                    >Thêm đơn hàng
                </button>
                <div className="line"></div>
                <table className="table table-bordered table-striped">
                    <thead>
                        <tr>
                        <th scope="col " className="w-20">Mã đơn Hàng</th>
                        <th scope="col " className="w-20">Khách hàng</th>
                        <th scope="col " className="w-20">Ngày đặt hàng</th>
                        <th scope="col " className="w-30">Ghi chú</th>
                        <th scope="col " className="w-20">Trạng thái</th>
                        <th scope="col " className="w-10">Hiển thị</th>
                        <th scope="col " className="w-1"></th>
                        </tr>
                    </thead>
                    <tbody>
                         {this.dataListOrder()}
                    </tbody>
                </table>      
            </div>
           
                {/* <div className="footer">
                    <p>Footer</p>
                </div>     */}

              <div className="modal" id="myModal"  role="dialog" aria-hidden="true">
                  <div className="modal-dialog modal-lg" role="document">
                      <div className="modal-content">
                          <div className="modal-header">
                              <h2 style={{width: "98%"}}>Chi tiết và chỉnh sửa đơn hàng</h2>
                              <button type="button" className="close" data-dismiss="modal" aria-label="Close" style={{width: "2%"}}
                                onClick={()=>{this.refreshPage()}}>
                                  <span aria-hidden="true">×</span>
                              </button>
                          </div>
                          <iframe src= { "./detailOrder?OrderId="+ this.state.detailKey } style={ { border:"0px" , height:"80vh"} }   width="100%" > </iframe>
                      </div>
                  </div>
              </div>
              </div>
        </div>
        <AddOrder/>
        </div>
        );
    }

}

export default Order;
