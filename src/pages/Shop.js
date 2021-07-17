import React, {useState, useEffect} from 'react'
import { useParams, useLocation, useRouteMatch } from 'react-router-dom'

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
				<div className="category">
					
				</div>
				<div className="gigs-cards">

					<div className="gigs-cards-items">
						<div className="product-img"></div>
						<div className="product-desc">
							<span className="text">
								Sebuah makanan yang dibuat menggunakan tepung tradisional pilihan terbaik. 
								Pemesanan hari ini sampai pukul 16.00 WIB
							</span>
						</div>
						<div className="product-title">
							<span className="name">Gado-Gado</span>
							<span className="stats">1 Terjual</span>
						</div>
					</div>

					<div className="gigs-cards-items">
						<div className="product-img"></div>
						<div className="product-desc">
							<span className="text">
								Sebuah makanan yang dibuat menggunakan tepung tradisional pilihan terbaik. 
								Pemesanan hari ini sampai pukul 16.00 WIB
							</span>
						</div>
						<div className="product-title">
							<span className="name">Gado-Gado</span>
							<span className="stats">1 Terjual</span>
						</div>
					</div>
					
				</div>
			</div>
			<div className="footer-container">
				<div className="copyright">&copy; PT Arkana Putra Indonesa</div>
			</div>
		</React.StrictMode>
	)
}