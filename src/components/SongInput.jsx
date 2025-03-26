import React, { useState } from 'react';

const SongInput = ({ onSubmit }) => {
  const [lyrics, setLyrics] = useState('');
  const [translation, setTranslation] = useState('');
  const [title, setTitle] = useState('');
  const [artist, setArtist] = useState('');
  const [duration, setDuration] = useState('');
  const [color, setColor] = useState('#ffffff');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ lyrics, translation, title, artist, duration, color });
  };

  return (
    <form className="song-input" onSubmit={handleSubmit}>
      <input type="text" placeholder="가사 한 줄" value={lyrics} onChange={(e) => setLyrics(e.target.value)} required />
      <input type="text" placeholder="번역 (선택)" value={translation} onChange={(e) => setTranslation(e.target.value)} />
      <input type="text" placeholder="곡명" value={title} onChange={(e) => setTitle(e.target.value)} required />
      <input type="text" placeholder="아티스트" value={artist} onChange={(e) => setArtist(e.target.value)} required />
      <input type="text" placeholder="곡 길이 (예: 3:45)" value={duration} onChange={(e) => setDuration(e.target.value)} required />
      <input type="color" value={color} onChange={(e) => setColor(e.target.value)} />
      <button type="submit">제출</button>
    </form>
  );
};

export default SongInput;