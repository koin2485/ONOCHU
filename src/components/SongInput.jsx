import React, { useState } from 'react';

const SongInput = ({ onSubmit }) => {
  const [lyrics, setLyrics] = useState('');
  const [translation, setTranslation] = useState('');
  const [title, setTitle] = useState('');
  const [artist, setArtist] = useState('');
  const [duration, setDuration] = useState('');
  const [color, setColor] = useState('#ffffff');
  const [gradientColor1, setGradientColor1] = useState('#ff7e5f');
  const [gradientColor2, setGradientColor2] = useState('#feb47b');
  const [textColor, setTextColor] = useState('black');
  const [bgImage, setBgImage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ lyrics, translation, title, artist, duration, color, gradientColor1, gradientColor2, textColor, bgImage });
  };

  return (
    <form className="song-input" onSubmit={handleSubmit}>
      <input type="text" placeholder="가사 한 줄" value={lyrics} onChange={(e) => setLyrics(e.target.value)} required />
      <input type="text" placeholder="번역 (선택)" value={translation} onChange={(e) => setTranslation(e.target.value)} />
      <input type="text" placeholder="곡명" value={title} onChange={(e) => setTitle(e.target.value)} required />
      <input type="text" placeholder="아티스트" value={artist} onChange={(e) => setArtist(e.target.value)} required />
      <input type="text" placeholder="곡 길이 (예: 3:45)" value={duration} onChange={(e) => setDuration(e.target.value)} required />
      <div className='flex'>
      <input type="color" value={color} onChange={(e) => setColor(e.target.value)} />
      <input type="color" value={gradientColor1} onChange={(e) => setGradientColor1(e.target.value)} />
      <input type="color" value={gradientColor2} onChange={(e) => setGradientColor2(e.target.value)} />
      </div>
      <select value={textColor} onChange={(e) => setTextColor(e.target.value)}>
        <option value="white">흰색</option>
        <option value="black">검은색</option>
      </select>
      <input type="text" placeholder="배경 이미지 URL" value={bgImage} onChange={(e) => setBgImage(e.target.value)} />
      <button type="submit">제출</button>
    </form>
  );
};

export default SongInput;
