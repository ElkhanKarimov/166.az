// import logo from './logo.svg';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Avtopark from './components/Avtopark/Avtopark';
import Comments from './components/Comments/Comments';
import Media from './components/Media/Media';
import Partniyorlar from './components/Partniyorlar/Partniyorlar';
import Sale from './components/Sale/Sale';
import Xerite from './components/Xerite/Xerite';
import Xidmetler from './components/Xidmetler/Xidmetler';
import Xidmetlerimiz from './components/Xidmetlerimiz/Xidmetlerimiz';
import Footer from './layout/Footer/Footer';
import Navbar from './layout/Navbar/Navbar';
import { ROUTES } from './routes/route';

const router = createBrowserRouter(ROUTES)

function App() {
  return (
    <div className="App">
      <RouterProvider router={router}/>
      {/* <Navbar/>
      <Xidmetlerimiz/>
      <Partniyorlar/>
      <Xidmetler/>
      <Avtopark/>
      <Media/>
      <Comments/>
      <Xerite/>
      <Sale/>
      <Footer/> */}
    </div>
  );
}

export default App;
