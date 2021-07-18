import React from 'react'

export default function CardShop({sales, name, img, desc, price, stock}) {
	return (
		<>
			<div className="gigs-cards-items">
				<div className="product-img-container">
					<img className="product-image" src={img} alt="product-image"/>
					<span className="product-price">
						<span className="prc">Rp { price }</span>
						<span className="atc material-icons md-24">
							add_shopping_cart
						</span>
					</span>
				</div>

				<div className="product-desc">
					<span className="text">
						{ desc }
					</span>
					<span className="stock">
						<span className="items-stats">Persediaan</span>
						<span className="items-count">{stock}</span>
					</span>
				</div>

				<div className="product-title">
					<span className="name">{name}</span>
					<span className="stats">{sales} Penjualan</span>
				</div>
			</div>
		</>
	)
}