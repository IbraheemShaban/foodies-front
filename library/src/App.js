import './App.css';
import Books from './components/Books';
import Nav from './components/Nav';
import BookDetails from './components/BookDetails';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Books />} />
        <Route path="/:bookSlug" element={<BookDetails />} />
      </Routes>
    </div>
  );
}

export default App;
