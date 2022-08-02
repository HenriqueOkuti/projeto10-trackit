import styled from "styled-components";

export default function InputField({ text }) {
    return (
        <>
            <UserInput placeholder={text}></UserInput>
        </>
    );
}

const UserInput = styled.input`
    width: 300px;
    height: 45px;
    background: #FFFFFF;
    border: 1px solid #D5D5D5;
    border-radius: 5px;
    margin: 3px 0 3px 0;
`