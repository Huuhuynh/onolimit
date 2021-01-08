import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

interface stateCustomer {
    onChangeId?: any,
    onChangeCustomerCode?: any,
    onChangeCustomerName?: any,
    onChangeEmail?: any,
    onChangePhone?: any,
    onChangeAddress?: any,
    onChangeBirthday?: any,
    onChangeFacebook?: any,
    onChangeWarehouseId?: any,
    onChangeUserName?: any,
    onChangeVISIBLE?: any,
    onChangePassword?: any
}
class ModalList extends React.Component<stateCustomer, any> {
    constructor(props:any) {
        super(props);
        this.state = {
            data: []
        }
    }
    componentDidMount() {
        fetch('http://api.o-nolimit.com/Admin/Api/Customer/GetCustomerApi?NO_OBJ=1',
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
        //console.log( this.props.onChangeId)
        //console.log( this.props.onChangeCustomerName)
        return (
            <div className="modal" id="myModalCustomer"  role="dialog" aria-hidden="true">
            <div className="modal-dialog modal-full" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h2 style={{width: "70%"}}>Thông tin khách hàng<noscript></noscript></h2>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close" style={{width: "2%"}}>
                            <span aria-hidden="true">×</span>
                        </button>
                    </div>
                    <div className="modal-body p-4" id="result">
                    <form action="/action_page.php" >
                        <div className="row">
                            <div className="col-sm-4">
                                <div className="form-group">
                                    <label >Mã khách hàng:</label>
                                    <input type="text" className="form-control" defaultValue= {this.props.onChangeCustomerCode}
                                        name="CustomerCode" 
                                    />
                                </div>  
                                
                                
                                <div className="form-group">
                                    <label >Mail:</label>
                                    <input type="text" className="form-control" 
                                        name="Address" 
                                        defaultValue= {this.props.onChangeEmail}
                                    />
                                </div>  
                                <div className="form-group">
                                    <label >Facebook:</label>
                                    <input type="text" className="form-control" placeholder="Địa chỉ facebook"
                                        name="Facebook" 
                                        defaultValue= {this.props.onChangeFacebook}
                                    />
                                </div>
                                <div className="form-group">
                                <label ><b>Mã kho khách</b></label><br/>
                                <label className="radio-inline"><input type="radio" name="WarehouseId"/>Kho A</label>
                                <label className="radio-inline"><input type="radio" name="WarehouseId"/>Kho B</label>
                                <label className="radio-inline"><input type="radio" name="WarehouseId"/>Kho C</label>

                                    {/* <label >Mã kho khách:</label>
                                    <input type="check" className="form-control" 
                                        name="WarehouseId" 
                                        defaultValue= {this.props.onChangeWarehouseId}
                                    /> */}
                                </div>
                                {/* <div className="form-group">
                                    <label >Mã trạng thái:</label>
                                    <input type="text" className="form-control" placeholder="Nhập mã trạng thái"
                                         name="HomePhone" 

                                    />
                                </div> */}
                            </div>
                            
                            <div className="col-sm-4">
                                <div className="form-group">
                                    <label >Tên khách hàng:</label>
                                    <input type="text" className="form-control" defaultValue= {this.props.onChangeCustomerName}
                                        name="CustomerName" 
                                    />
                                </div>  
                                  
                                <div className="form-group">
                                    <label >Điện thoại:</label>
                                    <input type="text" className="form-control" 
                                        name="Phone" 
                                        defaultValue= {this.props.onChangePhone}
                                    />
                                </div>
                                <div className="form-group">
                                    <label >Tên đăng nhập:</label>
                                    <input type="text" className="form-control" 
                                        name="Username" 
                                        defaultValue= {this.props.onChangeUserName}
                                    />
                                </div>
                                <div className="form-group">
                                    <label >Hiển thị:</label>
                                    <input type="checkbox" className="form-control"
                                        name="VISIBLE" 
                                        // defaultValue= {this.props.onChangeVISIBLE}
                                    />
                                </div>
                                {/* <div className="form-group">
                                    <label >Số lượng:</label>
                                    <input type="text" className="form-control" placeholder="Nhập số tượng"
                                        name="Fax" 
                                    />
                                </div>  
                                <div className="form-group">
                                    <label >Giá đơn hàng:</label>
                                    <input type="text" className="form-control" placeholder="Nhập đơn hàng"
                                         name="EmployeeName" 

                                    />
                                </div> */}
                                {/* <div className="form-group">
                                    <label >Sex:</label>
                                    <input type="text" className="form-control" placeholder="Nhập Sex"
                                        name="Sex" 
                                        required value={Sex}
                                        onChange={this.changeHandler}
                                    />
                                </div> */}
                                {/* <div className="form-group">
                                    <label >Giá mua:</label>
                                    <input type="text" className="form-control" placeholder="Nhập giá mua	"
                                        name="UserName" 
                                    />
                                </div>
                                <div className="form-group">
                                    <label >Tỷ lệ:</label>
                                    <input type="text" className="form-control" placeholder="Nhập tỷ lệ"
                                        name="Password" 
                                    />
                                </div> */}
                            </div>
                            <div className="col-sm-4">
                                <div className="form-group">
                                    <label >Địa chỉ:</label>
                                    <input type="text" className="form-control" 
                                        name="Address" 
                                        defaultValue= {this.props.onChangeAddress}
                                    />
                                </div>
                                <div className="form-group">
                                    <label >Ngày sinh:</label>
                                    <input 
                                        style={{width: "100%"}}
                                        className="form-control" 
                                        type="date" 
                                        defaultValue= {this.props.onChangeBirthday}
                                        name="Birthday">
                                    </input>
                                </div>
                                <div className="form-group">
                                    <label >Mật khẩu:</label>
                                    <input type="password" className="form-control" 
                                        name="Password" 
                                        defaultValue= {this.props.onChangePassword}
                                    />
                                </div>
                            </div>
                        </div>
                    </form>
                    </div>
                    <div className="modal-footer">
                        {/* <button type="button" className="btn btn-secondary" data-dismiss="modal">OK</button> */}
                        <div className="row">
                             <div className="col-sm-6">
                                 <button type="submit" className="btn btn-primary" data-dismiss="modal">Hủy</button>
                             </div>
                             <div className="col-sm-6">
                                 <button type="submit" className="btn btn-primary" data-dismiss="modal">Lưu</button>
                             </div>
                         </div>
                    </div>
                </div>
            </div>
        </div>
        );
    }

}

export default ModalList;