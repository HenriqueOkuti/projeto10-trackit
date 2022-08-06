import styled from "styled-components";

export default function Background() {
    return (
        <BackgroundColor></BackgroundColor>
    );
}

const BackgroundColor = styled.div`
    position: fixed;
    //display: inline-block;
    z-index: -1;
    width: 100vw;
    height: 100%;
    min-height: 100%;
    background-color: #E5E5E5;
`;