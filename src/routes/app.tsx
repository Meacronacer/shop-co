import { Routes, Route } from 'react-router-dom'
import MainPage from '../pages/mainPage/mainPage';

const App = () => {
    return (
        <Routes>
            <Route path='/' element={<MainPage />} />
        </Routes>
    );
}
 
export default App;