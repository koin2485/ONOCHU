import React from 'react';

const SongCard = ({ data, onReset }) => {
  return (
    <div className="song-card" style={{ backgroundColor: data.color }}>
      <div className="lyrics-section">
        <p className="lyrics">{data.lyrics}</p>
        {data.translation && <p className="translation">{data.translation}</p>}
        <p className="duration">{data.duration}</p>

      </div>
      <hr />
      <div className="info-section">
        <p className="title">{data.title}</p>
        <p className="artist">{data.artist}</p>
      </div>
    </div>
  );
};

export default SongCard;