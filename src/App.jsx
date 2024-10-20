import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './pages/Navbar';
import HomePage from './pages/Homepage';
import Wishlist from './components/Wishlist'; // Make sure this path is correct

function App() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/Wishlist" element={<Wishlist />} />
            </Routes>
        </Router>
    );
}

export default App;
