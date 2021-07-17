import React, {useState, useEffect} from 'react'
import { useParams, useLocation, useRouteMatch } from 'react-router-dom'

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
					Warung Kilat
				</div>
				<div className="navbar">
					<a href="/" className="navbar-item">Home</a>
					<a href="/" className="navbar-item">Mitra</a>
					<a href="/" className="navbar-item">Masuk</a>
				</div>
			</div>
			<div className="content-page">
				<div className="banner-sliders">
					
				</div>
				{/*<div className="gigs-category">
					<CategoryShop/>
				</div>*/}
				<div className="gigs-cards">
					<CardShop name={"Mendoan"} sales={24} img={mendoan}/>
					<CardShop name={"Bakwan"} sales={13} img={bakwan}/>
					<CardShop name={"Kopi Hitam"} sales={22} img={kopi}/>
					<CardShop name={"Roti Bakar"} sales={22} img={roti}/>
					
				</div>
			</div>
			<div className="footer-container">
				<div className="copyright">&copy; PT Arkana Putra Indonesa</div>
			</div>
		</React.StrictMode>
	)
}