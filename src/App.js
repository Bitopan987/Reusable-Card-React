import React from 'react';
import CardComponent from './components/CardComponent';

function App() {
  return (
    <>
      <CardComponent />
      <CardComponent
        closingDate="05/01/2021,09:00am"
        cardName="TaskBoard"
        completedTask={4}
        totalTask={6}
      />
    </>
  );
}

export default App;
