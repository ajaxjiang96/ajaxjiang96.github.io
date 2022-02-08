import { Header } from './components/Header';
import { ExpSection } from './pages/home/ExpSection';
import { HomeSection } from './pages/home/HomeSection';
import { PortfolioSection } from './pages/home/PortfolioSection';

function App() {
  return (
    <div>
      <Header />
      <HomeSection />
      <PortfolioSection />
      <ExpSection />
    </div>
  );
}

export default App;
