import { Switch, Route } from 'react-router-dom';
import Main from './views/Main';
import Results from './views/Results';
import Header from './components/Header'
import Footer from './components/Footer';
import { useState } from 'react'

import './App.css';

function App() {

  const [header, setHeader] = useState(false);
  const [footer, setFooter] = useState(false);

  function handleHeader() {
    setHeader(true);
    console.log(header)
    console.log("this toggle for header worked from parent")
  }

  function handleFooter() {
    setFooter(true);
    console.log(footer)
    console.log("this toggle for footer worked from parent")
  }

  return (
    <div className="App">

      <Switch>

        <Route exact path="/">
          <Header header={header} />
          <Main header={header} footer={footer} onToggleHeader={handleHeader} onToggleFooter={handleFooter} />
          <Footer footer={footer} />
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
