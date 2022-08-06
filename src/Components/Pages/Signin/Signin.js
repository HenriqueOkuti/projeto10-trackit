import { ThreeDots } from "react-loader-spinner";
import { Link, useNavigate } from "react-router-dom";
import InputField from "../../StructuresStyles/InputField";
import { FormsContainer, PageContainer, Redirect } from "./SigninStyles";
import GenericButton from '../../StructuresStyles/GenericButton';
import { useEffect, useState } from "react";
import PageLogo from '../../StructuresStyles/PageLogo';
import axios from "axios";

export default function Signin() {
    const [disabled, setDisabled] = useState(false);
    const [failure, setFailure] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [photo, setPhoto] = useState('');
    const [user, setUser] = useState(
        {
            email: '',
            password: ''
        }
    )
    let navigate = useNavigate();

    function HandleSubmit(event) {
        if (event === undefined) {
            return;
        }
        event.preventDefault();
        setDisabled(!disabled);
        let submitteddata = { ...user }
        submitteddata = {
            email: email,
            name: name,
            image: photo,
            password: password
        }
        setUser(submitteddata);
        console.log(submitteddata);
        axios.post('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up', submitteddata)
            .then(HandleSuccess)
            .catch(HandleFailure);
    }

    function HandleSuccess(event) {
        console.log(event);
        navigate('/');
    }

    function HandleFailure(event) {
        if (event !== undefined) {
            alert("Não foi possível realizar seu cadastro! Tente novamente com outras informações");
            setDisabled(!disabled);
            setFailure(!failure);
        }
    }

    useEffect(() => {
        setDisabled(false);
    }, [failure]);

    return (
        <>
            <PageLogo />
            <PageContainer>
                <FormsContainer onSubmit={(event) => { HandleSubmit(event) }}>
                    <InputField info={'email'} disabled={disabled} type='email' text={'email'} data={user} setData={setEmail}></InputField>
                    <InputField info={'password'} disabled={disabled} type='password' text={'senha'} setData={setPassword}></InputField>
                    <InputField info={'name'} disabled={disabled} type='text' text={'nome'} setData={setName}></InputField>
                    <InputField info={'image'} disabled={disabled} type='text' text={'foto'} setData={setPhoto}></InputField>
                    {!disabled ? <GenericButton disabled={disabled} text={<span>Cadastrar</span>}></GenericButton> : <GenericButton disabled={disabled} text={<ThreeDots color="#FFFFFF" height={80} width={80} />}></GenericButton>}
                </FormsContainer>
                <Link to={`/`}><Redirect>Já tem uma conta? Faça login!</Redirect></Link>
            </PageContainer>
        </>
    );
}