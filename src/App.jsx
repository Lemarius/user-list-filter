import { BrowserRouter } from 'react-router-dom';
import UserList from './components/userlist/UserList';
import { GlobalStyles } from './styles/globalStyles';
import Router from './router/Router';

const App = () => {
	return (
		<>
			<BrowserRouter>
				<GlobalStyles />
				<UserList />
				<Router />
			</BrowserRouter>
		</>
	);
};

export default App;
