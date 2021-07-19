import React, { Component } from 'react';
import '../../assets/css/cart.css';
import bakwan from '../../assets/images/bakwan.jpeg';

export default class Cart extends Component {
	render() {
		return (
			<>
				<div className="cart-container">
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
							<div className="item-qty">23</div>
						</div>

						<div className="cart-wrapper">
							<div className="cart-img">
								<img 
								
								className="img-item"
								id="cart_id" 
								src={bakwan} 
								alt="item-img"/>
							</div>
							<div className="item-name">Bakwan Jagung</div>
							<div className="item-qty">23</div>
						</div>

						<div className="cart-wrapper">
							<div className="cart-img">
								<img 
								
								className="img-item"
								id="cart_id" 
								src={bakwan} 
								alt="item-img"/>
							</div>
							<div className="item-name">Bakwan Jagung</div>
							<div className="item-qty">23</div>
						</div>

					</div>
				</div>
			</>
		);
	}
}
