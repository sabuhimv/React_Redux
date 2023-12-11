import Home from './pages/Home';
import './App.css';
// import './index.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import PageContainer from './containers/PageContainer';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Detail from './pages/Detail';

function App() {
  return (
    <div>
      <PageContainer>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path={"/"} element={<Home />} />
            <Route path={"/products/:id"} element={<Detail />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </PageContainer>

    </div>
  );
}

export default App;
