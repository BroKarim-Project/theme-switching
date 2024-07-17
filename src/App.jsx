import Header from './components/site-header';
import HeroBanner from './components/hero-banner';
import { ThemeProvider } from './context/theme';

function App() {
  return (
    <>
      <ThemeProvider>
        <div className='bg-bgColor min-h-screen overflow-y-hidden'>
          <Header />
          <HeroBanner />
        </div>
      </ThemeProvider>
    </>
  );
}

export default App;
