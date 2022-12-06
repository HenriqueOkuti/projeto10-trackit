import { BrowserRouter, Routes, Route } from 'react-router-dom';
import FontStyles from '../shared/Vars';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import Signin from './Pages/Signin/Signin';
import Timeline from './Pages/Timeline/Timeline';
import Today from './Pages/Today/Today';

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
