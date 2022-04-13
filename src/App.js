import  Header from '../src/components/Header/Header';
import Nav from'../src/components/Nav/nav';
import Landing from './components/Landing/Landing';

import './index.css';

function App() {
  return (
    <div className="App">
 <Header />
 <Nav></Nav>
 <Landing></Landing>
    </div>
  );
}

export default App;
