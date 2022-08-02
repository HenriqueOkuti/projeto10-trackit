import styled from "styled-components";
import Logo from "../../shared/Logo.png";

export default function PageLogo() {
    return (
        <>
            <LogoContainer>
                <LogoImage src={Logo} alt="alt" />
                <TitleText>TrackIt</TitleText>
            </LogoContainer>
        </>
    );
}

const LogoContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100vw;
    margin: 70px 0 0 0;
`;

const LogoImage = styled.img`
    width: 200px;
    height: 90px;
`;

const TitleText = styled.div`
    font-family: 'Playball';
    font-style: normal;
    font-weight: 400;
    font-size: 70px;
    line-height: 86px;
    text-align: center;
    width: 200px;
    color: #126BA5;
`;

