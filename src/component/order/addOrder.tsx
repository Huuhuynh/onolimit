import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../home/Home.css';
import axios from 'axios';
import { any } from 'prop-types';
import { ColumnDirective, ColumnsDirective, GridComponent } from '@syncfusion/ej2-react-grids';
import { Edit, EditSettingsModel, Inject, Toolbar, ToolbarItems } from '@syncfusion/ej2-react-grids';
import { DatePickerComponent } from '@syncfusion/ej2-react-calendars';
import { ComboBoxComponent, ChangeEventArgs } from '@syncfusion/ej2-react-dropdowns';


class AddOrder extends React.Component<any, any> {
    private dateValue= new Date();
    public editOptions: EditSettingsModel = { allowEditing: true, allowAdding: true, allowDeleting: true, mode: 'Normal' };
    public toolbarOptions: ToolbarItems[] = ['Add', 'Edit', 'Delete', 'Update', 'Cancel'];
    constructor(props:any) {
        super(props);
        this.state = {
                lstDetail: [],
                order: {
                    OrderId: 0,
                    OrderCode: this.guid(),
                    UserId: 0,
                    OrderDate: this.dateValue,
                    Note: "",
                    Warehouse:1,
                    VISIBLE: true,
                    Status: 1                
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
          userid: sessionStorage.getItem('UserId'),
        };
      }
      guid() {
        return 'xxxxxyyyyx'.replace(/[xy]/g, function(c) {
          var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
          return v.toString(16).toUpperCase();
        });
      }
      
      changeHandler=(e: any)=>{ 
        let dataOrder = this.state.order;
        dataOrder[e.target.name] = e.target.value;
        this.setState(this.state.order);
        //console.log("order")
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

      refreshPage(){ 
        window.location.reload();
        }
      submitHandler = (e: any) =>{
        let dataOrder = this.state.order;
        dataOrder.UserId=this.state.userid;
        e.preventDefault()
        this.setState({})
        axios
        .post('http://api.o-nolimit.com/Admin/Api/Order/InsertOrder', this.state,
        { headers: { 'Content-Type': 'application/json' ,
                      "Token": this.state.token} }
        )
        .then(response =>{
            if(response.status==201)
            {
                alert("Thêm mới đơn hàng thành công!");
                this.refreshPage();
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
 
      changes(){
        this.setState({showEdit: true});
      }
      getYear() {
        return new Date().getFullYear();
    }
    
    private fields: object = { text: 'Name', value: 'Id' };
    render(){
        const {
            OrderId,
            OrderCode,
            UserId ,
            OrderDate ,
            Note ,
            Warehouse,
            VISIBLE ,
            Status 
         } =  this.state.order;
         
        return (
            <div className="modal" id="myModalAdd"  role="dialog" aria-hidden="true">
            <div className="modal-dialog modal-lg" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h2 style={{width: "98%"}}>Thêm đơn hàng</h2>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close" style={{width: "2%"}}
                        onClick={()=>{this.refreshPage()}}>
                            <span aria-hidden="true">×</span>
                        </button>
                    </div>
                    <form  onSubmit={this.submitHandler}>
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
                                     <label >Ngày đặt:</label>
                                        <DatePickerComponent id="datepicker"  value={this.state.order.OrderDate} format='yyyy-MM-dd' placeholder='Enter date' />
                                 </div>
                             </div>
                             <div className="col-sm-3">
                                <div className="form-group">
                                     <label>Tình trạng:</label>
                                     <ComboBoxComponent id="games" readonly={ true } dataSource={this.state.lstStatus} fields={this.fields} change={this.onChange} placeholder="Select a game" value={ Status } popupHeight="220px" />
                                 </div>
                             </div>
                         </div>
                         <div className="row">
                            <div className="col-sm-6">
                                <div className="form-group">
                                    <label ><b>Mã kho khách</b></label><br/>
                                    <label className="radio-inline">
                                        <input type="radio" value="1" onChange={this.handleOptionChange} checked={ Warehouse===1 } name="Warehouse"/>Kho A
                                    </label>
                                    <label className="radio-inline">
                                        <input type="radio" value="2" onChange={this.handleOptionChange} checked={ Warehouse===2 } name="Warehouse"/>Kho B
                                    </label>
                                    <label className="radio-inline">
                                        <input type="radio" value="3" onChange={this.handleOptionChange} checked={ Warehouse===3 } name="Warehouse"/>Kho C
                                    </label>
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="form-group">
                                    <label>Ghi chú:</label>
                                    <textarea className="form-control" id="comment" 
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
                                <ColumnDirective field='ProductCode' headerText='Mã trạng thái' width='100' />
                                <ColumnDirective field='Color' headerText='Màu' width='100' />
                                <ColumnDirective field='Size' headerText='Size' width='100' format="C2" />
                                <ColumnDirective field='Quantity' headerText='Số lượng' width='100' />
                                <ColumnDirective field='OrderPrice' headerText='Giá đặt' width='100' />
                                <ColumnDirective field='PurchasePrice' headerText='Giá mua' width='100' />
                                <ColumnDirective field='Rate' headerText='Tỷ giá' width='100' />
                            </ColumnsDirective>
                            <Inject services={[Edit, Toolbar]} />
                        </GridComponent>
                     </div>
                     <div className="line"></div>
                     <br/>
                     <div className="modal-footer">
                        <button type="submit" className="btn btn-primary" onClick={(i)=>{this.submitHandler(i)}}>Thêm đơn hàng</button>
                    </div>
                </div>
            </form>
                </div>
            </div>
        </div>
           
        );
    }


}

export default AddOrder;