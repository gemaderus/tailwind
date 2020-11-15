import Header from './components/header/Header';
import Hero from './components/hero/Hero';
import Cards from './components/cards/Cards';
import Footer from './components/footer/Footer';

import './styles/tailwind.output.css';

function App() {
  return (
    <div className="flex-col m-auto">
    <Header />
    <Hero />
    <Cards />
    <Footer />
  </div>
  );
}

export default App;
