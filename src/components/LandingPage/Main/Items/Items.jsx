import { Link } from 'react-router-dom';

export default function Items({ items }) {
    return (
        <>
            {items.length &&
                items.map((item) => {
                    return (
                        <>
                            <Link to={`${item.link}`} target="_blank">
                                <div
                                    className="main__examplesOfWorksBlock__listProducts__specificProduct"
                                    key={item.id}
                                >
                                    <div>
                                        <img
                                            className="main__examplesOfWorksBlock__listProducts__specificProduct__img"
                                            key={item.img}
                                            src={item.img}
                                        />
                                    </div>
                                    <p className="main__examplesOfWorksBlock__listProducts__specificProduct__name">
                                        {item.title}
                                    </p>
                                    <p className="main__examplesOfWorksBlock__listProducts__specificProduct__language">
                                        {item.content}
                                    </p>
                                </div>
                            </Link>
                        </>
                    );
                })}
        </>
    );
}
