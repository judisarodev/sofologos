import { useState } from 'react';
import './App.css';
import { BrandingBar } from './components/branding_bar';
import { Navbar } from './components/navbar';
import { Footer } from './components/footer';
import { ViewContainer } from './views/view_container';

function App() {

  const [ page, setPage ] = useState({
    HOME: true, 
    ABOUT_US: false,
    USER: false
  });

  return (
    <>
    <BrandingBar />
    <Navbar page={page} setPage={setPage}/>
    <ViewContainer page={page}/>
    <Footer />
    </>
  );
}

export default App;
