import React, { useState } from 'react';
import SongInput from './components/SongInput';
import SongCard from './components/SongCard';
import './components/styles.css';

const App = () => {
  const [songData, setSongData] = useState(null);

  return (
    <div className="app-container">
      {!songData ? (
        <SongInput onSubmit={setSongData} />
      ) : (
        <SongCard data={songData} onReset={() => setSongData(null)} />
      )}
    </div>
  );
};

export default App;