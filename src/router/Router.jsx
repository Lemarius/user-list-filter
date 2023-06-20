import { Route, Routes } from 'react-router-dom';
import User from '../components/user/User';
import { USERS } from '../constants/users';

const Router = () => {
	return (
		<Routes>
			{USERS.map(user => (
				<Route
					path={`/user/${user.userId}`}
					element={<User userid={user.userId} />}
					key={user.userId}
				/>
			))}
		</Routes>
	);
};

export default Router;
