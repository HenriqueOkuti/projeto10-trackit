import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { ThreeDots } from "react-loader-spinner";
import styled from "styled-components";
import Footer from "./Footer";
import Background from "./Structures/Background";
import Header from "./Structures/Header";
import UserAddHabit from "./UserAddHabit";
import UserHabitContainer from "./UserHabitContainer";

const userInfo = {
    email: localStorage.getItem('email'),
    id: localStorage.getItem('id'),
    image: localStorage.getItem('image'),
    name: localStorage.getItem('name'),
    password: localStorage.getItem('password'),
    token: localStorage.getItem('token')
};

export const UserContext = createContext(userInfo);

export default function Home() {
    const [userHabits, setUserHabits] = useState([]);
    const [loaded, setLoaded] = useState([]);

    function HabitsContent() {
        const [add, setAdd] = useState(true);
        const [hasHabits, setHasHabits] = useState(false);

        return (
            <ContentContainer>
                <TitleContainer>
                    <Title>
                        Meus hábitos
                    </Title>
                    <AddHabit onClick={() => setAdd(!add)}>
                        <ButtonIcon>+</ButtonIcon>
                    </AddHabit>
                </TitleContainer>
                <HabitsContainer>
                    {!add ? <UserAddHabit add={add} setAdd={setAdd} /> : <></>}
                    <VerifyHabits />
                </HabitsContainer>
            </ContentContainer>
        );
    }

    function VerifyHabits() {
        const config = {
            headers: {
                "Authorization": `Bearer ${userInfo.token}`
            }
        }
        if (loaded) {
            console.log("Entrou no axios");
            const promise = axios.get('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits', config);
            promise.then(handleSuccess)
            promise.catch(handleFailure)
        }
        console.log("Saiu do use Effect");
        return (RenderHabits());
    }

    function RenderHabits() {
        if (!loaded) {
            if (userHabits === []) {
                return (
                    <DefaultText>
                        Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!
                    </DefaultText>
                );
            }
            return (
                <div>
                    {userHabits.map((e, i) => (<UserHabitContainer key={i} habit={e} />))}
                </div>
            );
        }
        else {
            return (
                <DefaultLoader>
                    <ThreeDots color="#126BA5" height={80} width={80} />
                </DefaultLoader>
            );
        }
    }


    function handleSuccess(event) {
        console.log("Sucesso");
        console.log(event.data);
        setUserHabits(event.data);
        setLoaded(!loaded);
    }

    function handleFailure(event) {
        console.log("Falha");
        console.log(event);
        return (
            <DefaultText>
                Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!
            </DefaultText>
        );
    }

    console.log(userInfo);
    return (
        <>
            <Background></Background>
            <Header image={userInfo.image}></Header>
            <HabitsContent></HabitsContent>
            <Footer></Footer>
        </>
    );
}

const DefaultLoader = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`

const ContentContainer = styled.div`
    width: 100vw;
    display: flex;
    flex-direction: column;
    margin: 0 30px 0 20px;
`;

const TitleContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 90vw;
    height: 30px;
    margin: 40px 0 15px 0;
    font-family: 'Lexend Deca',sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 23px;
    line-height: 30px;
    color: #126BA5;
`;

const Title = styled.div`
`;

const AddHabit = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 35px;
    background: #52B6FF;
    border-radius: 4.63636px;
`;

const ButtonIcon = styled.div`
    width: 20px;
    height: 35px;
    font-family: 'Lexend Deca', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 30px;
    line-height: 34px;
    text-align: center;
    color: #FFFFFF;
`

const HabitsContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    font-family: 'Lexend Deca', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    word-break: normal;
    line-height: 22px;
    color: #666666;
`;

const DefaultText = styled.div`
    width: 90vw;
`