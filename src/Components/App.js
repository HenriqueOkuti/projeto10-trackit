import { BrowserRouter, Routes, Route } from 'react-router-dom';
import FontStyles from "../shared/Vars";
import Login from "./Login";
import Signin from "./Signin";
import Home from "./Home";
import Today from "./Today";
import Timeline from "./Timeline";


export default function App() {
    return (
        <>
            <FontStyles />
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route path="/cadastro" element={<Signin />} />
                    <Route path="/habitos" element={<Home />} />
                    <Route path="/hoje" element={<Today />} />
                    <Route path="/historico" element={<Timeline />} />
                </Routes>
            </BrowserRouter>

        </>
    );
}

