import './App.css';
import { BrandingBar } from './components/branding_bar';
import { Navbar } from './components/navbar';
import { Footer } from './components/footer';
import { BrowserRouter,  Routes,  Route} from "react-router-dom";
import { HomeView } from './views/home_view/index';
import { AboutUsView } from './views/about_us_view/index';
import { SingIn } from './views/sing_in_view/index';
import { AdminView } from './views/admin_view/index';

function App() {

  return (
    <BrowserRouter>
      <BrandingBar />
      <Navbar />
      <Routes>
        <Route path='/' element={<HomeView/>} />
        <Route path='/about' element={<AboutUsView />} />
        <Route path='/login' element={<SingIn />} />
        <Route path='/admin' element={<AdminView />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  
  );
}

export default App;
