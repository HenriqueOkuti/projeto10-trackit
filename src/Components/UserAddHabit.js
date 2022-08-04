import { useState } from "react";
import styled from "styled-components";
import InputField from "./Structures/InputField";

export default function UserAddHabit({add, setAdd}) {
    const days = [['D', 'Domingo'], ['S', 'Segunda'], ['T', 'Terça'], ['Q', 'Quarta'], ['Q', 'Quinta'], ['S', 'Sexta'], ['S', 'Sábado']];
    return (
        <UserAddContainer>
            <InputContainer>
                <InputField type='name' text={'Nome do hábito'} ></InputField>
                <DaysContainer>
                    {days.map((e, i) => AddDay(e, i))}
                </DaysContainer>
            </InputContainer>
            <EndContainer>
                <Cancel onClick={() => setAdd(!add)}>
                    Cancelar
                </Cancel>
                <Save>
                    Salvar
                </Save>
            </EndContainer>
        </UserAddContainer>
    );

    function AddDay(day, index) {
        const [clicked, setClicked] = useState(false);
        return (
            <SmallButton key={index} selected={clicked} onClick={() => { console.log(day[1]); setClicked(!clicked) }}>{day[0]}</SmallButton>
        );
    }
}

const InputContainer = styled.div`
    margin: 15px 0 0 20px;
`;

const EndContainer = styled.div`
    display: flex;
    align-items: flex-end;
    justify-content: flex-end;
    margin: 25px 30px 0 0;
`;
const Cancel = styled.button`
    margin: 0 25px 0 0;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 90px;
    height: 35px;
    background: #FFFFFF;
    border-radius: 5px;
`;
const Save = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 90px;
    height: 35px;
    background: #52B6FF;
    border-radius: 5px;
    color: #FFFFFF;
`;

const SmallButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;

    width: 30px;
    height: 30px;

    background: ${selected => selected.selected ? '#CFCFCF' : '#FFFFFF'};
    border: 1px solid #D5D5D5;
    border-radius: 5px;

`

const DaysContainer = styled.div`
    display: flex;
    align-items: center;
    margin: 15px 0 0 0;
`;

const UserAddContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0 0 30px 0;
    width: 90%;
    height: 180px;
    background: #FFFFFF;
    border-radius: 5px;
`;
