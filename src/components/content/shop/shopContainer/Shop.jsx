import React from 'react';
import ShopItem from './ShopItem/ShopItem';

const Shop = (props) => {

	let shopElement = props.shopItems
		.map(i => <ShopItem
			id={i.id}
			key={i.id}
			name={i.name}
			description={i.description}
			bonus={i.bonus}
			favorite={i.favorite}
			logo={i.logo}
			Rating={i.Rating}
			{...props} />);

	let favoriteElement = props.shopItems
		.map(i => {
			if (i.favorite === true) {
				return (
					<ShopItem
						id={i.id}
						key={i.id}
						name={i.name}
						description={i.description}
						bonus={i.bonus}
						favorite={i.favorite}
						logo={i.logo}
						Rating={i.Rating}
						{...props} />
				);
			}
		});
	let newElement = props.shopItems
		.map(i => {
			if (i.favorite === false) {
				return (
					<ShopItem
						id={i.id}
						key={i.id}
						name={i.name}
						description={i.description}
						bonus={i.bonus}
						favorite={i.favorite}
						logo={i.logo}
						Rating={i.Rating}
						{...props} />
				);
			}
		});

		let Element = shopElement;

		if (props.type === 'Избранные') {
			Element = favoriteElement;
		} else if (props.type === 'Новые') {
			Element = newElement;
		}

	return (
		<div className="shop">
			<div className="container_fluid">
				<div className="row">
					{ Element }
				</div>
			</div>
		</div>
	);
}

export default Shop;