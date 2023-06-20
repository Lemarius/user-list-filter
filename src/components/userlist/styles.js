import styled from "styled-components";

const StyledContainer = styled.div`
    width: 100%;
    padding: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-flow: column nowrap;
    gap: 20px;
`;

const StyledH1 = styled.h1`
    font-size: 30px;
    font-weight: 600;
    color: black;
`;

const StyledFilterCont = styled.div`
    width: 515px;
    display: flex;
    justify-content: space-between;
`;

const StyledDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5px;
`;

const StyledInput = styled.input`
    width: 177px;
    border-radius: 5px;
`;

const StyledCheckbox = styled.input`

`;

const StyledSelect = styled.select`
    font-size: 16px;
    color: black;
`;

const StyledOption = styled.option`
    font-size: 16px;
    color: black;
`;

const StyledInfoCont = styled.div`
    width: 485px;
    border-radius: 10px;
    box-shadow: 1px 1px 5px gray;
    display: flex;
    justify-content: space-between;
    padding: 10px 15px;
`;

const StyledImgCont = styled.div`
    display: flex;
    gap: 10px;
`;

const StyledImg = styled.img`
    width: 50px;
    border-radius: 100%;
`;

const StyledH3 = styled.h3`
    font-size: 16px;
    font-weight: 600;
    color: black;
`;

const StyledTextCont = styled.div`
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
    gap: 3px;
`;

const StyledDetailsCont = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
`;

const StyledH2 = styled.h2`
    font-size: 14px;
    font-weight: 400;
    color: black;
`;

const StyledActive = styled.h2`
    font-size: 16px;
    color: ${({active}) => active ? 'green' : 'red'};
    font-weight: 400;
`;

const StyledButton = styled.button`
    padding: 2px;
`;

export {StyledContainer, StyledH1, StyledInput, StyledCheckbox, StyledSelect, StyledOption, StyledInfoCont, StyledFilterCont, StyledImgCont, StyledImg, StyledH3, StyledTextCont, StyledDetailsCont, StyledH2, StyledActive, StyledButton, StyledDiv};