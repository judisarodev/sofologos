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

function App() {

  return (
    <PostsCategoriesProvider>
      <BrowserRouter>
        <BrandingBar />
        <Navbar />
        <Routes>
          <Route path='/' element={<HomeView/>} />
          <Route path='/about' element={<AboutUsView />} />
          <Route path='/login' element={<JwtProvider><SingIn /></JwtProvider>} />
          <Route path='/admin' element={<JwtProvider> <AdminView /></JwtProvider>} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </PostsCategoriesProvider>
  );
}

export default App;
