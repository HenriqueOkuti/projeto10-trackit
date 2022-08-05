import styled from "styled-components";

export default function InputField({ info, disabled, type, text, setData }) {
    // console.log(info, disabled, type, text, setData);
    return (
        <>
            <UserInput required={true} minLength={3} disabled={disabled} type={type} placeholder={text} onChange={e => {e.info = e.target.value ;setData(e.target.value)}} ></UserInput>
        </>
    );
}

const UserInput = styled.input`
    width: 300px;
    height: 45px;
    background: ${status => status.disabled ? '#F2F2F2' : '#FFFFFF' };
    border: 1px solid #D5D5D5;
    border-radius: 5px;
    margin: 3px 0 3px 0;
`;