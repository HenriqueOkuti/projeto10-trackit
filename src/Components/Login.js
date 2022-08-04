import styled from "styled-components";
import { Link } from "react-router-dom";
import { ThreeDots } from "react-loader-spinner";
import GenericButton from "./Structures/GenericButton";
import InputField from "./Structures/InputField";
import PageLogo from "./Structures/PageLogo";
import { useState } from "react";


export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const info = {
        email: email,
        password: password,
    }

    function SendLogin(event) {
        console.log(info);
        event.preventDefault();
    }

    //console.log(info);

    return (
        <>
            <PageLogo />
            <PageContainer>
                <FormsContainer onSubmit={SendLogin}>
                    <InputField type='email' text={'email'} setData={setEmail}></InputField>
                    <InputField type='password' text={'senha'} setData={setPassword}></InputField>
                    <GenericButton text={<span>Entrar</span>}></GenericButton>
                </FormsContainer>
                <Link to={`/cadastro`}><Redirect>Não tem uma conta? Cadastre-se!</Redirect></Link>
                <ThreeDots color="#00BFFF" height={80} width={80} />
            </PageContainer>
        </>
    );
}

const PageContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;


const FormsContainer = styled.form`
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