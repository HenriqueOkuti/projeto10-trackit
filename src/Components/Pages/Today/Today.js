import axios from "axios";
import dayjs from "dayjs";
import 'dayjs/locale/pt-br';
import { useEffect, useState } from "react";
import Background from "../../StructuresStyles/Background";
import Footer from "../../StructuresStyles/Footer";
import Header from "../../StructuresStyles/Header";
import { ContentContainer, DefaultText, Title, TitleContainer } from "../Home/HomeStyles";
import {
    ContentContainerModified,
    ColorChange,
    DynamicText,
    TitleContainerModified,
    DynamicSubtitle,
    ButtonBackground,
    SequenceContainer,
    HabitTitle,
    SquareOutlineModified,
    CheckmarkOutlineModified,
    IconFront,
    IconBackground,
    IconContainer,
    Container,
    LeftContainer,
    RightContainer,
    SubHeaderContainer,
    SubtitleContainer
} from "./TodayStyles";



export default function Today() {
    const [update, setUpdate] = useState(false);
    const [userprogress, setUserProgress] = useState(0);
    const [userhabits, setUserhabits] = useState([]);
    let userToken = JSON.parse(localStorage.getItem('userToken'));
    let userData = JSON.parse(localStorage.getItem('userData'));
    let config = {
        headers: {
            "Authorization": `Bearer ${userToken}`
        }
    };
    useEffect(() => {
        axios.get('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today', config)
            .then(handleSuccess)
            .catch(handleFailure);
    }, [update]);

    useEffect(() => {
        hasUpdate(update);
    }, [update, userhabits]);

    function hasUpdate(status) {
        //console.log(status);
    }
    function handleSuccess(event) {
        //console.log("Success");
        setUserhabits(event.data);
        setUpdate(true);
        manageData(userhabits);
    }

    function manageData(userhabits, previousValue = 0) {
        //console.log(userhabits);
        console.log("updating the dynamic text")
        let progress = previousValue;
        let total = userhabits.length;
        for (let i = 0; i < total; i++) {
            if (userhabits[i].done) {
                progress++;
            }
        }
        if (progress !== 0) {
            setUserProgress(Math.round((progress / total) * 100));
            setUpdate(!update);
        }
        else {
            setUserProgress(0);

        }

    }

    function handleFailure(event) {
        //console.log("Failure");
        //console.log(event);
    }



    function Empty() {
        return (
            <DefaultText>
                Você não tem nenhum hábito cadastrado para hoje. Adicione um hábito para começar a trackear!
            </DefaultText>
        );
    }

    function handleSelection(event, habit, previous, selected, setSelected) {
        event.preventDefault();
        setSelected(!selected);
        updateScore(habit.id, !previous);
    }

    function updateScore(id, status) {
        const BASE_URL = 'https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/';

        console.log(status);

        if (status) {
            axios.post(`${BASE_URL}/habits/${id}/check`, {}, { headers: { Authorization: `Bearer ${userToken}` } })
                .then(() => setUpdate(!update))
                .catch((response) => console.log(response));
        }
        else {
            axios.post(`${BASE_URL}/habits/${id}/uncheck`, {}, { headers: { Authorization: `Bearer ${userToken}` } })
                .then(() => setUpdate(!update))
                .catch((response) => console.log(response));
        }
        setUpdate(!update);
    }

    function Filled({ index, habit }) {
        const [selected, setSelected] = useState(false);
        const initialvalue = habit.currentSequence;
        const [sequence, setSequence] = useState(habit.currentSequence);

        useEffect(() => {
            if (selected) {
                setSequence(initialvalue + 1);
            }
            else {
                setSequence(initialvalue)
            }
        }, [selected])

        return (

            <Container key={index}>
                <LeftContainer>
                    <HabitTitle>
                        {habit.name}
                    </HabitTitle>
                    <SequenceContainer>
                        <span>Sequência atual: {habit.done ?
                            <ColorChange>{`${sequence} dias`}</ColorChange> :
                            <>{`${sequence} dias`}</>}
                        </span>
                        <span>Seu recorde: {(habit.done && habit.highestSequence <= sequence) ?
                            <ColorChange>{habit.highestSequence} dias</ColorChange> :
                            <>{`${habit.highestSequence} dias`}</>}
                        </span>
                    </SequenceContainer>
                </LeftContainer>
                <RightContainer>
                    <IconContainer onClick={(event) => handleSelection(event, habit, habit.done, selected, setSelected)}>
                        <IconBackground status={selected || habit.done}>
                            <IconFront>
                                <CheckmarkOutlineModified
                                    color={'#FFFFFF'}
                                    title={'check mark'}
                                    height="70px"
                                    width="70px"
                                />
                            </IconFront>
                        </IconBackground>

                    </IconContainer>
                </RightContainer>
            </Container>
        )
    }

    function getDate() {
        let weekday = dayjs().locale('pt-br').format('dddd').replaceAll('-feira', '');
        weekday = weekday.replace(/^./, weekday[0].toUpperCase());
        const date = dayjs().format('DD/MM');
        return [weekday, date];
    }

    return (
        <>
            <Background></Background>
            <Header image={userData.image}></Header>
            <ContentContainer>
                <SubHeaderContainer>
                    <TitleContainerModified>
                        <Title>
                            {getDate().join(" - ")}
                        </Title>
                        <DynamicSubtitle>
                            {userprogress === 0 ? <DynamicText progress={false}>Nenhum hábito concluído ainda</DynamicText> : <DynamicText progress={true}>{`${userprogress}% dos hábitos concluídos`}</DynamicText>}
                        </DynamicSubtitle>
                    </TitleContainerModified>
                    <SubtitleContainer>
                        {userhabits.length === 0 ? <Empty /> : userhabits.map((e, i) => <Filled index={i} habit={e} />)}
                    </SubtitleContainer>
                </SubHeaderContainer>
            </ContentContainer>
            <ContentContainerModified>
                <Footer userprogress={userprogress} ></Footer>
            </ContentContainerModified>
        </>
    );
}

