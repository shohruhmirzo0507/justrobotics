import React, { useState } from 'react';
import "./Lead.css";
import iconPhoto1 from "../../assets/gro1.png";
import iconPhoto2 from "../../assets/gro2.png";
import iconPhoto3 from "../../assets/gro3.png";

function Lead() {
    const [loading, setLoading] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);

        const form = e.target;
        const name = form.name.value;
        const phone = form.phone.value;
        const course = form.course.value;
        const age = form.age.value;

        fetch("https://script.google.com/macros/s/AKfycbw7-x1iVGGWu8Hn-NavicD36ULA8myduJPX1fWu3S1QjvMj_V95Z7veL7HvWvbtFNqm7w/exec", {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
            },
            body: new URLSearchParams({
                name,
                phone,
                course,
                age,
            }),
        })
        .then(() => {
            alert("✅ Ma'lumot yuborildi!");
            form.reset();
            setLoading(false);
        })
        .catch((err) => {
            alert("❌ Xatolik yuz berdi: " + err);
            setLoading(false);
        });
    };

    return (
        <div>
            <div className="lead">
                <h1 className="lead__title">получите бесплатный <br /> первый урок</h1>

                <form className='lead__form' onSubmit={handleSubmit}>
                    <input type="text" name="name" placeholder='Ваше имя' required />
                    <input type="tel" name="phone" placeholder='Номер телефона' required />
                    <select className='lead__select' name="course" required>
                        <option value="">Выберете курс</option>
                        <option value="Работотехника">Работотехника</option>
                        <option value="Живопись для взрослых">Живопись для взрослых</option>
                        <option value="Живопись для детей">Живопись для детей</option>
                        <option value="Шахмат">Шахмат</option>
                        <option value="Английский">Английский</option>
                    </select>
                    <input className='lead__age' name="age" type="number" placeholder='Возраст' required />
                    
                    <button className='lead__btn' type="submit" disabled={loading}>
                        {loading ? "Отправка..." : "получить"}
                    </button>
                </form>

                <div className="lead__loc">
                    <div className="loc__btn">
                        <button>Филиал Ц4</button>
                        <button> Филиал Беруни</button>
                    </div>
                    <br />
                    <div className="loc__add">
                        <span> <img src={iconPhoto1} alt="" />  Адрес Орьентир</span>
                        <span> <img src={iconPhoto2} alt="" />  График работы</span>
                        <span> <img src={iconPhoto3} alt="" />  Номера телефонов</span>
                    </div>
                </div>

                <iframe className='lead__iframe' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2996.2025181696263!2d69.19185057643728!3d41.32620939978717!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b0050b316fb%3A0xc3887c2649ada001!2sBeruniy%20metro!5e0!3m2!1sru!2s!4v1747212938154!5m2!1sru!2s" ></iframe>
            </div>
        </div>
    );
}

export default Lead;
