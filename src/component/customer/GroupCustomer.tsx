import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../home/Home.css';
import Sidebar from '../sidebar/sidebar';
import Header from '../sidebar/header';

class GroupCustomer extends React.Component<any, any> {
    constructor(props:any) {
        super(props);
        this.state = {
          data: null
        };
      }

      componentDidMount() {
        fetch('http://www.o-nolimit.com/Admin/Api/Customer/LoadCustomers')
            .then(response => response.json())
            .then(data => this.setState({ data }))
            .catch(e => {
                console.log(e);
                return e;
            });
      }

    render(){
        console.log(this.state.data)
        return (
            <div className="wrapper">
           <Sidebar/>

            <div id="content">

               <Header/>
                <div style={{padding: "20px"}}>
                <h2>Chức năng thao tác nhóm khách hàng</h2>
                <div className="row">
                    <div className="col-sm-4">
                        <div className="row">
                            <div className="col-sm-4">
                                <strong>Tìm kiếm:</strong>
                            </div>
                            <div className="col-sm-8">
                                <input className="form-control" type="text" placeholder="Search" aria-label="Search"/>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-3">
                        
                    </div>
                    <div className="col-sm-3">
                        <div className="row">
                            <div className="col-sm-6" style={{textAlign:"center"}}>
                                <strong>Thêm mới:</strong>
                            </div>
                            <div className="col-sm-6">
                                <button type="button" className="btn btn-success">Thêm</button>
                            </div>                            
                        </div>
                    </div>
                    <div className="col-sm-2">
                        <div className="row">
                            <div className="col-sm-5">
                                <strong>Export:</strong>
                            </div>
                            <div className="col-sm-7">
                                <button type="button" className="btn btn-success">Export</button>
                            </div>                            
                        </div>
                    </div>
                </div>
                

                <div className="line"></div>

                <h2>Nhóm khách hàng</h2>
                <div className="row border-row">
                    <div className="col-sm-2 border-column" >Mã nhóm</div>
                    <div className="col-sm-3 border-column">Tên nhóm</div>
                    <div className="col-sm-2 border-column" >Mã Phụ</div>
                    <div className="col-sm-2 border-column" >Thứ tự</div>
                    <div className="col-sm-2 border-column" >Hiển thị</div>
                    <div className="col-sm-1 " ></div>
                </div>
                </div>

            </div>
        </div>
        );
    }

}

export default GroupCustomer;
