import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import '../styles/AyahDisplay.css';
import surahData from '../data/surahData';

const arabicNumbers = (number) => {
  const arabicDigits = ['٠', '١', '٢', '٣', '٤', '٥', '٦', '٧', '٨', '٩'];
  return number.toString().split('').map(digit => arabicDigits[Number(digit)]).join('');
};

const AyahDisplay = () => {
  const { id } = useParams();
  const [surah, setSurah] = useState(null);
  const [imageSrc, setImageSrc] = useState('');
  const [pageNumber, setPageNumber] = useState(parseInt(id, 10));

  useEffect(() => {
    const surahFromPage = surahData.find(surah => pageNumber >= surah.startPage && pageNumber <= surah.endPage);
    if (surahFromPage) {
      setSurah(surahFromPage);
    }
    loadImage(pageNumber);
  }, [id, pageNumber]);

  const loadImage = (page) => {
    const paddedPageNumber = page.toString().padStart(3, '0');
    import(`../assets/pages/${paddedPageNumber}.png`)
      .then(image => setImageSrc(image.default))
      .catch(error => console.error('Error loading image:', error));
  };

  const handlePageChange = (event) => {
    setPageNumber(parseInt(event.target.value, 10));
  };

  const handleSurahChange = (event) => {
    const selectedSurah = surahData.find(surah => surah.number === parseInt(event.target.value, 10));
    setSurah(selectedSurah);
    setPageNumber(selectedSurah.startPage);
  };

  const goToPreviousPage = () => {
    if (pageNumber > 1) {
      setPageNumber(pageNumber - 1);
      loadImage(pageNumber - 1);
    }
  };

  const goToNextPage = () => {
    if (pageNumber < 604) {
      setPageNumber(pageNumber + 1);
      loadImage(pageNumber + 1);
    }
  };

  return (
    <div className="ayah-display">
      {surah && (
        <h1 className="surah-name">
          <span className="page-number-circle">{arabicNumbers(pageNumber)}</span> {surah.name}
        </h1>
      )}
      <div className="navigation-controls">
        <button className="nav-button" onClick={goToPreviousPage}>الصفحة السابقة</button>
        <select className="surah-select" value={surah ? surah.number : ''} onChange={handleSurahChange}>
          {surahData.map(surah => (
            <option key={surah.number} value={surah.number}>{surah.name}</option>
          ))}
        </select>
        <select className="page-select" value={pageNumber} onChange={handlePageChange}>
          {[...Array(604).keys()].map(num => (
            <option key={num + 1} value={num + 1}>{arabicNumbers(num + 1)}</option>
          ))}
        </select>
        <button className="nav-button" onClick={goToNextPage}>الصفحة التالية</button>
      </div>
      <div className="surah-image-container">
        {imageSrc && <img src={imageSrc} alt={`Page ${pageNumber}`} className="surah-image" />}
      </div>
      {pageNumber !== undefined && (
        <div className="page-number">
          <span>{arabicNumbers(pageNumber)}</span>
        </div>
      )}
    </div>
  );
};

export default AyahDisplay;
