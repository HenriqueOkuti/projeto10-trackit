import { useState } from "react";
import { ThreeDots } from "react-loader-spinner";
import { Link } from "react-router-dom";
import styled from "styled-components";
import GenericButton from "./Structures/GenericButton";
import InputField from "./Structures/InputField";
import PageLogo from "./Structures/PageLogo";

export default function Signin() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [photo, setPhoto] = useState("");

    const info = {
        email: email,
        password: password,
        name: name,
        photo: photo
    }

    function SendSignIn(event) {
        console.log(info);
        event.preventDefault();
    }

    return (
        <>
            <PageLogo />
            <PageContainer>
                <FormsContainer onSubmit={SendSignIn}>
                    <InputField type='email' text={'email'} setData={setEmail}></InputField>
                    <InputField type='password' text={'senha'} setData={setPassword}></InputField>
                    <InputField type='name' text={'nome'} setData={setName}></InputField>
                    <InputField type='photo' text={'foto'} setData={setPhoto}></InputField>
                    <GenericButton text={<span>Cadastrar</span>}></GenericButton>
                </FormsContainer>
                <Link to={`/`}><Redirect>Já tem uma conta? Faça login!</Redirect></Link>
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