import React, { useState } from 'react'
import "./Navbar.css"
import navImg from "../../assets/logo.png"
import { FaCaretDown } from "react-icons/fa6";
import { HiBars3BottomRight } from "react-icons/hi2";




function Navbar() {
    const [language, setLanguage] = useState('RU');
    return (
        <nav>
            <div className="navbar">
                <div className="nav__logo">
                    <img src={navImg} alt="" />
                </div>
                <ul className='container '>
                    <li>Главная</li>
                    <li>О нас</li>
                    <li className='dropdown'>
                        <button className='drop'>Курсы <FaCaretDown />
                        </button>
                        <div className="down">
                            <a href="#">робототехника</a>
                            <a href="#">Английский</a>
                            <a href="#">Живопись для детей</a>
                            <a href="#">Живопись для взрослых</a>
                        </div>
                    </li>
                    <li>Контакты</li>
                </ul>
                <button className='nav__btn'>Позвонить</button>
                <div className="nav__lang">
                    <button
                        className={`lang__button ${language === 'RU' ? 'active' : ''}`}
                        onClick={() => setLanguage('RU')}
                    >
                        RU
                    </button>
                    <button
                        className={`lang__button ${language === 'UZ' ? 'active' : ''}`}
                        onClick={() => setLanguage('UZ')}
                    >
                        UZ
                    </button>
                    <span className='nav__bars'>
                    <HiBars3BottomRight />
                </span>
                </div>
              




            </div>



        </nav>
    )
}

export default Navbar
