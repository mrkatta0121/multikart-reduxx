
import './App.css';
import Nav from './components/Nav';
import Home from './components/Home';
import Footer from './components/footer';
import Img from './components/img';
import Collection from './components/collection';
import Two from './components/two';
import Collections from './components/collection2';
import Instagram from './components/instagram';
import Special from './components/specialProducts';
import Model from './components/modal';
import SideIcons from './components/sideicons';






function App() {



  return (
    <div className="App">
      <Nav />
      <Home />
      <Model/>
      <SideIcons/>
      <Two />
      <Collection />
      <Collections />
      <Special/>
    <Instagram/>
      <Img />

      <Footer />
    </div>
  );
}

export default App;
