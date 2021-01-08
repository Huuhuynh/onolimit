import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../home/Home.css';
import { any } from 'prop-types';
import queryString from 'query-string';
import axios from 'axios';
import './order.css';
import { ColumnDirective, ColumnsDirective, GridComponent } from '@syncfusion/ej2-react-grids';
import { Edit, EditSettingsModel, Inject, Toolbar, ToolbarItems } from '@syncfusion/ej2-react-grids';
import { DatePickerComponent } from '@syncfusion/ej2-react-calendars';
import { ComboBoxComponent, ChangeEventArgs } from '@syncfusion/ej2-react-dropdowns';

class DetailOrder extends React.Component<any, any> {
    public editOptions: EditSettingsModel = { allowEditing: true, allowAdding: true, allowDeleting: true, mode: 'Normal' };
    public toolbarOptions: ToolbarItems[] = ['Add', 'Edit', 'Delete', 'Update', 'Cancel'];
  
    constructor(props:any) {
        super(props);
        this.state = {
                lstDetail: [
                    {
                        OrderId: 0,
                        OrderDetailId: 0,
                        Link: "",
                        ProductCode: "",
                        Color: "",
                        Size: "",
                        Quantity: any,
                        OrderPrice: any,
                        PurchasePrice: any,
                        Rate: any,
                        Note: ""
                    },
                ],
                order: {
                    OrderId: 0,
                    OrderCode: "",
                    UserId: 0,
                    OrderDate: "",
                    Note: "",
                    VISIBLE: true,
                    Status: "",
                    Warehouse: any,
                },
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
          token: sessionStorage.getItem('Token'),
          showEdit: false,
          userid: sessionStorage.getItem('UserId')
        };
        
      }
         
      componentDidMount() {
        const values = queryString.parse(this.props.location.search);
        fetch('http://api.o-nolimit.com/Admin/Api/Order/GetOrderMaster?NO_TRA_MAS='+ values.OrderId,
        {headers:new Headers ({
            "Token": this.state.token,
        })}
        )
            .then(response => response.json())
            .then(order => this.setState({order}))
            .catch(e => {
                console.log(e);
                return e;
            });

            fetch('http://api.o-nolimit.com/Admin/Api/Order/GetOrderDetail?NO_TRA_MAS='+ values.OrderId,
        {headers:new Headers ({
            "Token": this.state.token,
        })}
        )
            .then(response => response.json())
            .then(lstDetail => this.setState({lstDetail}))
            .catch(e => {
                console.log(e);
                return e;
            });
      }
      refreshPage(){ 
        window.location.reload();
        }
      changeHandler=(e: any)=>{ 
        let dataOrder = this.state.order;
        dataOrder[e.target.name] = e.target.value;
        this.setState(this.state.order);
      }
      handleOptionChange =(e: any)=> {
        let dataOrder = this.state.order;
        dataOrder["Warehouse"] = parseInt(e.target.value);
        this.setState({order : dataOrder});
      }
      onChange =(e: any)=> {
        let dataOrder = this.state.order;
        dataOrder["Status"] = parseInt(e.value);
        this.setState({order : dataOrder});
      }
      submitHandler = (e: any) =>{
        let dataOrder = this.state.order;
        dataOrder.UserId=this.state.userid;
        e.preventDefault();
        //console.log(this.state.data);
        const values = queryString.parse(this.props.location.search);
        const headers = {
            'Content-Type': 'application/json',
            'Token': this.state.token
          }
            axios.put('http://api.o-nolimit.com/Admin/Api/Order/UpdateOrder', this.state,
            {
                headers : headers
            }).then(response =>{
              if(response.status==200)
              {
                  alert("Chỉnh sửa thông tin đơn hàng thành công!");
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
      private fields: object = { text: 'Name', value: 'Id' };
    render(){
        const {
            OrderId,
            OrderCode,
            UserId ,
            OrderDate ,
            Note ,
            VISIBLE ,
            Status, 
            Warehouse
         } =  this.state.order;
        return (
            <div>
                <div className="modal-body p-4" id="result">
                   
                         <div className="row">
                             <div className="col-sm-6"> 
                                 <div className="form-group">
                                     <label >Mã đơn hàng:</label>
                                     <input type="text" className="form-control"  
                                        name="OrderCode" 
                                        required value={OrderCode} 
                                        onChange={this.changeHandler} />
                                 </div>  
                                
                             </div>
                             <div className="col-sm-3">
                                    <div className="form-group">
                                        <label >Ngày đặt hàng:</label>
                                        <DatePickerComponent id="datepicker"  value={this.state.order.OrderDate} format='yyyy-MM-dd' placeholder='Nhập ngày' />
                                    </div>
                            </div>
                            <div className="col-sm-3">
                                <div className="form-group">
                                     <label>Tình trạng:</label>
                                     <ComboBoxComponent id="games" dataSource={this.state.lstStatus} fields={this.fields} change={this.onChange} placeholder="Select a game" value={ this.state.order.Status } popupHeight="220px" />
                                 </div>
                             </div>
                         </div>
                         <div className="row">
                             <div className="col-sm-6">
                                <div className="form-group">
                                    <label ><b>Mã kho khách</b></label><br/>
                                    <label className="radio-inline">
                                        <input type="radio" value="1"  onChange={this.handleOptionChange} checked={this.state.order.Warehouse===1} name="Warehouse"/>Kho A
                                    </label>
                                    <label className="radio-inline">
                                        <input type="radio" value="2" onChange={this.handleOptionChange} checked={this.state.order.Warehouse===2} name="Warehouse"/>Kho B
                                    </label>
                                    <label className="radio-inline">
                                        <input type="radio" value="3" onChange={this.handleOptionChange} checked={this.state.order.Warehouse===3} name="Warehouse"/>Kho C
                                    </label>
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="form-group">
                                    <label >Ghi chú:</label>
                                     <textarea className="form-control" rows={2} id="comment" 
                                        name="Note" 
                                        required value={Note} 
                                        onChange={this.changeHandler}
                                     ></textarea>
                                </div>
                            </div>
                         </div>
                     
                     <div className="line"></div>
                     <div id="styleInput">
                     <GridComponent dataSource={this.state.lstDetail} editSettings={this.editOptions} toolbar={this.toolbarOptions} height={265}>
                        <ColumnsDirective>
                            <ColumnDirective field='ProductCode' headerText='Mã trạng thái' width='100' textAlign="Right" isPrimaryKey={true}/>
                            <ColumnDirective field='Color' headerText='Màu' width='100'/>
                            <ColumnDirective field='Size' headerText='Size' width='100' format="C2" />
                            <ColumnDirective field='Quantity' headerText='Số lượng'  width='100'/>
                            <ColumnDirective field='OrderPrice' headerText='Giá đặt' width='100'/>
                            <ColumnDirective field='PurchasePrice' headerText='Giá mua' width='100'/>
                            <ColumnDirective field='Rate' headerText='Tỷ giá' width='100'/>
                        </ColumnsDirective>
                        <Inject services={[Edit, Toolbar]} />
                        </GridComponent>
                     </div> 
                     <div className="line"></div>
                </div>
                <div className="modal-footer">
                    <button type="submit" className="btn btn-primary" onClick={(i)=>{this.submitHandler(i)}}>Lưu</button>
                </div>
            </div>
        );
    }

}

export default DetailOrder;
