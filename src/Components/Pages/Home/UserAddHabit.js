import axios from "axios";
import { ThreeDots } from "react-loader-spinner";
import { Cancel, DaysContainer, EndContainer, FormsContainer, InputContainer, Save, SmallButton, UserAddContainer } from "./HomeStyles";
import InputField from "../../StructuresStyles/InputField"
import { useEffect, useState } from "react";

export default function UserAddHabits({ add, setAdd, update, setUpdate }) {
    const [disabled, setDisabled] = useState(false);
    const [failure, setFailure] = useState(false);
    const [habitname, setHabitName] = useState('');
    const [habitdays, setHabitDays] = useState([]);
    const days = [['D', 'Domingo'], ['S', 'Segunda'], ['T', 'Terça'], ['Q', 'Quarta'], ['Q', 'Quinta'], ['S', 'Sexta'], ['S', 'Sábado']];

    function resetButtons() {
        if (disabled && failure) {
            setDisabled(!disabled);
            setFailure(!setFailure);
            alert("Não foi possível cadastrar o seu hábito! Tente novamente!");
        }
    }

    useEffect(() => {
        setDisabled(false);
        resetButtons();
    }, [failure])

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

    function handleSubmit(event) {
        event.preventDefault();
        setDisabled(!disabled);
        const userToken = JSON.parse(localStorage.getItem('userToken'));
        let newhabit = {
            name: habitname,
            days: habitdays.sort((a, b) => a - b)
        }
        const config = {
            url: 'https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits',
            headers: {
                Authorization: `Bearer ${userToken}`
            },
            body: {
                name: newhabit.name,
                days: newhabit.days
            }
        }
        axios.post(config.url, config.body, config)
            .then(handleSuccess)
            .catch(handleFailure);
    }

    function handleSuccess(event) {
        console.log(event);
        //Upon success must close box and update list
        //seems to be working, must come back to this later for reference
        setUpdate(!update);
    }

    function handleFailure(event) {
        console.log(event);
        setFailure(!failure);
        resetButtons();
    }

    return (
        <UserAddContainer>
            <FormsContainer onSubmit={(event) => event.preventDefault()}>
                <InputContainer>
                    <InputField info={'name'} disabled={disabled} type='name' text={'Nome do hábito'} data={habitname} setData={setHabitName}></InputField>
                    <DaysContainer>
                        {days.map((e, i) => AddDay(e, i, disabled))}
                    </DaysContainer>
                </InputContainer>
                <EndContainer>
                    <Cancel onClick={() => setAdd(!add)}>
                        Cancelar
                    </Cancel>
                    {disabled ? <Save><ThreeDots color="#FFFFFF" height={30} width={60} /></Save> : <Save onClick={(event) => { handleSubmit(event) }}>Salvar</Save>}
                </EndContainer>
            </FormsContainer>
        </UserAddContainer>
    );

}