import React, { Component } from 'react'
import CircularSpinner from './Circular';
import $ from 'jquery';
import { AddItem, UpdateItem, RemoveItem, ClearCart } from '../../store/actions/cart-actions';


 class CardShop extends Component{
	

	constructor({sales, name, img, desc, price, stock,id, vendor, index}){
		super();

		this.state = {
			src : img, 
			loaded: false 
		};
		this.id = id;
		this.index = index;
		this.img = img;
		this.name = name;
		this.vendor = vendor;
		this.sales = sales;
		this.price = price;;
		this.stock = stock;
		this.desc = desc.substr(0, 70) + "...";
	}

	 componentDidMount() {
 		const ini = this;
 	    $(`<img class='product-image'/>`).load(this.img, function(){
 	    	// console.log('load')
 	    	ini.setState({ 
 	    		loaded: true,  
 	    		src : ini.img
 	    	});
 	    })


	 }

	 componentWillUnMount(){
	 	this.setState({
	 		loaded:false,
	 		src: this.img
	 	})
	 }

	 addCartHandle = ()=>{
	 	const { id, img, name, price, index } = this;

	 	const data = {
	 			id: id,
	 			img: img,
	 			name: name,
	 			price: price,
	 			count: 1
	 	}

	 	this.props.AddItem(index,data)
	 }

	render(){
		const { loaded, src } = this.state;
		// console.log(this.props.AddItem)
		return (
			<>
				<div className="gigs-cards-items">
					<div className="product-img-container">
						  {loaded ? (
						  		<img
						  			className="product-image"
						  		  src={src}
						  		  onLoad={this.onImageLoaded}
						  		/>
						  	) : (
						    <div className="image-container-overlay">
						      <CircularSpinner />
						    </div>
						  )}
						<span className="product-price">
							<span className="prc">Rp { new Number(this.price).toLocaleString("id-ID") }</span>
							<span
								onClick={this.addCartHandle} 
								className="atc material-icons md-24">
								add_shopping_cart
							</span>
						</span>
					</div>

					<div className="product-desc">
						<span className="text">
							{ this.desc }
						</span>
						<span className="stock">
							<span className="items-stats">Persediaan</span>
							<span className="items-count">{this.stock}</span>
						</span>
					</div>

					<div className="product-title">
						<span className="name">{this.vendor}</span>
						<span className="stats">{this.sales} Sales</span>
					</div>
				</div>
			</>
		)
	}

}

export default CardShop;