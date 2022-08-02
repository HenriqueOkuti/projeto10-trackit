import { Link } from "react-router-dom";
import styled from "styled-components";
import GenericButton from "./Structures/GenericButton";
import InputField from "./Structures/InputField";
import PageLogo from "./Structures/PageLogo";

export default function Signin() {
    return (
        <>
            <PageLogo />
            <FormsContainer>
                <InputField text={'e-mail'}></InputField>
                <InputField text={'senha'}></InputField>
                <InputField text={'nome'}></InputField>
                <InputField text={'foto'}></InputField>
                <GenericButton text={<span>Cadastrar</span>}></GenericButton>
                <Link to={`/`}><Redirect>Já tem uma conta? Faça login!</Redirect></Link>
            </FormsContainer>
        </>
    );
}

const FormsContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 30px 0 0 0;
    font-family: 'Lexend Deca', sans-serif;
`;

const Redirect = styled.div`
    width: 232px;
    height: 17px;
    font-family: 'Lexend Deca', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 13.976px;
    line-height: 17px;
    text-align: center;
    text-decoration-line: underline;
    color: #52B6FF;
    margin: 30px 0 0 0;
`;