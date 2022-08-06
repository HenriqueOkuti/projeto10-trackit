import styled from "styled-components";

export default function GenericButton({ disabled, text }) {
    return (
        <>
            <Button disabled={disabled}>
                <ButtonText>{text}</ButtonText>
            </Button>
        </>
    );
}

const Button = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 306px;
    height: 45px;
    background: #52B6FF;
    border-radius: 5px;
    margin: 3px 0 0 0;
`;

const ButtonText = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 26px;
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 26px;
    text-align: center;
    color: #FFFFFF;
`;