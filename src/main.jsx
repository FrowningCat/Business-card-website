import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './main.css';

const root = document.getElementById('root');

ReactDOM.createRoot(root).render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
);
