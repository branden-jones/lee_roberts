import './App.css';
// pages
import Home from './components/pages/Home'; 
import About from './components/pages/About'; 
import NavBar from './components/NavBar';
import ConnectCard from './components/ConnectCard';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

const myTheme = createTheme({
  palette: {
    primary: {
      light: '#347055',
      main: '#024D2B',
      dark:'#01351e'
    },
    secondary: {
      dark: '#b28900',
      main: '#ffc400',
      light: '#ffcf33'
    }
  }
  });




function App() {
  return (
    <ThemeProvider theme={myTheme}>
      <NavBar />
      <BrowserRouter>
        <main>
          <Routes>
            <Route index element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/contact' element={<ConnectCard />} />
          </Routes>
        </main>
      </BrowserRouter>
    </ThemeProvider>
    
  );
}

export default App;
