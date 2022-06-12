import './App.css';
import Header from './Header.js'
import Footer from './Footer.js'
import Stats from './Stats.js'

function App() {

  return (
    <div className="App">
        <Header className="Header"/>
        <Stats className="Quiz"/>
        <Footer/>
    </div>
  );
}

export default App;
