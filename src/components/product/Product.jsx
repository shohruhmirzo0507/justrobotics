import React from 'react'
import "./Product.css"
import { GrLinkNext } from "react-icons/gr";
import prodPhoto1 from "../../assets/pre1.png"
import prodPhoto2 from "../../assets/pre2.png"
import prodPhoto3 from "../../assets/pre3.png"
import prodPhoto4 from "../../assets/pre4.png"
import prodPhoto5 from "../../assets/pre5.png"
import Sweap from '../sweap/Sweap';


function Product() {
  return (
    <div>
      <div className="product">
        <h1 className="prod__title">Авторские кусы <br /> от JustRobotics</h1>
        <div className="prod__main">
          <div className="prod__box">
            <img src={prodPhoto1} alt="" />
            <br />
            <h1>Робототехника</h1>
            <button className='prod__btn'>Подробнее о кусе <GrLinkNext />
            </button>
          </div>
          <div className="prod__box">
            <img src={prodPhoto2} alt="" />
            <br />
            <h1>Живопись для <br /> детей</h1>
            <button className='prod__btn'>Подробнее о кусе <GrLinkNext />
            </button>
          </div>
          <div className="prod__box">
            <img src={prodPhoto3} alt="" />
            <br />
            <h1>Живопись для взрослых</h1>
            <button className='prod__btn'>Подробнее о кусе <GrLinkNext />
            </button>
          </div>
          <div className="prod__box">
            <img src={prodPhoto4} alt="" />
            <br />
            <h1>Английский язык <br /> для детей</h1>
            <button className='prod__btn'>Подробнее о кусе <GrLinkNext />
            </button>
          </div>
          <div className="prod__box">
            <img src={prodPhoto5} alt="" />
            <br />
            <h1>Шахмат</h1>
            <button className='prod__btn'>Подробнее о кусе <GrLinkNext />
            </button>
          </div>
        </div>

        <div className="prod__sweap">
          <h1>отзывы</h1>
          <br />
          <Sweap />
        </div>

      </div>



    </div>
  )
}

export default Product
