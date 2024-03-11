import { Route, Routes } from 'react-router-dom';
import ExamplesOfWorks from './Items/ExamplesOfWorks';
import WorkExperienceFront from './Items/WorkExperienceFront';
import WorkExperienceOther from './Items/WorkExperienceOther';
import chevron from '../../../assets/img/chevron.png';
import clipboard from '../../../assets/img/clipboard.png';
import websityHistory from '../../../assets/img/websiteHistory.png';
import websityLanding from '../../../assets/img/websiteLanding.png';
import websity404 from '../../../assets/img/website404.png';
import websityGame from '../../../assets/img/websiteGame.png';
import websityList from '../../../assets/img/websiteList.png';
import websitySidebar from '../../../assets/img/websiteSidebar.png';
import './main.css';

export default function Header() {
    const examplesOfWorks = [
        {
            id: 1,
            title: 'History in personalities',
            content: 'Next.js',
            img: websityHistory,
            link: 'https://history-in-personalities-3d4vk9ab5-frowningcats-projects.vercel.app/',
        },
        {
            id: 2,
            title: 'Psychology tests',
            content: 'React (in development)',
            img: websityLanding,
            link: 'https://psychology-tests-9ea4d03qu-frowningcats-projects.vercel.app/',
        },
        {
            id: 3,
            title: 'Animated error404',
            content: 'html5/css3',
            img: websity404,
            link: 'https://frowningcat.github.io/Error404-on-html/',
        },
        {
            id: 4,
            title: 'Duck hunt game',
            content: 'html5/css3',
            img: websityGame,
            link: 'https://frowningcat.github.io/game-on-html-and-css/',
        },
        {
            id: 5,
            title: 'List products',
            content: 'React',
            img: websityList,
            link: 'https://list-products-5xmkx9mk4-frowningcats-projects.vercel.app/',
        },
        {
            id: 6,
            title: 'Sidebar',
            content: 'React',
            img: websitySidebar,
            link: 'https://sidebar-test-task-gold.vercel.app/',
        },
    ];

    const workExperienceFront = [
        {
            id: 1,
            title: 'Аэродиск',
            data: 'Июль 2023 — октябрь 2023',
            post: 'Junior front-end программист',
            content:
                'Участвовал в команде разработчиков над сайтом нового продукта компании. Отвечал следующие страницы: landing, authorization, profile и main на React, Next js + ts.',
        },
        {
            id: 2,
            title: 'iDigit',
            data: 'Май 2022 — июль 2022',
            post: 'Junior front-end программист',
            content:
                'Участвовал в команде разработчиков над проектом системы анализа простоев скважин, React.',
        },
    ];

    const workExperienceOther = [
        {
            id: 1,
            title: 'ООО АСК',
            data: 'Февраль 2021 — апрель 2021',
            post: 'Техник группы внедрения проектов АСОДУ',
            content:
                'Разработка мнемосхем в ПО Unifotmance Insight (Honeywell), привязка тегов БДРВ к шейпам, прогрузка мнемосхем в продуктивную среду.',
        },
    ];

    return (
        <div className="main">
            <div className="main__examplesOfWorksBlock">
                <h5 className="main__examplesOfWorksBlock__title">
                    Последнии работы
                </h5>
                <div className="main__examplesOfWorksBlock__listProducts">
                    <Routes>
                        <Route
                            path="/"
                            element={
                                <ExamplesOfWorks items={examplesOfWorks} />
                            }
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
                        <p>Lorem.</p>
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
                        <p>Frontend-разработчик с нуля до Middle</p>
                        <p>
                            На{' '}
                            <a
                                href="https://gb.ru/geek_university/developer/programmer/frontend/master"
                                className="a"
                                target="_blank"
                            >
                                данном куре
                            </a>{' '}
                            я приобрел знания в следующих дисциплинах:
                            <ul>
                                <li>
                                    JavaScript
                                    <ul>
                                        <li>ООП в JavaScript,</li>
                                        <li>
                                            Циклы, массивы, структуры данных,
                                        </li>
                                        <li>Асинхронные запросы,</li>
                                        <li>Регулярные выражения.</li>
                                    </ul>
                                </li>
                                <li>Работа с алгоритмами</li>
                                <li>
                                    React
                                    <ul>
                                        <li>Жизненный цикл компонента,</li>
                                        <li>Children. Роутинг в React,</li>
                                        <li>React-redux,</li>
                                        <li>API.</li>
                                    </ul>
                                </li>
                                <li>
                                    HTML5 и CSS3
                                    <ul>
                                        <li>Анимации</li>
                                        <li>Адаптив и Релетив</li>
                                        <li>Scss и Sass</li>
                                    </ul>
                                </li>
                                <li>TupeScript</li>
                                <li>SQL</li>
                                <li>Python</li>
                            </ul>
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
                            На{' '}
                            <a
                                href="https://www.udemy.com/course/web-full-stack/learn/practice/1069046?start=start-page#overview"
                                className="a"
                                target="_blank"
                            >
                                данном куре
                            </a>{' '}
                            я приобрел знания в следующих дисциплинах:
                            <ul>
                                <li>JavaScript</li>
                                <li>Работа с алгоритмами</li>
                                <li>React</li>
                                <li>HTML5 и CSS3</li>
                                <li>TupeScript</li>
                                <li>MySQL</li>
                                <li>Python</li>
                                <li>PHP</li>
                            </ul>
                        </p>
                    </details>
                </div>
            </div>
            <div className="main__workExperience">
                <h5 className="main__workExperience__title">Опыт работы</h5>
                <div className="main__workExperience__list">
                    <div className="main__workExperience__list__frontEnd">
                        <Routes>
                            <Route
                                path="/"
                                element={
                                    <WorkExperienceFront
                                        items={workExperienceFront}
                                    />
                                }
                            ></Route>
                        </Routes>
                    </div>
                    <div className="main__workExperience__list__other">
                        <Routes>
                            <Route
                                path="/"
                                element={
                                    <WorkExperienceOther
                                        items={workExperienceOther}
                                    />
                                }
                            ></Route>
                        </Routes>
                    </div>
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
