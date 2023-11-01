import React, { FC } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import './MainPage.css';


interface MainPageProps { }

const MainPage: FC<MainPageProps> = () => {

  const myNavigate = useNavigate();
  const goToPage = (target: string) => {
    debugger
    myNavigate(target)
  }



  return (<div>


    <nav className="navbar navbar-expand-lg navbar-light bg-light">


      <div className="collapse navbar-collapse" id="navbarNavDropdown">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <a onClick={() => { goToPage('/main-page/home') }} className="nav-link" href="#">home-page </a>
          </li>


          <li className="nav-item">
            <a onClick={() => { goToPage('/main-page/game_x_o') }} className="nav-link" href="#">game_x_o</a>
          </li>


          <li className="nav-item active">
            <a onClick={() => { goToPage('/main-page/about') }} className="nav-link" href="#">about </a>
          </li>


          <li className="nav-item active">
            <a onClick={() => { goToPage('/main-page/director') }} className="nav-link" href="#">director </a>
          </li>


        </ul>
      </div>
    </nav>


    <Outlet></Outlet>


  </div>


  )
}


export default MainPage;
