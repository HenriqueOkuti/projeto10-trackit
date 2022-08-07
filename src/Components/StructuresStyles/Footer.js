import styled from "styled-components";
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { Link } from "react-router-dom";

export default function Footer({userprogress}) {
    let percentage = userprogress;

    return (
        <FooterContainer>
            <Link to={"/habitos"} >
                <RedirectHabits>Hábitos</RedirectHabits>
            </Link>

            <TodayContainer>
                <Link to={"/hoje"} >
                    <BlueBackground></BlueBackground>
                    <RedirectToday>
                        <CircularProgressbar
                            styles={buildStyles({
                                pathColor: `#FFFFFF`,
                                textColor: '#FFFFFF',
                                trailColor: '#52B6FF',
                                backgroundColor: '#52B6FF',
                            })}
                            value={percentage}
                            text={`Hoje`}
                        />
                    </RedirectToday>
                </Link>
            </TodayContainer>

            <Link to={"/historico"} >
                <RedirectTimeline>Histórico</RedirectTimeline>
            </Link>

        </FooterContainer>
    );
}

const FooterContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100vw;
    height: 70px;
    background: #FFFFFF;
    font-family: 'Lexend Deca', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 17.976px;
    line-height: 22px;
    text-align: center;
    color: #52B6FF;
`;

const RedirectHabits = styled.div`
    margin: 5px 0 0 15px;
`;

const TodayContainer = styled.div`
    position: absolute;
    margin-left: 50%; 
`;

const BlueBackground = styled.div`
    position: absolute;
    margin-left: -61%; 
    top: -55px;
    width: 110px;
    height: 110px;
    background-color: #52B6FF;
    border-radius: 100px;

`;

const RedirectToday = styled.div`
    position: relative;
    margin-left: -50%; 
    top: -45px;
    width: 90px;
    height: 90px;
    color: #FFFFFF;

`;

const RedirectTimeline = styled.div`
    margin: 5px 15px 0 0;
`;