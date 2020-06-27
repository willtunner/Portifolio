import React from 'react';
import './App.css';
import {Route} from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import Home from './components/index';
import Resume from "./components/Resume";
import Portifolio from './components/Portifolio';
import Contacts from './components/Contacts';
import Project1 from './projects/Project1';
import Project2 from './projects/projeto2';

function App() {
  return (
    <>
    <CssBaseline/>
      <Route exact path="/" component={Home} />{/** exact quer dizer que vai começar por ele */}
      <Route path="/resume" component={Resume} />
      <Route path="/portifolio" component={Portifolio} />
      <Route path="/contacts" component={Contacts} />
      <Route path="/project1" component={Project1} />
      <Route path="/project2" component={Project2} />
    </>  
  );
}

export default App;
