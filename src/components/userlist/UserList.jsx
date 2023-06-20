import { Link } from 'react-router-dom';
import { USERS } from '../../constants/users';
import {
	StyledActive,
	StyledButton,
	StyledCheckbox,
	StyledContainer,
	StyledDetailsCont,
	StyledDiv,
	StyledFilterCont,
	StyledH1,
	StyledH2,
	StyledH3,
	StyledImg,
	StyledImgCont,
	StyledInfoCont,
	StyledInput,
	StyledOption,
	StyledSelect,
	StyledTextCont
} from './styles';

const UserList = () => {
	return (
		<StyledContainer>
			<StyledH1>Listado de usuarios</StyledH1>
			<StyledFilterCont>
				<StyledInput />
				<StyledDiv>
					<StyledH2>Sólo activos:</StyledH2>
					<StyledCheckbox type='checkbox' />
				</StyledDiv>
				<StyledSelect>
					<StyledOption value='Por defecto'>Por defecto</StyledOption>
					<StyledOption value='Por nombre'>Por nombre</StyledOption>
				</StyledSelect>
			</StyledFilterCont>
			{USERS.map(user => (
				<StyledInfoCont key={user.userId}>
					<StyledImgCont>
						<StyledImg src={user.profileImage} />
						<StyledTextCont>
							<StyledH3>{user.name}</StyledH3>
							<StyledH2>@{user.username}</StyledH2>
						</StyledTextCont>
					</StyledImgCont>
					<StyledDetailsCont>
						<StyledActive active={user.active}>
							{user.active ? 'Activo' : 'Inactivo'}
						</StyledActive>
						<StyledButton>
							<Link to={`/user/${user.userId}`}>Ver Detalles</Link>
						</StyledButton>
					</StyledDetailsCont>
				</StyledInfoCont>
			))}
		</StyledContainer>
	);
};

export default UserList;
