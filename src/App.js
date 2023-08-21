import './App.css';
// pages
import Home from './Pages/Home'; 
import About from './Pages/About'; 
import NavBar from './components/NavBar';
import ConnectCard from './components/ConnectCard';
import myTheme from './Themes/mainTheme';
import { ThemeProvider } from '@mui/material/styles';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <ThemeProvider theme={myTheme}>
      <NavBar />
      <BrowserRouter>
        <main>
          <Routes>
            <Route index element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/connect' element={<ConnectCard />} />
          </Routes>
        </main>
      </BrowserRouter>
    </ThemeProvider>
    
  );
}

export default App;
