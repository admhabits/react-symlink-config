import React, { Component } from 'react';
import '../../assets/css/cart.css';
import { dataCart } from '../../data/cart.js';

export default class Cart extends Component {
	constructor(props){
		super(props);
		this.state = {
			cart: null
		};
	}

	componentDidMount() {
	
		this.setState({
			cart: dataCart.cart
		})
	}

	render() {
		const { cart } = this.state;
		return (
			<>
				<div className="cart-container" id="cart_c">
				<span></span>
					<div className="cart-box">
						{
							cart !== null && (

								Object.keys(cart).map((val, key)=>(
									<div className="cart-wrapper">
										<div className="cart-img">
											<img 
											
											className="img-item"
											id="cart_id" 
											src={cart[val].img} 
											alt="item-img"/>
										</div>
										<div className="item-name">{cart[val].name}</div>
										<div className="item-qty">
											<span className="minus" onClick={this.counterMinus}>-</span>
											<span className="counter">{cart[val].qty}</span>
											<span className="plus" onClick={this.counterPlus}>+</span>
											<span className="subprice">Rp {new Number(cart[val].price).toLocaleString("id-ID")}</span>
										</div>
									</div>
								))
							)
						}
					</div>
				</div>
			</>
		);
	}
}
