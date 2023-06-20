import { Link, useParams } from 'react-router-dom';
import { StyledButton, StyledH1, StyledH2, StyledImg } from './styles';
import { USERS } from '../../constants/users';

const User = () => {
	const { userId } = useParams();

	const user = USERS.find(user => user.userId === userId);

	return (
		<>
			<StyledButton>
				<Link to={'/'}>Back to users</Link>
			</StyledButton>
			<br />

			<StyledImg src={user.profileImage} />
			<StyledH1>{`Hi! My name is ${user.name}`}</StyledH1>
			<StyledH2>{`I'm ${user.age}`}</StyledH2>
			<StyledH2>{`My username is ${user.username}`}</StyledH2>
			<StyledH2>{`You can contact me at ${user.email}`}</StyledH2>
			<StyledH2>{`My address is:`}</StyledH2>
			<StyledH2>{user.address.street}</StyledH2>
			<StyledH2>{user.address.city}</StyledH2>
			<StyledH2>{user.address.zipCode}</StyledH2>
			<StyledH2>{`You can call me at ${user.phone}`}</StyledH2>
		</>
	);
};

export default User;
