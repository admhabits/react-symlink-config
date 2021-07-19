import React, { Component } from 'react';
import '../../assets/css/cart.css';
import bakwan from '../../assets/images/bakwan.jpeg';
import mendoan from '../../assets/images/mendoan.jpeg';
import roti from '../../assets/images/roti.jpeg';
import kopi from '../../assets/images/kopi.jpeg';

export default class Cart extends Component {
	render() {
		return (
			<>
				<div className="cart-container" id="cart_c">
				<span></span>
					<div className="cart-box">
						<div className="cart-wrapper">
							<div className="cart-img">
								<img 
								
								className="img-item"
								id="cart_id" 
								src={bakwan} 
								alt="item-img"/>
							</div>
							<div className="item-name">Bakwan Jagung</div>
							<div className="item-qty">
								<span className="minus">-</span>
								<span className="counter">21</span>
								<span className="plus">+</span>
								<span className="subprice">Rp 20.000</span>
							</div>
						</div>

						<div className="cart-wrapper">
							<div className="cart-img">
								<img 
								
								className="img-item"
								id="cart_id" 
								src={mendoan} 
								alt="item-img"/>
							</div>
							<div className="item-name">Mendoan Spicy</div>
							<div className="item-qty">
								<span className="minus">-</span>
								<span className="counter">21</span>
								<span className="plus">+</span>
								<span className="subprice">Rp 20.000</span>

							</div>
						</div>

						<div className="cart-wrapper">
							<div className="cart-img">
								<img 
								
								className="img-item"
								id="cart_id" 
								src={roti} 
								alt="item-img"/>
							</div>
							<div className="item-name">Roti Bakar</div>
							<div className="item-qty">
								<span className="minus">-</span>
								<span className="counter">21</span>
								<span className="plus">+</span>
								<span className="subprice">Rp 20.000</span>

							</div>
						</div>

						<div className="cart-wrapper">
							<div className="cart-img">
								<img 
								
								className="img-item"
								id="cart_id" 
								src={kopi} 
								alt="item-img"/>
							</div>
							<div className="item-name">Kopi Hitam</div>
							<div className="item-qty">
								<span className="minus">-</span>
								<span className="counter">21</span>
								<span className="plus">+</span>
								<span className="subprice">Rp 20.000</span>
								
							</div>
						</div>

					</div>
				</div>
			</>
		);
	}
}
