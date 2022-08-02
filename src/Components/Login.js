import styled from "styled-components";
import { Link } from "react-router-dom";
import GenericButton from "./Structures/GenericButton";
import InputField from "./Structures/InputField";
import PageLogo from "./Structures/PageLogo";

export default function Login() {
    return (
        <>
            <PageLogo />
            <FormsContainer>
                <InputField text={'e-mail'}></InputField>
                <InputField text={'senha'}></InputField>
                <GenericButton text={<span>Entrar</span>}></GenericButton>
                <Link to={`/cadastro`}><Redirect>Não tem uma conta? Cadastre-se!</Redirect></Link>
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
`

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