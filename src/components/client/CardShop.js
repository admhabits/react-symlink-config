import React, { Component } from 'react'
import CircularSpinner from './Circular';
import $ from 'jquery';

export default class CardShop extends Component{
	

	constructor({sales, name, img, desc, price, stock}){
		super();

		this.state = {
			src : img, 
			loaded: false 
		};
		this.img = img;
		this.name = name;
		this.sales = sales;
		this.price = price;
		this.stock = stock;
		this.desc = desc;
	}

	 componentDidMount() {
 		const ini = this;
 	    $(`<img class='product-image'/>`).load(this.img, function(){
 	    	console.log('load')
 	    	ini.setState({ 
 	    		loaded: true,  
 	    		src : ini.img
 	    	});
 	    })
	 }

	render(){
		const { loaded, src } = this.state;
		// console.log(loaded)
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
							<span className="prc">Rp { this.price }</span>
							<span className="atc material-icons md-24">
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
						<span className="name">{this.name}</span>
						<span className="stats">{this.sales} Sales</span>
					</div>
				</div>
			</>
		)
	}

}