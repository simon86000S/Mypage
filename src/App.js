import  Header from '../src/components/Header/Header';
import Nav from'../src/components/Nav/Nav';
import Landing from './components/Landing/Landing';
import Footer from './components/Footer/Footer';


import './index.css';

function App() {
  return (
    <div className="App">
 <Header />
 <Nav></Nav>
 <Landing></Landing>
 <Footer/>
    </div>
  );
}

export default App;
