import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import MainPage from './components/MainPage/MainPage';
import About from './components/About/About';
import Game_x_o from './components/game_x_o/game_x_o';
import Login from './components/Login/Login';
import Home from './components/Home/Home'
// import Add_a_message from './components/Add_a_message/Add_a_message';
import Director from './components/Director/Director'
import Massages from './components/Massages/Massages'
import { StoreType } from './redux/store';
import { useDispatch, useSelector } from 'react-redux';
import { Suspense } from 'react';



function App() {
  const allStore = useSelector((store: StoreType) => store)
  const _disptach = useDispatch();
  return (
    <BrowserRouter>

      <Routes>
        <Route path="" element={<Login></Login>}></Route>
        <Route path="/main-page" element={<MainPage></MainPage>}>
          <Route path="/main-page/login" element={<Login></Login>}></Route>
          <Route path="/main-page/home" element={allStore.user.password == "7" ? <div className="col-sm-6"><Director /> </div> : <Home />}></Route>
          <Route path="/main-page/game_x_o" element={<Game_x_o></Game_x_o>}></Route>
          <Route path="/main-page/about" element={<About></About>}></Route>
          <Route path="/main-page/director" element={<Director></Director>}></Route>
          <Route path="/main-page/:idLink/:messages/:userId" element={<div className='Mass'><Massages></Massages></div>}></Route>
          {/* <Route path="/" element={allStore.user.password == "7" ? <div className="col-sm-6"><Director /> </div> : <Home />}></Route> */}
        </Route>
      </Routes>

    </BrowserRouter>
  );

}


export default App;
