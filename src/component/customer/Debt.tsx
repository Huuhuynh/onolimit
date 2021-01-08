import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../home/Home.css';
import Sidebar from '../sidebar/sidebar';
import Header from '../sidebar/header';

class Debt extends React.Component<any, any> {
    constructor(props:any) {
        super(props);
        this.state = {
          data: null
        };
      }

      componentDidMount() {
        // fetch('https://jsonplaceholder.typicode.com/todos/1')
        //     .then(response => response.json())
        //     .then(data => this.setState({ data }))
        //     .catch(e => {
        //         console.log(e);
        //         return e;
        //     });
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
                    <div className="col-sm-6">
                        <div className = "col-sm-8">
                            <select className="form-control" id="exampleFormControlSelect1">
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                            </select>
                        </div>
                        <div className = "col-sm-4">
                            <button type="button" className="btn btn-success">Xem</button>
                        </div>
                       
                    </div>
                    <div className="col-sm-6"></div>
                </div>
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
                <div className="row border-row">
                    <div className="col-sm-2 border-column" >Mã đơn</div>
                    <div className="col-sm-3 border-column">Ngày đặt</div>
                    <div className="col-sm-2 border-column" >Tổng tiền</div>
                    <div className="col-sm-2 border-column" >Tạm ứng</div>
                    <div className="col-sm-1 border-column" >Thanh toán</div>
                    <div className="col-sm-1 border-column" >Còn lại</div>
                    <div className="col-sm-1 " ></div>
                </div>
                </div>
            </div>
        </div>
        );
    }

}

export default Debt;
