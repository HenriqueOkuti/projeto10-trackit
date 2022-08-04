import { useEffect, useState } from "react";
import styled from "styled-components";
import Footer from "./Footer";
import Background from "./Structures/Background";
import Header from "./Structures/Header";
import InputField from "./Structures/InputField";
import UserAddHabit from "./UserAddHabit";

export default function Home() {
    return (
        <>
            <Background></Background>
            <Header></Header>
            <HabitsContent></HabitsContent>
            <Footer></Footer>
        </>
    );
}

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
                {add ? <UserAddHabit add={add} setAdd={setAdd} /> : <></>}
                <VerifyHabits hasHabits={hasHabits} />
            </HabitsContainer>
        </ContentContainer>
    );
}

function VerifyHabits({ hasHabits }) {
    if (hasHabits) {
        return (
            <></>
        );
    }
    else {
        return (
            <DefaultText>
                Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!
            </DefaultText>
        );
    }

}

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