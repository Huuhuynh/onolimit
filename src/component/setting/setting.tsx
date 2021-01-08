import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../home/Home.css';
import Sidebar from '../sidebar/sidebar';
import Header from '../sidebar/header';

class Setting extends React.Component<any, any> {
   
    render(){
        return (
           <div className="wrapper">
                <Sidebar/>
                <div id="content">

               <Header/>
                <form action="/action_page.php" style={{
                    width: "900px", margin: "auto"
                }}>
                    <div className="form-group">
                        <label>Tỷ giá USD:</label>
                        <input type="text" className="form-control"/>
                    </div>
                    <div className="form-group">
                        <label>Số ngày nhắc nhở mua hàng:</label>
                        <input type="text" className="form-control"/>
                    </div>
                    <button style = {{width: "50px"}} type="button" className="btn btn-success">Lưu</button>
                </form>
                </div>
                <div className="footer">
                    <p>Footer</p>
                </div>
           </div>
        );
    }

}

export default Setting;
