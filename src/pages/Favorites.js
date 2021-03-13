import React, { useContext } from 'react';
import FavoritesContext from '../store/favorites-context';
import MeetupList from '../components/Meetups/MeetupList';

const Favorites = () => {
	const favoritesCtx = useContext(FavoritesContext);

	let favoritesContent;

	if (favoritesCtx.totalFavorites === 0) {
		favoritesContent = (
			<p>You have no favorites saved. Please add at least 1</p>
		);
	} else {
		favoritesContent = <MeetupList meetups={favoritesCtx.favorites} />;
	}
	return (
		<section>
			<h1>My Favorites</h1>
			{favoritesContent}
		</section>
	);
};

export default Favorites;
