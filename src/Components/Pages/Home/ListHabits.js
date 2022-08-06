import { DeleteButton, HabitContainer, TopContainer, TopElement, BottomContainer, DaysContainer, SmallButton, OptionsContainer, Back, CloseOutlineModified, Confirm, CheckmarkOutlineModified, FormsContainer } from "./HomeStyles";
import Garbage from "../../../shared/Garbage.svg";
import { useState } from "react";
import { GenericIcon } from "../../StructuresStyles/GenericIcon";
import axios from "axios";


export default function ListHabits({ userhabit, update, setUpdate }) {
    const [clicked, setClicked] = useState(false);
    const days = [['D', 'Domingo'], ['S', 'Segunda'], ['T', 'Terça'], ['Q', 'Quarta'], ['Q', 'Quinta'], ['S', 'Sexta'], ['S', 'Sábado']];

    function AddDay(day, index, disabled = true) {
        //const [selected, setSelected] = useState(false);
        if (userhabit.days.includes(index)) {
            disabled = false;
        }
        return (
            <SmallButton disabled={disabled} key={index} selected={!disabled} >{day[0]}</SmallButton>
        );
    }

    function ConfirmDelete() {
        return (
            <OptionsContainer>
                <Back>
                    <CloseOutlineModified
                        color={'#000000'}
                        title={'Cancel'}
                    />
                </Back>
                <Confirm onClick={(event) => handleDelete(event)}>
                    <CheckmarkOutlineModified
                        color={'#000000'}
                        title={'Confirm'}
                    />
                </Confirm>
            </OptionsContainer>
        );
    }

    function handleDelete(event) {
        event.preventDefault();
        const userToken = JSON.parse(localStorage.getItem('userToken'));
        const config = {
            headers: {
                "Authorization": `Bearer ${userToken}`
            }
        }
        const url = `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${userhabit.id}`;
        axios.delete(url, config)
            .catch(handleSuccess)
            .then(handleFailure)
    }

    function handleSuccess(event) {
        console.log("Success");
        console.log(event);
        //Upon success must close box and update list
        //its not working, must come back to this later
        setUpdate(!update);
    }

    function handleFailure(event) {
        console.log("Failure");
        console.log(event);
        //Upon success must close box and update list
        //its not working, must come back to this later
        setUpdate(!update);
    }

    return (
        <HabitContainer>
            <TopContainer>
                <TopElement>{userhabit.name}</TopElement>
                <FormsContainer onSubmit={(event) => event.preventDefault()}>
                    <TopElement>
                        <DeleteButton onClick={() =>
                            setClicked(!clicked)}>
                            {clicked ? <ConfirmDelete /> : <GenericIcon src={Garbage} />}
                        </DeleteButton>
                    </TopElement>
                </FormsContainer>
            </TopContainer>
            <BottomContainer>
                <DaysContainer>
                    {days.map((e, i) => AddDay(e, i, true))}
                </DaysContainer>
            </BottomContainer>
        </HabitContainer>
    );

}