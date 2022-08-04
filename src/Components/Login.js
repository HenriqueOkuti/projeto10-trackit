import axios from "axios";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { ThreeDots } from "react-loader-spinner";
import GenericButton from "./Structures/GenericButton";
import InputField from "./Structures/InputField";
import PageLogo from "./Structures/PageLogo";
import { useEffect, useState } from "react";

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [disabled, setDisabled] = useState(false);
    const [failure, setFailure] = useState(false);
    const [incomplete, setIncomplete] = useState(false);
    let navigate = useNavigate();

    const info = {
        email: email,
        password: password,
    }

    function verifyCache(){
        if (localStorage.getItem('email') !== null){
            navigate('/habitos');
        }
        return;
    }

    useEffect(() => {verifyCache()});

    function SendLogin(event) {
        event.preventDefault();
        setDisabled(!disabled);
        console.log(info);
        const request = axios.post('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login', info);
        request.then(PostLoginSuccess);
        request.catch(PostLoginFailure);

    }

    function PostLoginSuccess(event) {
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

    function PostLoginFailure(event) {
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
        alert("Não foi possível realizar seu login! Verifique as informações");
        setIncomplete(!incomplete);
    }

    return (
        <>
            <PageLogo />
            <PageContainer>
                <FormsContainer onSubmit={SendLogin}>
                    <InputField info={info.email} disabled={disabled} type='email' text={'email'} setData={setEmail}></InputField>
                    <InputField info={info.password} disabled={disabled} type='password' text={'senha'} setData={setPassword}></InputField>
                    {!disabled ? <GenericButton disabled={disabled} text={<span>Entrar</span>}></GenericButton> : <GenericButton disabled={disabled} text={<ThreeDots color="#FFFFFF" height={80} width={80} />}></GenericButton>}
                </FormsContainer>
                <Link to={`/cadastro`}><Redirect>Não tem uma conta? Cadastre-se!</Redirect></Link>
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