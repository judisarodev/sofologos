import './App.css';
import { BrandingBar } from './components/branding_bar';
import { Navbar } from './components/navbar';
import { Footer } from './components/footer';
import { BrowserRouter,  Routes,  Route} from "react-router-dom";
import { HomeView } from './views/home_view/index';
import { AboutUsView } from './views/about_us_view/index';
import { SingIn } from './views/sing_in_view/index';
import { AdminView } from './views/admin_view/index';
import { JwtProvider } from "./context/JwtProvider";
import { PostsCategoriesProvider } from './context/PostsCategoriesProvider';
import { useState } from 'react';
import { EditPostView } from './views/edit_post_view';
import { PostView } from './views/post_view';

function App() {
  return (
    <PostsCategoriesProvider>
      <JwtProvider>
      <BrowserRouter>
        <BrandingBar />
        <Navbar />
        <Routes>
          <Route path='/' element={<HomeView/>} />
          <Route path='/about' element={<AboutUsView />} />
          <Route path='/login' element={<SingIn />} />
          <Route path='/admin' element={ <AdminView />} />
          <Route path='/edit-post' element={ <EditPostView />} />
          <Route path='/post-view' element={ <PostView />} /> 
        </Routes>
        <Footer />
      </BrowserRouter>
      </JwtProvider>
    </PostsCategoriesProvider>
  );
}

export default App;
