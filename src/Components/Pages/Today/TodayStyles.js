import styled from "styled-components";
import { ContentContainer, HabitContainer, TitleContainer } from "../Home/HomeStyles";
import { SquareOutline, CheckmarkOutline } from 'react-ionicons';

const SquareOutlineModified = styled(SquareOutline)`
`;

const CheckmarkOutlineModified = styled(CheckmarkOutline)`
`;

const SubHeaderContainer = styled.div`
`;

const SubtitleContainer = styled.div`
`;

const ContentContainerModified = styled(ContentContainer)`
    margin: 100px 0 0 0;
`;

const Container = styled(HabitContainer)`
    display: flex;
    justify-content: space-between;
    margin: 0 0 20px 0;
`;

const LeftContainer = styled.div`
    margin: 13px 0 0 15px;
    font-style: normal;
    font-weight: 400;

    color: #666666;
`;

const HabitTitle = styled.div`
    font-size: 20px;
    line-height: 25px;
`;

const SequenceContainer = styled.div`
    margin: 5px 0 0 0;
    display: flex;
    flex-direction: column;
    font-size: 13px;
    line-height: 16px;
`;

const RightContainer = styled.div`
    width: 70px;
    height: 70px;
    margin: 13px 15px 0 0;
`;

const IconContainer = styled.div`
    position: absolute;
    width: 70px;
    height: 70px;
`;

const IconBackground = styled.div`
    position: absolute;
    background-color: ${(status) => status.status ? '#8FC549' : '#EBEBEB' };
    border-radius: 10px;
`;

const IconFront = styled.div`
    position: relative;
`;

const ButtonBackground = styled.div`
    width: 100%;
    height: 100%;
    background-color: ${status => status.status ? '#8FC549' : '#FFFFFF'};
`;

const DynamicSubtitle = styled.div`
`;

const TitleContainerModified = styled(TitleContainer)`
    align-items: flex-start;
    flex-direction: column;
    height: 60px;
    margin: 15px 0 15px 0;
`

const DynamicText = styled.span`
    font-size: 18px;
    line-height: 22px;
    color: ${progress => progress.progress ? '#8FC549' : '#BABABA' }
`;

const ColorChange = styled.span`
    color: #8FC549;
`

export {
    SubHeaderContainer,
    SubtitleContainer,
    LeftContainer,
    RightContainer,
    Container,
    IconContainer,
    IconBackground,
    IconFront,
    SquareOutlineModified,
    CheckmarkOutlineModified,
    HabitTitle,
    SequenceContainer,
    ButtonBackground,
    DynamicSubtitle,
    TitleContainerModified,
    DynamicText,
    ColorChange,
    ContentContainerModified
}

