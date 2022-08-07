import styled from "styled-components";

export default function Header({image}) {
    return (
        <PageHeader>
            <HeaderLogo>TrackIt</HeaderLogo>
            <AvatarContainer>
                <AvatarBackground src="https://color.adobe.com/media/theme/92471.png" alt="alt text"></AvatarBackground>
                <Avatar src={image} alt="alt text"></Avatar>
            </AvatarContainer>
        </PageHeader>
    );
}

const PageHeader = styled.div`
    position: sticky;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100vw;
    height: 70px;
    left: 0px;
    top: 0px;
    background: #126BA5;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
`;

const HeaderLogo = styled.div`
    width: 100px;
    height: 50px;
    font-family: 'Playball', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 39px;
    line-height: 50px;
    margin: 0 0 0 20px;
    color: #FFFFFF;
`;

const AvatarContainer = styled.div`
    position: relative;
    width: 50px;
    height: 50px;
    border-radius: 98.5px;
    margin: 0 20px 0 0;
`

const AvatarBackground = styled.img`
    position: absolute;
    width: 50px;
    height: 50px;
    border-radius: 98.5px;
    object-fit: cover;
`

const Avatar = styled.img`
    position: absolute;
    width: 50px;
    height: 50px;
    border-radius: 98.5px;
`;