import React from 'react';
import { render } from 'react-dom';

const App = () => {
  return (
    <div>
      <h3>Perkele helvetti saatana</h3>
      <p>пиздец иди нахуй сука блять</p>
    </div>
  );
}

render(<App />, document.getElementById('app'));