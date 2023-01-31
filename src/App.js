import Creation from './home/creations/creation';
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
    </>
  );
}

export default App;
