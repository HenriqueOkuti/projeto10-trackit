import { useState } from "react";
import Background from "../../StructuresStyles/Background";
import Footer from "../../StructuresStyles/Footer";
import Header from "../../StructuresStyles/Header";
import { ContentContainer, TitleContainer } from "../Home/HomeStyles";
import { SubHeaderContainer, SubtitleContainer } from "./TodayStyles";

export default function Today() {
    const [userprogress, setUserProgress] = useState(fetchScore());
    let userToken = JSON.parse(localStorage.getItem('userToken'));
    let userData = JSON.parse(localStorage.getItem('userData'));

    function fetchScore() {
        return 20;
    }

    return (
        <>
            <Background></Background>
            <Header image={userData.image}></Header>
            <ContentContainer>
                <SubHeaderContainer>
                    <TitleContainer>
                        Dia de Hoje(?)
                    </TitleContainer>
                    <SubtitleContainer>
                        Texto Dinâmico
                    </SubtitleContainer>
                </SubHeaderContainer>
            </ContentContainer>
            <Footer userprogress={userprogress} ></Footer>
        </>
    );
}

