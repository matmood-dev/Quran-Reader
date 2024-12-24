import React from 'react';
import { Link } from 'react-router-dom';
import surahData from '../data/surahData';
import '../styles/SurahList.css';

const SurahList = () => {
  const arabicNumbers = (number) => {
    const arabicDigits = ['٠', '١', '٢', '٣', '٤', '٥', '٦', '٧', '٨', '٩'];
    return number.toString().split('').map(digit => arabicDigits[Number(digit)]).join('');
  };

  return (
    <>
    <div className="surah-list">
      <h1>القرآن الكريم</h1>
      <ul>
        {surahData.map(surah => (
          <li key={surah.number}>
            <Link to={`/surah/${surah.startPage}`}>
              <span className="surah-number">{arabicNumbers(surah.number)}</span> {surah.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
    </>
  );
};

export default SurahList;
