import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../home/Home.css';
import Sidebar from '../sidebar/sidebar';
import Header from '../sidebar/header';

class EditEmployees extends React.Component<any, any> {
    constructor(props:any) {
        super(props);
        this.state = {
          data: null
        };
      }

      componentDidMount() {

      }

    render(){
        // const {
        //     order: {
        //         OrderCode,
                
        //     },
        //     //mã nv
        //     EmployeeCode,
        //     //ten nv
        //     EmployeeName,
        //     //dia chi
        //     Address ,
        //     //mail
        //     Email,
        //     //
        //     HomePhone,
        //     //
        //     OfficePhone,
        //     //web
        //     MobilePhone,
        //      //mail
        //      Fax,
        //      //
        //      Birthday,
        //      //
        //      Sex,
        //      //
        //      UserName,
        //      //
        //      Password
        //  } = this.state;
        return (
            <div className="modal" id="myModalEdit"  role="dialog" aria-hidden="true">
            <div className="modal-dialog modal-full" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h2 style={{width: "98%"}}>Chỉnh sửa thông tin nhân viên</h2>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close" style={{width: "2%"}}>
                            <span aria-hidden="true">×</span>
                        </button>
                    </div>
                    <div className="modal-body p-4" id="result">
                    <form action="/action_page.php" >
                        <div className="row">
                            <div className="col-sm-5">
                                <div className="form-group">
                                    <label >Mã đơn hàng:</label>
                                    <input type="text" className="form-control" placeholder="Nhập mã đơn hàng"
                                        name="EmployeeCode" 

                                    />
                                </div>  
                                <div className="form-group">
                                    <label >Ngày:</label>
                                    <input 
                                        style={{width: "100%"}}
                                        className="date-style " 
                                        type="date" 
                                        name="Birthday">
                                    </input>
                                </div>
                                <div className="form-group">
                                    <label >Trạng thái:</label>
                                    <input type="text" className="form-control" placeholder="Nhập trạng thái"
                                        name="Address" 

                                    />
                                </div>  
                                <div className="form-group">
                                    <label >Ghi chú:</label>
                                    <input type="text" className="form-control" placeholder="Nhập ghi chú"
                                        name="Email" 

                                    />
                                </div>
                                <div className="form-group">
                                    <label >Mã trạng thái:</label>
                                    <input type="text" className="form-control" placeholder="Nhập mã trạng thái"
                                         name="HomePhone" 

                                    />
                                </div>
                            </div>
                            <div className="col-sm-2"></div>
                            <div className="col-sm-5">
                                <div className="form-group">
                                    <label >Màu:</label>
                                    <input type="text" className="form-control" placeholder="Nhập Màu"
                                        name="OfficePhone" 
                                    />
                                </div>  
                                <div className="form-group">
                                    <label >Size:</label>
                                    <input type="text" className="form-control" placeholder="Nhập size"
                                        name="MobilePhone" 
                                    />
                                </div>
                                <div className="form-group">
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

export default EditEmployees;
