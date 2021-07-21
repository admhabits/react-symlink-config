import React, { Component } from 'react';
import '../../assets/css/cart.css';
import { dataCart } from '../../data/cart.js';

 class Cart extends Component {
	constructor(props){
		super(props);
		this.state = {
			cart: null
		};
	}

	componentDidMount() {
		this.props.store.subscribe(()=>{
			this.setState({
				cart: this.props.store.getState().CartReducers
			})
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
									<div className="cart-wrapper" key={key}>
										<div className="cart-img">
											<img 
											
											className="img-item"
											id="cart_id" 
											src={cart[val].img} 
											alt="item-img"/>
										</div>
										<div className="item-name">{cart[val].name}</div>
										<div className="item-qty">
											<span className="minus" >-</span>
											<span className="counter">{cart[val].count}</span>
											<span className="plus">+</span>
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



export default (Cart);