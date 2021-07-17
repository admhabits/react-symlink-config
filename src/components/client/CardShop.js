import React from 'react'

export default function CardShop({sales, name, img, desc, price, stock}) {
	return (
		<>
			<div className="gigs-cards-items">
				<div className="product-img-container">
					<img className="product-image" src={img} alt="product-image"/>
					<span className="product-price">
						Rp { price }
					</span>
				</div>

				<div className="product-desc">
					<span className="text">
						{ desc }
					</span>
					<span className="stock">
						<span className="items-stats">Stock</span>
						<span className="items-count">{stock}</span>
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