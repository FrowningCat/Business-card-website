import { useState, useEffect } from 'react';
import { Route, Router, Routes } from 'react-router-dom';
import Items from './Items/Items';
import CertainItems from './CertainItems/CertainItems';
import chevron from '../../../assets/img/chevron.png';
import clipboard from '../../../assets/img/clipboard.png';
import './main.css';

export default function Header() {
    const [items, setItems] = useState([]);

    const f = async () => {
        const res = await fetch('https://reqres.in/api/users/');
        const json = await res.json();
        setItems(json.data);
    };

    useEffect(() => {
        f();
    }, []);

    return (
        <div className="main">
            <div className="main__examplesOfWorksBlock">
                <h5 className="main__examplesOfWorksBlock__title">
                    Последнии работы
                </h5>
                <div className="main__examplesOfWorksBlock__listProducts">
                    <Routes>
                        <Route
                            path="/items/:id"
                            element={<CertainItems items={items} />}
                        ></Route>
                        <Route
                            path="/"
                            element={<Items items={items} />}
                        ></Route>
                    </Routes>
                </div>
            </div>
            <div className="main__education">
                <h5 className="main__education__title">Образование</h5>
                <div className="main__education__faqDetails">
                    <details>
                        <summary>
                            <p>
                                Московский государственный
                                психолого-педагогический университет
                            </p>
                            <img
                                src={chevron}
                                alt="chevron"
                                className="chevron link"
                            />
                        </summary>
                        <p>2018-2022</p>
                        <p>
                            Прикладная информатика / Информационные технологии
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Nesciunt odio nobis ratione, minus impedit
                            debitis quam facere reiciendis perspiciatis cum
                            iusto placeat culpa accusantium dolores harum ab
                            totam pariatur soluta. Nulla, corrupti? Repudiandae
                            perspiciatis aliquam similique voluptas. Iure,
                            officiis deleniti.
                        </p>
                    </details>
                    <details>
                        <summary>
                            <p>GeekBrains</p>
                            <img
                                src={chevron}
                                alt="chevron"
                                className="chevron link"
                            />
                        </summary>
                        <p>2020-2022</p>
                        <p>Веб разработчик / Пакет мастер</p>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Nesciunt odio nobis ratione, minus impedit
                            debitis quam facere reiciendis perspiciatis cum
                            iusto placeat culpa accusantium dolores harum ab
                            totam pariatur soluta. Nulla, corrupti? Repudiandae
                            perspiciatis aliquam similique voluptas. Iure,
                            officiis deleniti.
                        </p>
                    </details>
                    <details>
                        <summary>
                            <p>Udemy</p>
                            <img
                                src={chevron}
                                alt="chevron"
                                className="chevron link"
                            />
                        </summary>
                        <p>2021</p>
                        <p>
                            Веб разработка - с нуля до профессионала. Full Stack
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Nesciunt odio nobis ratione, minus impedit
                            debitis quam facere reiciendis perspiciatis cum
                            iusto placeat culpa accusantium dolores harum ab
                            totam pariatur soluta. Nulla, corrupti? Repudiandae
                            perspiciatis aliquam similique voluptas. Iure,
                            officiis deleniti.
                        </p>
                    </details>
                </div>
            </div>
            <div className="main__education">
                <h5 className="main__education__title">Цели и планы</h5>
                <div className="main__education__faqDetails">
                    <details>
                        <summary>
                            <p>Развивать свой сайт про исторических деятелей</p>
                            <img
                                src={chevron}
                                alt="chevron"
                                className="chevron link"
                            />
                        </summary>
                        <p>
                            Это довольно большой проект целю которого являться
                            создание платформы, где пользователь сможет
                            ознакомиться с историческими деятелями и посмотреть
                            на них с другой стороны
                            <br />
                            <br />
                            Но сейчас он имеет не финальный свой вид, так я
                            планирую изменить:
                            <ul>
                                <li>
                                    Создание страниц со статьями, так планиру
                                    это делат через react-router-dom и работу с
                                    json файлами,
                                </li>
                                <li>Доработать адаптивные возможности,</li>
                                <li>
                                    Изменить цветовую гамму, да и в принципе
                                    изменить общий стиль,
                                </li>
                                <li>Произвести рефакторинг код.</li>
                            </ul>
                        </p>
                    </details>
                    <details>
                        <summary>
                            <p>
                                Сайт для игры Heroes of Might and Magic III:
                                Horn of the Abyss
                            </p>
                            <img
                                src={chevron}
                                alt="chevron"
                                className="chevron link"
                            />
                        </summary>
                        <p>
                            Хочу сделать удобный сайт, во всех смыслах этого
                            слова, где пользователи смогут найти всю
                            интересующую их информацию. Так, например, они
                            смогут найти:
                            <ul>
                                <li>
                                    Подробную информацию про замки и существ,
                                </li>
                                <li>Стоимость охраны,</li>
                                <li>
                                    Подробную информацию про каждый популярный
                                    шаблон,
                                </li>
                                <li>Ссылки на блогеров по данной игре,</li>
                                <li>И подобную полезную информацию.</li>
                            </ul>
                        </p>
                    </details>
                    <details>
                        <summary>
                            <p>Сайт с подбором мемов по интересам</p>
                            <img
                                src={chevron}
                                alt="chevron"
                                className="chevron link"
                            />
                        </summary>
                        <p>
                            Так как у меня имеется довольно большая коллекция
                            мемов, на данный момент их более 3 тысяч, я подумал
                            что будет интересным оптом написать сайт где
                            ролтзоаателб будет показываться мем на основе его
                            вкусовых предпочтений.
                            <br />
                            <br />
                            Если брать более глобально, то хочеться создать
                            такой своеобразный аналог Netflix, только с мемами)
                        </p>
                    </details>
                </div>
            </div>
            <div className="main__softSkills">
                <h5 className="main__softSkills__title">
                    <span className="main__softSkills__title__text__notLit">
                        S
                    </span>
                    <span className="main__softSkills__title__text__notLit">
                        O
                    </span>
                    <span className="main__softSkills__title__text__notLit">
                        F
                    </span>
                    <span className="main__softSkills__title__text__notLit">
                        T
                    </span>
                    <span className="main__softSkills__title__text__sh">
                        &nbsp;&nbsp;S
                    </span>
                    <span className="main__softSkills__title__text__zero">
                        K
                    </span>
                    <span className="main__softSkills__title__text__sh">I</span>
                    <span className="main__softSkills__title__text__sh anim">
                        L
                    </span>
                    <span className="main__softSkills__title__text__sh">L</span>
                    <span className="main__softSkills__title__text__zero">
                        S
                    </span>
                </h5>
                <div className="main__softSkills__listSkills">
                    <div className="main__softSkills__listSkills__explanation">
                        <div className="main__softSkills__listSkills__explanation__clipboard">
                            <img src={clipboard} alt="clipboard" />
                        </div>
                        <div className="main__softSkills__listSkills__explanation__title">
                            Frontend
                        </div>
                        <div className="main__softSkills__listSkills__explanation__text">
                            <p>HTML5</p>
                            <p>SCC3 / Sass / Scss</p>
                            <p>JavaScript</p>
                            <p>TypeScript</p>
                            <p>React</p>
                            <p>Next.js</p>
                            <p>Node.js</p>
                        </div>
                    </div>
                    <div className="main__softSkills__listSkills__explanation">
                        <div className="main__softSkills__listSkills__explanation__clipboard">
                            <img src={clipboard} alt="clipboard" />
                        </div>
                        <div className="main__softSkills__listSkills__explanation__title">
                            Bekend
                        </div>
                        <div className="main__softSkills__listSkills__explanation__text">
                            <p>PostgreSQL</p>
                            <p>Python</p>
                        </div>
                    </div>
                    <div className="main__softSkills__listSkills__explanation">
                        <div className="main__softSkills__listSkills__explanation__clipboard">
                            <img src={clipboard} alt="clipboard" />
                        </div>
                        <div className="main__softSkills__listSkills__explanation__title">
                            Другое
                        </div>
                        <div className="main__softSkills__listSkills__explanation__text">
                            <p>ООП</p>
                            <p>Figma</p>
                            <p>Алгоритмы</p>
                            <p>VirtualBox</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
