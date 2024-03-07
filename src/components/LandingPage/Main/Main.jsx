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
                        <p>2020-2020</p>
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
                        <p>2020-2020</p>
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
                        <p>2020-2020</p>
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
                            Bekend
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
                            Другие
                        </div>
                        <div className="main__softSkills__listSkills__explanation__text">
                            <p>ООП</p>
                            <p>Figma</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
