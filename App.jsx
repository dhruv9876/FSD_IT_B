import { Link } from 'react-router-dom';

const App = () => {
    return (
        <div>
            <nav>
                <Link to="/">Home</Link> | 
                <Link to="/counter">Counter</Link> | 
                <Link to="/refex">Refex</Link> | 
                <Link to="/stopwatch">Stopwatch</Link>
            </nav>
            <Routes>
                <Route path="/" element={<h1>Home Page</h1>} />
                <Route path="/counter" element={<h1>Counter App</h1>} />
                <Route path="/refex" element={<Refex />} />
                <Route path="/stopwatch" element={<h1>Stopwatch App</h1>} />
                <Route path="*" element={<h1>No Page Available</h1>} />
            </Routes>
        </div>
    );
};

export default App;
