import { useState } from 'react';
import './App.css';
import { BrandingBar } from './components/branding_bar';
import { Navbar } from './components/navbar';
import { Footer } from './components/footer';
import { ViewContainer } from './views/view_container';
import { PageProvider } from './context/PageContext';

function App() {

  return (
    <>
    <h1>Soy el admin</h1>
    <BrandingBar />

    <PageProvider>
      <Navbar />
      <ViewContainer/>
    </PageProvider>

    <Footer />
    </>
  );
}

export default App;
