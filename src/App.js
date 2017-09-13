import React, { Component } from 'react';
import './styles/App.css';

import Footer from './components/footer.js';
import Form from './components/form.js';
import Header from './components/header.js';
import NavBar from './components/navbar.js';
import Section from './components/section.js';



class App extends Component {
  render() {
    let actorsList = actors.map((person)=>
    return (
      <div className="App">
        <NavBar />
        <Header />
        <Section />
        <Form />
        <Footer />
      </div>
    );
  }
});
return (
  <div className = "list-group">
  {actorsList}
  </div>

);

export default App;
