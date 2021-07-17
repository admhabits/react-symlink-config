import React from 'react'

export default function CardShop({sales, name, img}) {
	return (
		<>
			<div className="gigs-cards-items">
				<div className="product-img-container">
					<img className="product-image" src={img} alt="product-image"/>
					<span className="product-price">
						Rp 20.000
					</span>
				</div>

				<div className="product-desc">
					<span className="text">
						Sebuah makanan yang dibuat menggunakan tepung tradisional pilihan terbaik. 
						Pemesanan hari ini sampai pukul 16.00 WIB
					</span>
					<span className="stock">
						<span className="items-stats">Stock</span>
						<span className="items-count">100</span>
					</span>
				</div>

				<div className="product-title">
					<span className="name">{name}</span>
					<span className="stats">{sales} Sales</span>
				</div>
			</div>
		</>
	)
}