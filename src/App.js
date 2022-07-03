import './App.css';
import HomePage from "./components/Home/home";
import Header from "./components/Header/header";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
      <Router>
        <div className="bg-white dark:bg-black transition-all">
          <main>
              <div className="absolute w-full right-0 top-0 z-50">
                <Header />
              </div>
              <HomePage />
            
          </main>
        </div>
      </Router>    
  );
}

export default App;
