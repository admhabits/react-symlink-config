import React, {useState, useEffect} from 'react'
import { useParams, useLocation, useRouteMatch, Link } from 'react-router-dom'
import CardShop from '../components/client/CardShop';
import $ from 'jquery';

import {product} from '../data/product.js';
import {dataCart} from '../data/cart.js';

export default function Shop() {
	
	const { search } = useLocation();
	const query = new URLSearchParams(search).get('query');
	const [ view, setView] = useState(false);
	const [ dataProduct, setProduct ] = useState(product.alamhafidz01);
	console.log(dataCart.cart);

	view ? ($('.cart-container').css('display', 'flex')) : ($('.cart-container').css('display', 'none'));
	
	return (
		<React.StrictMode>

			<div className="header-container">
				<div className="brand">
					<Link to="/">
						<span className="material-icons md-light md-28">store</span>
					Warung Kilat</Link>
				</div>
				<div className="navbar">
					<div className="navbar-item"
						onClick={()=>setView(!view)} 
						id="cart-shop">
						<span className="material-icons md-light md-26">shopping_bag</span>
						<span className="cart-counts">0</span>
					</div>
				</div>
			</div>
			
			<div className="content-page">
				<div className="banner-sliders">
					
				</div>
				{/*<div className="gigs-category">
					<CategoryShop/>
				</div>*/}
				<div className="gigs-cards" >
					{ dataProduct && (
						Object.keys(dataProduct).map((val, key)=>(
							
							<CardShop 
								key={key}
								stock={dataProduct[val].stock}
								price={dataProduct[val].price} 
								name={dataProduct[val].vendor} 
								sales={dataProduct[val].sales} 
								img={dataProduct[val].img} 
								desc={dataProduct[val].desc}
							/>
							
						))
					)}
				</div>
			</div>
			<div className="footer-container">
				<div className="copyright">&copy; Warung Kilat Karangpucung</div>
			</div>
			
		</React.StrictMode>
	)
}