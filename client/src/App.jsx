import { Switch, Route } from 'react-router-dom';
import Main from './views/Main';
import Results from './views/Results';
import Header from './components/Header'
import Footer from './components/Footer';
import { useState } from 'react'

import './App.css';

function App() {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    // 👇️ toggle
    setIsActive(true);

  };
  return (
    <div className="App">

      <Switch>

        <Route exact path="/">
          <Header />
          <Main />
          <Footer />
        </Route>


        <Route exact path="/submitted-form">
          <Header />
          <Results />
          <Footer />
        </Route>


      </Switch>
    </div>
  );
}

export default App;
