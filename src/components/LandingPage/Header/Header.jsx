import I from '../../../assets/img/I.jpeg';
import './header.css';

export default function Header() {
    return (
        <div className="header">
            <div className="header__textBlock">
                <span className="header__textBlock__info">
                    <p className="header__textBlock__info__topTitle">
                        Programmer | Frontend developer
                    </p>
                    <h3 className="header__textBlock__info__title">
                        React programmer
                    </h3>
                    <p className="header__textBlock__info__aboutMe">
                        Добрый день. Ищу работу на позицию frontend developer.
                        <b>
                            {' '}
                            Трудолюбивый, коммуникативный, трудностей не боюсь)
                        </b>
                        <br />
                        <br />
                        Ищу копанию, в которой буду совершенствоваться и расти
                        как специалист.
                        <br />
                        <br />С удовольствием отвечу на все интересующие
                        вопросы)
                    </p>
                </span>
                <span className="header__textBlock__listOfSocialNetworks">
                    <h4 className="header__textBlock__listOfSocialNetworks__title">
                        Список социальных сетей
                    </h4>
                    <div className="header__textBlock__listOfSocialNetworks__link">
                        <a
                            href="https://vk.com/id300779486"
                            className="a"
                            target="_blank"
                        >
                            Vk
                        </a>
                        |
                        <a
                            href="https://t.me/Frowning_Cat"
                            className="a"
                            target="_blank"
                        >
                            Telegram
                        </a>
                        |
                        <a
                            href="https://github.com/FrowningCat?tab=repositories"
                            className="a"
                            target="_blank"
                        >
                            Github
                        </a>
                        |
                        <a
                            href="mailto:vsavinkov60@gmail.com"
                            className="a"
                            target="_blank"
                        >
                            vsavinkov60@gmail.com
                        </a>
                    </div>
                </span>
            </div>
            <img
                src={I}
                alt="Владислав Савинков"
                className="header__avatar"
            ></img>
        </div>
    );
}
