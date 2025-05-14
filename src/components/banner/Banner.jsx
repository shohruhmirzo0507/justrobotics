import React from 'react'
import "./Banner.css"
import roboPhoto from "../../assets/robo.png"

function Banner() {
    return (
        <div >
            <div className="banner">
                <div className="banner__text">
                    <h1>JustRobotics</h1>
                    <h3>твой проводник в мир технологий и искусства</h3>
                    <br />
                    <p>получите бесплатное первое занятие</p>
                    <br />
                    <button className='banner__btn'>Перейти к курсам</button>
                </div>
                <img className='banner__img' src={roboPhoto} alt="" />

            </div>
            <div className="banner__main">
                <div className="banner__card">
                    <h1>300+</h1>
                    <p>Довольных <br /> студентов</p>
                </div>
                <div className="banner__card">
                    <h1>25+</h1>
                    <p>Преподавателей</p>
                </div>
                <div className="banner__card">
                    <h1>60+</h1>
                    <p>групп</p>
                </div>
            </div>
            <div className="banner__parag">
                <p><b>JustRobotics</b> – это современный учебный центр, специализирующийся на технологиях, искусстве и образовании. Мы предоставляем комфортную и поддерживающую среду для развития талантов и навыков наших учеников. Команда высококвалифицированных преподавателей использует передовые методики и технологии, делая занятия интерактивными и увлекательными. Мы уделяем большое внимание индивидуальному подходу, помогая каждому ученику раскрыть свои способности и достичь успеха. <br />  <b className='place__b'>JustRobotics</b> – это сообщество увлеченных и целеустремленных людей, предлагающее не только учебные курсы, но и мероприятия, мастер-классы и конкурсы. Удобное расположение учебного центра обеспечивает легкий доступ для всех желающих.</p>
            </div>

        </div>
    )
}

export default Banner
