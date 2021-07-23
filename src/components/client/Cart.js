import React, { Component } from 'react';
import '../../assets/css/cart.css';
// import { dataCart } from '../../data/cart.js';
import { connect } from 'react-redux';
import { AddQuantity, SubQuantity, RemoveItem } from '../../store/actions/cart-actions'

 class Cart extends Component {
	constructor(props){
		super(props);
		this.state = {
			cart: this.props.state
		};
	}

	componentDidMount() {
		this.props.store.subscribe(()=>{
			this.setState({
				cart: this.props.store.getState().CartReducers.cart
			})
		})
	}

	handleAddQuantity = (id) => {
		this.props.AddQuantity(id)
	}

	handleSubQuantity = (id) => {
		this.props.SubQuantity(id)
	}

	handleRemoveItem = (id) => {
		this.props.RemoveItem(id)
	}

	render() {
		const { cart } = this.state;

		return (
			<>
				<div className="cart-container" id="cart_c">
				<span></span>
					<div className="cart-box">
						
						{
							cart !== null && cart.length !== 0 ? (

								Object.keys(cart).map((val, key)=>(
									<div className="cart-wrapper" key={key}>

										<div className="cart-img">
											<img 
											
											className="img-item"
											id="cart_id" 
											src={cart[val].img} 
											alt="item-img"/>
										</div>
										<div className="item-name">
											<span className="p-name">{cart[val].name}</span>
											<span className="p-price">Rp {new Number(cart[val].price).toLocaleString("id-ID")}</span>
										</div>
										<div className="item-qty">
											<span className="minus" 
												onClick={()=>this.handleSubQuantity(cart[val].id)} >-</span>
											<span className="counter">{cart[val].quantity}</span>
											<span className="plus" 
												onClick={()=>this.handleAddQuantity(cart[val].id)}>+</span>
											<span className="subprice">Rp {new Number(cart[val].subTotal).toLocaleString("id-ID")}</span>
										</div>
										<div onClick={()=>this.handleRemoveItem(cart[val].id)}
											className="remove-item">X</div>
									</div>
								)) 
							) : (

									<div className="cart-empty">Tidak ada pesanan</div>

								)
						}

						<div className="cart-footer">
							Total Bayar <span> Rp { new Number(this.props.total).toLocaleString("id-ID")} </span>
						</div>
						<div className="btn-checkout">
							Lanjutkan Pemesanan
						</div>
					</div>
				</div>
			</>
		);
	}
}

const mapStateToProps = (state) => ({
	state: state.CartReducers.cart,
	total: state.CartReducers.total
})


export default connect(mapStateToProps, { AddQuantity, SubQuantity, RemoveItem })(Cart);