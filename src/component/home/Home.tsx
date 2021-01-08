import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../home/Home.css';
import AddOrder from '../order/addOrder';
import { Link } from 'react-router-dom';



var num_integer: 1
class Home extends React.Component<any, any> {
	
	constructor(props:any) {
        super(props);
		this.state = {
			showLogin: false,
			ID_OTY: false,
			checkLogin1: false,
			checkLogin2: true
		}
	}
	componentWillMount(){
		let num : any
		num  = 1
		if( sessionStorage.getItem('Token') ===  null){
			this.setState({showLogin: true})
			this.setState({checkLogin1: false})
			this.setState({checkLogin2: true})
		}else{
			this.setState({checkLogin1: true})
			this.setState({checkLogin2: false})
		}
		if( sessionStorage.getItem('ID_OTY') == num ){
			this.setState({ID_OTY: true})
		}
	}
	checkLogin(){
		if(sessionStorage.getItem('Token')===null){
			return <Link to="login"></Link>
		}else {
			 return <button data-toggle="modal" data-target="#myModalAdd" type="button" 
                    ></button>
		}
	
	}
	logOut(){
		sessionStorage.clear();	
	}
    render(){
		const styleshow2 = {
            display: this.state.showLogin ?   "none" : "-webkit-inline-box" 
		}
		const styleshow1 = {
            display: this.state.showLogin ?  "block" : "none"
		}
		const styleshow3 = {
            display: this.state.ID_OTY ?  "block" : "none"
		}
		const styleCheckLogin1 = {
            display: this.state.checkLogin1 ?  "block" : "none"
		}
		const styleCheckLogin2 = {
            display: this.state.checkLogin2 ?  "block" : "none"
        }
        return (
            <div>
	<div id="preloder">
		<div className="loader"></div>
	</div>

	<header className="header-section clearfix">
		<a href="./" className="site-logo">
			<img src="img/logo.png" alt=""/>
		</a>
		<div style = {styleshow1} className="header-right">
			<div className="user-panel">
				<a href="login" className="login">Đăng nhập</a>
				<a href="sign-up" className="register">Đăng ký</a>
			</div> 
		</div>
		<ul className="main-menu">
			<li><a href="./">Trang chủ</a></li>
			<li><a href="./">Giới thiệu</a></li>
			<li>
				<a style={styleCheckLogin2} href="login" className="colorFFF">
					Đặt hàng	
				</a> 
				<a style={styleCheckLogin1} data-toggle="modal" data-target="#myModalAdd"  className="colorFFF"
				>Đặt hàng</a>
			</li>
			<li><a href="./">Tin tức</a></li>
			<li><a href="./">Liên hệ</a></li>

			<li style={styleshow2}><a href="#"><span className="glyphicon glyphicon-user"></span>&nbsp;&nbsp;{sessionStorage.getItem("Name")}</a>
				<ul className="sub-menu color-dropdown">
					<li><a href="user">Thông tin tài khoản</a></li>
					<li><a href="order">Theo dõi đơn hàng</a></li>
					<li style = {styleshow3}>
						<a href="home">Quản trị</a>
					</li>
					<li><a href="/" onClick={this.logOut}>Thoát</a></li>
				</ul>
			</li>


		</ul>
	</header>
	<section className="hero-section">
		<div className="hero-slider owl-carousel">
			<div className="hs-item">
				<div className="container">
					<div className="row">
						<div className="col-lg-6">
							<div className="hs-text">
								<h2><span>Music</span> for everyone.</h2>
								<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. </p>
								<a href="#" className="site-btn">Download Now</a>
								<a href="#" className="site-btn sb-c2">Start free trial</a>
							</div>
						</div>
						<div className="col-lg-6">
							<div className="hr-img">
								<img src="img/hero-bg.png" alt=""/>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="hs-item">
				<div className="container">
					<div className="row">
						<div className="col-lg-6">
							<div className="hs-text">
								<h2><span>Listen </span> to new music.</h2>
								<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. </p>
								<a href="#" className="site-btn">Download Now</a>
								<a href="#" className="site-btn sb-c2">Start free trial</a>
							</div>
						</div>
						<div className="col-lg-6">
							<div className="hr-img">
								<img src="img/hero-bg.png" alt=""/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>

	<section className="intro-section spad">
		<div className="container">
			<div className="row">
				<div className="col-lg-6">
					<div className="section-title">
						<h2>ONOLIMIT LOGISTICS</h2>
					</div>
				</div>
				<div className="col-lg-6">
					<p>O-NOLIMIT là đơn vị cung cấp dịch vụ đặt hàng từ nước ngoài.</p>
					<a style={styleCheckLogin2} className="site-btn colorFFF" href="login">
						Đặt hàng ngay	
					</a> 
					<a style={styleCheckLogin1} className="site-btn colorFFF" data-toggle="modal" data-target="#myModalAdd"
                    >Đặt hàng ngay</a>				
				</div>
			</div>
		</div>
	</section>

	<section className="how-section spad set-bg" data-setbg="img/how-to-bg.jpg">
		<div className="container text-white">
			<div className="section-title">
				<h2>Quy trình đặt hàng</h2>
			</div>
			<div className="row">
				<div className="col-md-4">
					<div className="how-item">
						<div className="hi-icon">
							<img src="img/icons/brain.png" alt=""/>
						</div>
						<h4>Đăng ký tài khoản</h4>
						<p>Đăng ký tài khoản và chúng tôi sẽ cung cấp các dịch với chất lượng đảm bảo và uy tín nhất</p>
					</div>
				</div>
				<div className="col-md-4">
					<div className="how-item">
						<div className="hi-icon">
							<img src="img/icons/pointer.png" alt=""/>
						</div>
						<h4>Chọn đơn hàng</h4>
						<p>Lựa chọn đơn hàng từ các nhà cung cấp. </p>
					</div>
				</div>
				<div className="col-md-4">
					<div className="how-item">
						<div className="hi-icon">
							<img src="img/icons/smartphone.png" alt=""/>
						</div>
						<h4>Tiến hành đặt hàng</h4>
						<p> Đặt hàng và chúng tôi sẽ giao hàng đến tận tay các bạn với chi phí rẻ nhất trong thời gian sớm nhất </p>
					</div>
				</div>
			</div>
		</div>
	</section>

	<section className="concept-section spad">
		<div className="container">
			<div className="row">
				<div className="col-lg-6">
					<div className="section-title">
						<h2>Đặc điểm nỗi trội của ONOLIMIT</h2>
					</div>
				</div>
				<div className="col-lg-6">
					<p>Chất lượng, uy tín và kịp thời. </p>
				</div>
			</div>
			<div className="row">
				<div className="col-lg-3 col-sm-6">
					<div className="concept-item">
						<img src="img/concept/1.jpg" alt=""/>
						<h5>Soul Music</h5>
					</div>
				</div>
				<div className="col-lg-3 col-sm-6">
					<div className="concept-item">
						<img src="img/concept/2.jpg" alt=""/>
						<h5>Live Concerts</h5>
					</div>
				</div>
				<div className="col-lg-3 col-sm-6">
					<div className="concept-item">
						<img src="img/concept/3.jpg" alt=""/>
						<h5>Dj Sets</h5>
					</div>
				</div>
				<div className="col-lg-3 col-sm-6">
					<div className="concept-item">
						<img src="img/concept/4.jpg" alt=""/>
						<h5>Live Streems</h5>
					</div>
				</div>
			</div>
		</div>
	</section>

	{/* <section className="subscription-section spad">
		<div className="container">
			<div className="row">
				<div className="col-lg-6">
					<div className="sub-text">
						<h2>Subscription from $15/month</h2>
						<h3>Start a free trial now</h3>
						<p>Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
						<a href="#" className="site-btn">Try it now</a>
					</div>
				</div>
				<div className="col-lg-6">
					<ul className="sub-list">
						<li><img src="img/icons/check-icon.png" alt=""/>Play any track</li>
						<li><img src="img/icons/check-icon.png" alt=""/>Listen offline</li>
						<li><img src="img/icons/check-icon.png" alt=""/>No ad interruptions</li>
						<li><img src="img/icons/check-icon.png" alt=""/>Unlimited skips</li>
						<li><img src="img/icons/check-icon.png" alt=""/>High quality audio</li>
						<li><img src="img/icons/check-icon.png" alt=""/>Shuffle play</li>
					</ul>
				</div>
			</div>
		</div>
	</section> */}

	<section className="premium-section spad">
		<div className="container">
			<div className="row">
				<div className="col-lg-6">
					<div className="section-title">
						<h2>Tại sao phải lựa chọn ONOLIMIT?</h2>
					</div>
				</div>
				<div className="col-lg-6">
					<p>Nội dung giới thiệu ở đây</p>
				</div>
			</div>
			<div className="row">
				<div className="col-lg-3 col-sm-6">
					<div className="premium-item">
						<img src="img/premium/1.jpg" alt=""/>
						<h4>Nhiệt tình và thân thiện</h4>
						<p>Khách hàng là thượng đế</p>
					</div>
				</div>
				<div className="col-lg-3 col-sm-6">
					<div className="premium-item">
						<img src="img/premium/2.jpg" alt=""/>
						<h4>Chất lượng đảm bảo </h4>
						<p>Lấy chất lượng làm tiêu chuẩn đánh giá</p>
					</div>
				</div>
				<div className="col-lg-3 col-sm-6">
					<div className="premium-item">
						<img src="img/premium/3.jpg" alt=""/>
						<h4>Hỗ trợ 24/7</h4>
						<p>Luôn luôn lắng nghe nhưng nhìn mới hiểu </p>
					</div>
				</div>
				<div className="col-lg-3 col-sm-6">
					<div className="premium-item">
						<img src="img/premium/4.jpg" alt=""/>
						<h4>Nhanh chóng</h4>
						<p>Nhanh chóng chỉ vài nốt nhạc</p>
					</div>
				</div>
			</div>
		</div>
	</section>
	<AddOrder/>
	<footer className="footer-section">
		<div className="container">
			<div className="row">
				<div className="col-xl-6 col-lg-7 order-lg-2">
					<div className="row">
						<div className="col-sm-6">
							<div className="footer-widget">
								<h2>Giới thiệu</h2>
								<ul>
									<li><a href="./">Về Onolimit</a></li>
									<li><a href="./">Cơ cấu bộ máy</a></li>
									<li><a href="./">Lịch sử hình thành</a></li>
								</ul>
							</div>
						</div>
						<div className="col-sm-6">
							<div className="footer-widget">
								<h2>Dịch vụ</h2>
								<ul>
									<li><a href="./">Đặt hàng Quốc tế</a></li>
									<li><a href="./">Đặt hàng Trung Quốc</a></li>
									<li><a href="./">Vận chuyển hàng Quốc tế</a></li>
									<li><a href="./">Vận chuyển hàng trong nước</a></li>
								</ul>
							</div>
						</div>
						{/* <div className="col-sm-4">
							<div className="footer-widget">
								<h2>Playlists</h2>
								<ul>
									<li><a href="">Newsletter</a></li>
									<li><a href="">Careers</a></li>
									<li><a href="">Press</a></li>
									<li><a href="">Contact</a></li>
								</ul>
							</div>
						</div> */}
					</div>
				</div>
				<div className="col-xl-6 col-lg-5 order-lg-1">
					<img src="img/logo.png" alt=""/>
					<div className="copyright">
Copyright &copy; 2019 All rights reserved | Design by <a href="https://softviet.vn" target="_blank">Soft Việt</a></div>
				</div>
			</div>
		</div>
	</footer>

	<script src="js/jquery-3.2.1.min.js"></script>
	<script src="js/bootstrap.min.js"></script>
	<script src="js/jquery.slicknav.min.js"></script>
	<script src="js/owl.carousel.min.js"></script>
	<script src="js/mixitup.min.js"></script>
	<script src="js/main.js"></script>

            </div>
        );
    }

}

export default Home;
