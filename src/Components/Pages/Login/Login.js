import { ThreeDots } from "react-loader-spinner";
import { Link, useNavigate } from "react-router-dom";
import InputField from "../../StructuresStyles/InputField";
import { FormsContainer, PageContainer, Redirect } from "./LoginStyles";
import GenericButton from '../../StructuresStyles/GenericButton';
import { useContext, useEffect, useState } from "react";
import PageLogo from '../../StructuresStyles/PageLogo';
import axios from "axios";
import UserToken from "../../Context/Context";

export default function Login() {
    const [disabled, setDisabled] = useState(false);
    const [failure, setFailure] = useState(false);
    const [cacheverified, setCacheVerified] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [user, setUser] = useState(
        {
            email: '',
            password: ''
        }
    )
    //const {token, setToken} = useContext(UserToken);
    const navigate = useNavigate();

    function verifyCache() {
        if (localStorage.getItem('userToken') !== null && localStorage.getItem('userToken') !== 'undefined') {
            navigate('/habitos');
        }
        setCacheVerified(true);
    }

    useEffect(() => { verifyCache() }, [cacheverified]);
    useEffect(() => {
        setDisabled(false);
    }, [failure]);

    function HandleSubmit(event) {
        event.preventDefault();
        setDisabled(!disabled);
        let submitteddata = { ...user };
        submitteddata = {
            email: email,
            password: password,
        };
        setUser(submitteddata);
        axios.post('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login', submitteddata)
            .then(HandleSuccess)
            .catch(HandleFailure);
    }

    function HandleSuccess(event) {
        UserToken.context = {
            id: event.data.id,
            token: event.data.token,
            name: event.data.name,
            image: event.data.image

        };
        localStorage.setItem('userToken', JSON.stringify(UserToken.context.token));
        localStorage.setItem('userData', JSON.stringify(UserToken.context));
        navigate("/habitos");
    }

    function HandleFailure(event) {
        if (event !== undefined) {
            alert("Não foi possível realizar seu login! Verifique as informações");
            setDisabled(!disabled);
            setFailure(!failure);
        }
    }

    return (
        <>
            <PageLogo />
            <PageContainer>
                <FormsContainer onSubmit={(event) => { HandleSubmit(event) }}>
                    <InputField info={'email'} disabled={disabled} type='email' text={'email'} data={user} setData={setEmail}></InputField>
                    <InputField info={'password'} disabled={disabled} type='password' text={'senha'} data={user} setData={setPassword}></InputField>
                    {!disabled ? <GenericButton disabled={disabled} text={<span>Entrar</span>}></GenericButton> : <GenericButton disabled={disabled} text={<ThreeDots color="#FFFFFF" height={80} width={80} />}></GenericButton>}
                </FormsContainer>
                <Link to={`/cadastro`}><Redirect>Não tem uma conta? Cadastre-se!</Redirect></Link>
            </PageContainer>
        </>
    );
}

