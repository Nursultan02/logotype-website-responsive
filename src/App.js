import './App.css';
import {FirstSection, NavBar, Services, AboutSection, ConsultationPage, Footer} from "./components";

const App = () => {
  return (
    <div className="app">
        <NavBar />
        <FirstSection />
        <Services />
        <AboutSection />
        <ConsultationPage />
        <Footer />
    </div>
  );
}

export default App;
