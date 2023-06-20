import { Route, Routes } from 'react-router-dom';
import User from '../components/user/User';
import UserList from '../components/userlist/UserList';

const Router = () => {
	return (
		<Routes>
			<Route path='/' element={<UserList />} />
			<Route path={'/user/:userId'} element={<User />} />
		</Routes>
	);
};

export default Router;
