import { Link } from 'react-router-dom';
import { StyledButton, StyledH1, StyledH2, StyledImg } from './styles';
import { USERS } from '../../constants/users';

const User = ({ userid }) => {
	if (!USERS[userid]) {
		return 'Loading...';
	}
	return (
		<>
			<StyledButton>
				<Link to={'/'}>Back to users</Link>
			</StyledButton>

			<StyledImg src={USERS[userid].profileImage} />
			<StyledH1>{`Hi! My name is ${USERS[userid].name}`}</StyledH1>
			<StyledH2>{`I'm ${USERS[userid].age}`}</StyledH2>
			<StyledH2>{`My username is ${USERS[userid].username}`}</StyledH2>
			<StyledH2>{`You can contact me in ${USERS[userid].email}`}</StyledH2>
			<StyledH2>{`My address is:`}</StyledH2>
			<StyledH2>{USERS[userid].address.street}</StyledH2>
			<StyledH2>{USERS[userid].address.city}</StyledH2>
			<StyledH2>{USERS[userid].address.zipCode}</StyledH2>
			<StyledH2>{`You can call me at ${USERS[userid].phone}`}</StyledH2>
		</>
	);
};

export default User;
