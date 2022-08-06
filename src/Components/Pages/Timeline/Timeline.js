import axios from "axios";
import { useEffect, useState } from "react";
import Background from "../../StructuresStyles/Background";
import Footer from "../../StructuresStyles/Footer";
import Header from "../../StructuresStyles/Header";
import { ContentContainer, DefaultText, PageContainer, Title, TitleContainer } from "../Home/HomeStyles";
import { DefaultLoader } from "./TimelineStyles";
import { ThreeDots } from "react-loader-spinner";

export default function Timeline() {
    const [userprogress, setUserProgress] = useState(fetchScore());
    let userToken = JSON.parse(localStorage.getItem('userToken'));
    let userData = JSON.parse(localStorage.getItem('userData'));
    const config = {
        headers: {
            "Authorization": `Bearer ${userToken}`
        }
    }
    const [fetched, setFetched] = useState(false);
    let habits;

    useEffect(() => {
        axios.get('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/history/daily', config)
            .then(HandleSuccess)
            .catch(HandleFailure);
        setFetched(!fetched);
    }, [])


    return (
        <>
            <Background></Background>
            <PageContainer>
                <Header image={userData.image}></Header>
                <HistoryContent />
                <Footer userprogress={userprogress}></Footer>
            </PageContainer>
        </>
    );

    function fetchScore() {
        return 20;
    }

    function HistoryContent() {
        if (fetched) {
            return (
                <ContentContainer>
                    <TitleContainer>
                        <Title>
                            Histórico
                        </Title>
                    </TitleContainer>
                    {habits !== undefined ? <EmptyText /> : <LoadHabits />}
                </ContentContainer>
            );
        }
        return (
            <DefaultLoader>
                <ThreeDots color="#126BA5" height={80} width={80} />
            </DefaultLoader>
        )
    }

    function EmptyText() {
        return (
            <DefaultText>
                Em breve você poderá ver o histórico dos seus hábitos aqui!
            </DefaultText>
        );
    }

    function LoadHabits() {
        return (
            <DefaultText>
                Em breve você poderá ver o histórico dos seus hábitos aqui!
            </DefaultText>
        );
    }

    function HandleSuccess(event) {
        console.log(event);
        habits = event.data;
        if (habits !== undefined) {
            HistoryContent();
        }

    }

    function HandleFailure(event) {
        console.log(event);
        HistoryContent();
    }

}