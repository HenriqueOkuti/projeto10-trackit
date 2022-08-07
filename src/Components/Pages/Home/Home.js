import { useEffect, useState } from 'react';
import Background from '../../StructuresStyles/Background';
import Header from '../../StructuresStyles/Header';
import Footer from '../../StructuresStyles/Footer';
import { AddHabit, ButtonIcon, ContentContainer, DefaultText, HabitsContainer, PageContainer, Title, TitleContainer } from './HomeStyles';
import ListHabits from './ListHabits';
import UserAddHabits from './UserAddHabit';
import axios from 'axios';
import FooterProgress from '../../Functions/FooterProgress';

export default function Home() {
    const [update, setUpdate] = useState(false);
    //UPDATE USER PROGRESS DEFAULT VALUE FROM SERVER
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
        axios.get('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits', config)
            .then(handleSuccess)
            .catch(handleFailure);
    }, [update])
    useEffect(() => {
        hasUpdate(update);
    }, [update, userhabits]);
    if (update) {
        hasUpdate(update);
    }
    function hasUpdate(status) {
    }

    function handleSuccess(event) {
        setUserhabits(event.data);
    }

    function handleFailure(event) {
        console.log(event);
    }
    function TempText() {
        return (
            <DefaultText>
                Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!
            </DefaultText>
        );
    }

    FooterProgress(userToken, update, setUpdate, userprogress, setUserProgress);

    function HabitsContent() {
        const [add, setAdd] = useState(false);
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
                    {add ?
                        <UserAddHabits add={add} setAdd={setAdd} update={update} setUpdate={setUpdate} /> :
                        <></>
                    }
                    {userhabits.length === 0 ? <TempText /> : userhabits.map((e, i) => <ListHabits key={i} userhabit={e} update={update} setUpdate={setUpdate}></ListHabits>)}
                </HabitsContainer>
            </ContentContainer>
        );
    }

    return (
        <>
            <Background />
            <PageContainer>
                <Header image={userData.image} />
                <HabitsContent />
                <Footer userprogress={userprogress} />
            </PageContainer>

        </>
    );
}