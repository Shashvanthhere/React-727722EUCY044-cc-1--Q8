import React from 'react';
import ThemeSwitching from './Q3';

const App = () => {
  const themes = [
    { background: '#282c34', text: '#61dafb' },
    { background: '#61dafb', text: '#282c34' },
  ];

  return (
    <div>
      <ThemeSwitching themes={themes} />
    </div>
  );
};

export default App;
