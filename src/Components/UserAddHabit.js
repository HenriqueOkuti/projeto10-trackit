import axios from "axios";
import { useState } from "react";
import { ThreeDots } from "react-loader-spinner";
import styled from "styled-components";
import { UserContext } from "./Home";
import InputField from "./Structures/InputField";

export default function UserAddHabit({ add, setAdd }) {
    const days = [['D', 'Domingo'], ['S', 'Segunda'], ['T', 'Terça'], ['Q', 'Quarta'], ['Q', 'Quinta'], ['S', 'Sexta'], ['S', 'Sábado']];
    const [name, setName] = useState('');
    const [habitname, setHabitName] = useState('');
    const [habitdays, setHabitDays] = useState([]);
    const [disabled, setDisabled] = useState(false);
    const [submit, setSubmit] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    const newhabit = {
        name: habitname,
        days: habitdays
    }

    if (submitted) {
        setSubmit(!submit);
        setDisabled(!disabled);
        setSubmitted(!submitted);
    }


    return (
        <UserAddContainer>
            <InputContainer>
                <InputField info={newhabit.name} disabled={disabled} type='name' text={'Nome do hábito'} setData={setHabitName}></InputField>
                <DaysContainer>
                    {days.map((e, i) => AddDay(e, i, disabled))}
                </DaysContainer>
            </InputContainer>
            <EndContainer>
                <Cancel onClick={() => disabled ? '' : setAdd(!add)}>
                    Cancelar
                </Cancel>
                {submit ? <Save><ThreeDots color="#FFFFFF" height={30} width={60} /></Save> : <Save onClick={() => { setDisabled(!disabled); setSubmit(!submit); handleSubmit() }}>Salvar</Save>}
            </EndContainer>
        </UserAddContainer>
    );

    function handleSubmit() {
        console.log("Handle submit");
        console.log(newhabit);
        const userInfo = UserContext._currentValue;

        console.log(UserContext);

        const config = {
            method: 'post',
            url: 'https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits',
            headers: {
                Authorization: `Bearer ${userInfo.token}`,
            },
            body: {
                name: newhabit.name,
                days: newhabit.days.sort((a,b)=>a-b)
            }
        }

        console.log(config);

        const request = axios.post(config.url, config.body, config);
        request.then(HandleSuccess);
        request.catch(HandleFailure);

    }

    function HandleSuccess(event) {
        console.log('Sucesso');
        console.log(event);
        setAdd(!add);
        return setSubmitted(!submitted);
    }

    function HandleFailure(event) {
        console.log('Falha');
        console.log(event);

        return setSubmitted(!submitted);
    }

    function AddDay(day, index, disabled) {
        const [clicked, setClicked] = useState(false);
        return (
            <SmallButton disabled={disabled} key={index} selected={clicked} onClick={() => { pushDays(index); setClicked(!clicked) }}>{day[0]}</SmallButton>
        );
    }

    function pushDays(day) {
        if (habitdays.includes(day)) {
            let arrayaux = habitdays;
            let index = arrayaux.findIndex((e) => e === day);
            arrayaux.splice(index, index + 1);
            setHabitDays(arrayaux);
        }
        else {
            let arrayaux = habitdays;
            arrayaux.push(day);
            setHabitDays(arrayaux);
        }
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

    color: ${selected => selected.selected ? '#FFFFFF' : '#DBDBDB'};

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
