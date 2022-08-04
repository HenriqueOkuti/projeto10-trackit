import styled from "styled-components";

export default function InputField({ type, text, setData }) {
    return (
        <>
            <UserInput type={type} placeholder={text} onChange={e => setData(e.target.value)} ></UserInput>
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