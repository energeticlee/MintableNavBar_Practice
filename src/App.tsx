import React from 'react';
import './App.css';
import Nav from './Components/Nav';
import NavMediaSmall from './Components/subComponents/NavMediaSmall';
import NavMediaMobile from './Components/subComponents/NavMediaMobile';
import useWindowSize from "./Components/hooks/useWindowWidth"


function App() {
  // Usage
  const size = useWindowSize();

  return (
    <div className="App">
      {size.width > 1350 ? <Nav /> : size.width > 767 ?
        <NavMediaSmall /> : <NavMediaMobile />}
    </div>
  );
}

export default App;
