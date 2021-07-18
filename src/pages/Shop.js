import React, {useState, useEffect} from 'react'
import { useParams, useLocation, useRouteMatch, Link } from 'react-router-dom'
import CardShop from '../components/client/CardShop';
import CategoryShop from '../components/client/CategoryShop';

import kopi from '../assets/images/kopi.jpeg';
import bakwan from '../assets/images/bakwan.jpeg';
import mendoan from '../assets/images/mendoan.jpeg';
import roti from '../assets/images/roti.jpeg';

export default function Shop() {
	const { search } = useLocation();
	const query = new URLSearchParams(search).get('query');
	return (
		<React.StrictMode>
			<div className="header-container">
				<div className="brand">
					<Link to="/">
						<span className="material-icons md-light md-28">store</span>
					Warung Kilat</Link>
				</div>
				<div className="navbar">
					<div className="navbar-item" id="cart-shop">
						<span className="material-icons md-light md-26">shopping_cart</span>
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
				<div className="gigs-cards">
					<CardShop
						stock={423}
						price={3000} 
						name={"Kopi Hitam"} 
						sales={294} 
						img={kopi} 
						desc={"Bubuk kopi tradisional pilihan terbaik. Pemesanan hari ini sampai pukul 16.00 WIB"}
						/>
					<CardShop
						stock={200}
						price={1500} 
						name={"Bakwan Jagung"} 
						sales={274} 
						img={bakwan} 
						desc={"Sebuah makanan yang dibuat menggunakan tepung tradisional pilihan terbaik. Pemesanan hari ini sampai pukul 16.00 WIB"}
						/>
					<CardShop
						stock={232}
						price={3500} 
						name={"Mendoan"} 
						sales={214} 
						img={mendoan} 
						desc={"Sebuah makanan yang dibuat menggunakan tepung tradisional pilihan terbaik. Pemesanan hari ini sampai pukul 16.00 WIB"}
						/>

					<CardShop
						stock={133}
						price={5000} 
						name={"Roti Bakar"} 
						sales={154} 
						img={roti} 
						desc={"Sebuah makanan yang dibuat menggunakan tepung tradisional pilihan terbaik. Pemesanan hari ini sampai pukul 16.00 WIB"}
						/>
					
				</div>
			</div>
			<div className="footer-container">
				<div className="copyright">&copy; Warung Kilat Karangpucung</div>
			</div>
		</React.StrictMode>
	)
}