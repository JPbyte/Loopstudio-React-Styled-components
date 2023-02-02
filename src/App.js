import Creation from './home/creations/creation';
import { Footer } from './home/footer/footer';
import Home from './home/home';
import Hero from './home/section-hero/hero';
import GlobalStyle from './styles/GlobalStyle';


function App() {
  return (
    <>
      <GlobalStyle/>
      <Home/>
      <Hero/>
      <Creation/>
      <Footer />
    </>
  );
}

export default App;
