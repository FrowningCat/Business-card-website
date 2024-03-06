import { useState, useEffect } from 'react';
import { Route, Router, Routes } from 'react-router-dom';
import Items from './Items/Items';
import CertainItems from './CertainItems/CertainItems';
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
        </div>
    );
}
