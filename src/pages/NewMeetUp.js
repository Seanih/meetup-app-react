import React from 'react';
import { useHistory } from 'react-router-dom';
import NewMeetupForm from '../components/Meetups/NewMeetupForm';

const NewMeetupPage = () => {
	const history = useHistory();

	function addMeetup(meetupData) {
		fetch(
			'https://react-practice-a37a8-default-rtdb.firebaseio.com/meetups.json',
			{
				method: 'POST',
				body: JSON.stringify(meetupData),
				headers: {
					'Content-Type': 'application/json',
				},
			}
		).then(() => {
			history.replace('/');
		});
	}

	return (
		<section>
			<h1>New Meetup Page</h1>
			<NewMeetupForm onAddMeetup={addMeetup} />
		</section>
	);
};

export default NewMeetupPage;
