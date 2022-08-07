import styled from "styled-components";
import { CloseOutline, CheckmarkOutline } from 'react-ionicons';

const PageContainer = styled.div`
font-family: 'Lexend Deca', sans-serif;
margin: 0 0 110px 0;
`

const UserHabitsContainer = styled.div`
margin: 0 0 50px 0;
`

const DefaultLoader = styled.div`
display: flex;
align-items: center;
justify-content: center;
`

const ContentContainer = styled.div`
width: 100vw;
display: flex;
flex-direction: column;
font-family: 'Lexend Deca',sans-serif;
margin: 0 30px 0 20px;
`;

const TitleContainer = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
width: 90vw;
height: 30px;
margin: 40px 0 15px 0;
font-style: normal;
font-weight: 400;
font-size: 23px;
line-height: 30px;
color: #126BA5;
`;

const Title = styled.div`
`;

const AddHabit = styled.button`
display: flex;
align-items: center;
justify-content: center;
width: 40px;
height: 35px;
background: #52B6FF;
border-radius: 4.63636px;
`;

const ButtonIcon = styled.div`
width: 20px;
height: 35px;
font-family: 'Lexend Deca', sans-serif;
font-style: normal;
font-weight: 400;
font-size: 30px;
line-height: 34px;
text-align: center;
color: #FFFFFF;
`

const HabitsContainer = styled.div`
display: flex;
flex-direction: column;
width: 100%;
font-family: 'Lexend Deca', sans-serif;
font-style: normal;
font-weight: 400;
font-size: 18px;
word-break: normal;
line-height: 22px;
color: #666666;
`;

const DefaultText = styled.div`
width: 90vw;
`

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

    margin: 0 10px 0 0;

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

const FormsContainer = styled.form`
`


const CloseOutlineModified = styled(CloseOutline)`
    display: flex;
    align-items: center;
    justify-content: center;
`;

const CheckmarkOutlineModified = styled(CheckmarkOutline)`
    display: flex;
    align-items: center;
    justify-content: center;
`;

const OptionsContainer = styled.div`
    display: flex;
    //height: 100%;
`;

const Back = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #FF605C;
    width: 20px;
    border-radius: 100px;
    margin: 0 15px 0 0;
`;
const Confirm = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #00CA4E;
    width: 20px;
    border-radius: 100px;
`;

const TopContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`

const TopElement = styled.div`
    margin: 10px 15px 0 15px;
`

const BottomContainer = styled.div`
    margin: 0 10px 0 10px;
`

const HabitContainer = styled.div`
    width: 90%;
    height: 90px;

    background: #FFFFFF;
    border-radius: 5px;

    margin: 10px 0 0 0;
`
const DeleteButton = styled.div`
`


export {
    PageContainer,
    UserHabitsContainer,
    DefaultLoader,
    ContentContainer,
    TitleContainer,
    Title,
    AddHabit,
    ButtonIcon,
    HabitsContainer,
    DefaultText,
    InputContainer,
    EndContainer,
    Cancel,
    Save,
    SmallButton,
    DaysContainer,
    UserAddContainer,
    FormsContainer,
    CloseOutlineModified,
    CheckmarkOutlineModified,
    OptionsContainer,
    Back,
    Confirm,
    TopContainer,
    TopElement,
    BottomContainer,
    HabitContainer,
    DeleteButton
};