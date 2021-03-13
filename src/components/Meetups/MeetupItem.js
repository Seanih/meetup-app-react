import React, { useContext } from 'react';
import FavoritesContext from '../../store/favorites-context';
import Card from '../UI/Card';
import style from './MeetupItem.module.css';

const MeetupItem = ({ id, image, title, address, description }) => {
	const favoritesCtx = useContext(FavoritesContext);

	const itemIsFavorite = favoritesCtx.itemIsFavorite(id);

	const toggleFavoritesStatusHandler = () => {
		if (itemIsFavorite) {
			favoritesCtx.removeFavorite(id);
		} else {
			favoritesCtx.addFavorite({
				id,
				title,
				description,
				image,
				address,
			});
		}
	};

	return (
		<li className={style.item}>
			<Card>
				<div className={style.image}>
					<img src={image} alt={title} />
				</div>
				<div className={style.content}>
					<h3>{title}</h3>
					<address>{address}</address>
					<p>{description}</p>
				</div>
				<div className={style.actions}>
					<button onClick={toggleFavoritesStatusHandler}>
						{itemIsFavorite ? 'Remove from Favorites' : 'Add to Favorites'}
					</button>
				</div>
			</Card>
		</li>
	);
};

export default MeetupItem;
