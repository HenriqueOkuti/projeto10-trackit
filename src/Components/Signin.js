import axios from "axios";
import { useEffect, useState } from "react";
import { ThreeDots } from "react-loader-spinner";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import GenericButton from "./Structures/GenericButton";
import InputField from "./Structures/InputField";
import PageLogo from "./Structures/PageLogo";

export default function Signin() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [photo, setPhoto] = useState("");
    const [disabled, setDisabled] = useState(false);
    const [failure, setFailure] = useState(false);
    const [incomplete, setIncomplete] = useState(false);
    let navigate = useNavigate();

    const info = {
        email: email,
        name: name,
        image: photo,
        password: password
    }

    function verifyCache(){
        if (localStorage.getItem('email') !== null){
            navigate('/habitos');
        }
        return;
    }

    useEffect(() => {verifyCache()});

    function SendSignIn(event) {
        event.preventDefault();
        setDisabled(!disabled);
        const request = axios.post('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up', info);
        request.then(PostSignInSuccess);
        request.catch(PostSignInFailure);
    }

    function PostSignInSuccess(event) {
        console.log("Sucesso");
        console.log(event.data);

        localStorage.setItem('email', event.data.email)
        localStorage.setItem('id', event.data.id)
        localStorage.setItem('image', event.data.image)
        localStorage.setItem('name', event.data.name)
        localStorage.setItem('password', event.data.password)
        localStorage.setItem('token', event.data.token)

        navigate("/habitos");
    }
    function PostSignInFailure(event) {
        console.log("Falha");
        console.log(event);
        setFailure(!failure);
    }

    if (failure) {
        setDisabled(!disabled);
        setIncomplete(!incomplete);
        setFailure(!failure);
    }

    if (incomplete) {
        console.log("incomplete");
        alert("Não foi possível realizar seu cadastro! Tente novamente com outras informações");
        setIncomplete(!incomplete);
    }

    console.log("Renderizacao")
    return (
        <>
            <PageLogo />
            <PageContainer>
                <FormsContainer onSubmit={SendSignIn}>
                    <InputField info={info.email} disabled={disabled} type='email' text={'email'} setData={setEmail}></InputField>
                    <InputField info={info.password} disabled={disabled} type='password' text={'senha'} setData={setPassword}></InputField>
                    <InputField info={info.name} disabled={disabled} type='name' text={'nome'} setData={setName}></InputField>
                    <InputField info={info.image} disabled={disabled} type='photo' text={'foto'} setData={setPhoto}></InputField>
                    {!disabled ? <GenericButton disabled={disabled} text={<span>Cadastrar</span>}></GenericButton> : <GenericButton disabled={disabled} text={<ThreeDots color="#FFFFFF" height={80} width={80} />}></GenericButton>}
                </FormsContainer>
                <Link to={`/`}><Redirect>Já tem uma conta? Faça login!</Redirect></Link>
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