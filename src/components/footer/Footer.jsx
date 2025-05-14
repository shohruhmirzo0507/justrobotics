import React from 'react'
import "./Footer.css"
import { RiTelegramLine } from "react-icons/ri";
import { CiYoutube, CiInstagram } from "react-icons/ci";
import ficon from "../../assets/fficon.png"



function Footer() {
  return (
    <div>
        <div className="footer">
            <div className="footer__top">
                <div className="foot__card foot__span ">
                    <br />
                    <img src={ficon} alt="" />
                    <br />
                    <br />
                    <span >
                    <p>SLOGAN lLorem ipsum dolor sit amet, <br /> consectetur adipiscing elit.</p>
                    <br />
                    <span className='foot__icon'>
                    <RiTelegramLine />
                    <CiYoutube />
                    <CiInstagram />
                    </span>
                    </span>
                </div>
                <div className="foot__card">
                    <br />
                    <ul className='foot__ul'>
                        <li><h3>Курсы</h3></li>
                        <li>Работотехника</li>
                        <li>Английский для взрослых</li>
                        <li>Английский для детей</li>
                        <li>Шахмат</li>
                        <li>Живопись</li>
                    </ul>
                </div>
                <div className="foot__card">
                    <br />
                <ul className='foot__ul'>
                        <li><h3>Контакты</h3></li>
                        <li>Телеграм</li>
                        <li>Инстаграм</li>
                        <li>Ютюб</li>
                    </ul>
                </div>
            </div>
            <div className="footer__bottom">
                <p>© 2000-2021, All rights reserved</p>
            </div>

        </div>
      
    </div>
  )
}

export default Footer
