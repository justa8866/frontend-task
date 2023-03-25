import React, { FunctionComponent } from 'react';
import CreateColorForm from './CreateColorForm';
import DisplayColorForm from './DisplayColorForm';

const App: FunctionComponent = () => {
  return (
    <div className='App'>
      <CreateColorForm />
      <DisplayColorForm />
    </div>
  );
};

export default App;
