import { Link } from 'react-router-dom';

export default function Items({ items }) {
    return (
        <>
            {items.length &&
                items.map((item) => {
                    return (
                        <>
                            <Link to={`/items/${item.id}`}>
                                <div
                                    className="main__examplesOfWorksBlock__listProducts__specificProduct"
                                    key={item.id}
                                >
                                    <div>
                                        <img
                                            className="main__examplesOfWorksBlock__listProducts__specificProduct__img"
                                            key={item.avatar}
                                            src={item.avatar}
                                        />
                                    </div>
                                    <p className="main__examplesOfWorksBlock__listProducts__specificProduct__name">
                                        {item.first_name}
                                    </p>
                                    <p className="main__examplesOfWorksBlock__listProducts__specificProduct__language">
                                        {item.first_name}
                                    </p>
                                </div>
                            </Link>
                        </>
                    );
                })}
        </>
    );
}
