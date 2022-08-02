import styled from "styled-components";
import FontStyles from "../shared/Vars";


export default function App() {
    return (
        <>
            <FontStyles />
            <Teste1 className="teste1">TrackIt</Teste1>
            <Teste2 className="teste2">Texto</Teste2>
        </>
    );
}

const Teste1 = styled.div`
    font-family: 'Playball';
`

const Teste2 = styled.div`
    font-family: 'Lexend Deca';
`