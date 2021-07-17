import React, {useState, useEffect} from 'react'
import { useParams, useLocation, useRouteMatch } from 'react-router-dom'

import CardShop from '../components/client/CardShop';
import CategoryShop from '../components/client/CategoryShop';
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
				<div className="gigs-category">
					<CategoryShop/>
				</div>
				<div className="gigs-cards">
					<CardShop/>
					<CardShop/>
					<CardShop/>
					<CardShop/>
					<CardShop/>
					<CardShop/>
					<CardShop/>
					<CardShop/>
				</div>
			</div>
			<div className="footer-container">
				<div className="copyright">&copy; PT Arkana Putra Indonesa</div>
			</div>
		</React.StrictMode>
	)
}