import React from 'react';

const SongCard = ({ data, onReset }) => {
  const cardStyle = {
    backgroundColor: data.color,
    backgroundImage: data.bgImage ? `url(${data.bgImage})` : 'none',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    color: data.textColor,
    background: data.gradientColor1 && data.gradientColor2 ? 
                `linear-gradient(to right, ${data.gradientColor1}, ${data.gradientColor2})` : 
                data.color
  };

  return (
    <div className="song-card" style={cardStyle}>
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
