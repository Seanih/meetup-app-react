import { Route, Switch } from 'react-router-dom';
import AllMeetUps from './pages/AllMeetUps';
import NewMeetUps from './pages/NewMeetUp';
import Favorites from './pages/Favorites';
import Layout from './components/layout/Layout';

function App() {
	return (
		<Layout>
			<Switch>
				<Route path='/' exact>
					<AllMeetUps />
				</Route>
				<Route path='/new-meetups'>
					<NewMeetUps />
				</Route>
				<Route path='/favorites'>
					<Favorites />
				</Route>
			</Switch>
		</Layout>
	);
}

export default App;
