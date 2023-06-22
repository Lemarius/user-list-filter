import { useNavigate } from 'react-router-dom';
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
import { useState } from 'react';

const UserList = () => {
	const navigate = useNavigate();

	const [onlyActive, setOnlyActive] = useState(false);
	const [searchText, setSearchText] = useState('');
	const [sortBy, setSortBy] = useState(0);

	const filteredUsers = filterUserByActive(onlyActive, searchText, sortBy);

	console.log(onlyActive);

	return (
		<StyledContainer>
			<StyledH1>Listado de usuarios</StyledH1>
			<StyledFilterCont>
				<StyledInput
					value={searchText}
					onChange={e => handleInput(setSearchText, e)}
				/>
				<StyledDiv>
					<StyledH2>Sólo activos:</StyledH2>
					<StyledCheckbox
						type='checkbox'
						onChange={() => handleCheckbox(onlyActive, setOnlyActive)}
					/>
				</StyledDiv>
				<StyledSelect
					value={sortBy}
					onChange={e => setSortBy(Number(e.target.value))}
				>
					<StyledOption value={0}>Por defecto</StyledOption>
					<StyledOption value={1}>Por nombre</StyledOption>
				</StyledSelect>
			</StyledFilterCont>
			{filteredUsers.map(user => (
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
						<StyledButton onClick={() => navigate(`/user/${user.userId}`)}>
							Ver Detalles
						</StyledButton>
					</StyledDetailsCont>
				</StyledInfoCont>
			))}
		</StyledContainer>
	);
};

const filterUserByActive = (onlyActive, searchText, sortBy) => {
	let filteredUsers = [...USERS];
	filteredUsers = onlyActive
		? filteredUsers.filter(user => user.active)
		: filteredUsers;
	if (searchText) {
		filteredUsers = filteredUsers.filter(user =>
			user.name.toLowerCase().includes(searchText.toLowerCase())
		);
	}

	if (sortBy === 1) {
		filteredUsers.sort((a, b) => {
			if (a.name < b.name) {
				return -1;
			}
			if (a.name > b.name) {
				return 1;
			}
			return 0;
		});
	}

	return filteredUsers;
};

const handleCheckbox = (onlyActive, setOnlyActive) => {
	setOnlyActive(!onlyActive);
};

const handleInput = (setSearchText, e) => {
	setSearchText(e.target.value);
};

export default UserList;
