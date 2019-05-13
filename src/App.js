import React from 'react';
import './App.css';

import Title from './components/Title';
import Results from './components/Results';
import Form from './components/Form';

class App extends React.Component{
  render() {
    return (
      <div>
        <p>Kia Ora World
          <Title />
          <Form />
          <Results />
        </p>
      </div>
    )
  }
}

export default App;
