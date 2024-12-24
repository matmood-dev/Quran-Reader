import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Home.css'; 

const Home = () => {
  return (
    <>
    <div className="home">
      <section className="hero">
        <h1>مرحبا بكم في تطبيق نور على نور</h1>
        <p>اكتشف السور والآيات، واستمتع بتجربة قراءة مميزة وسهلة.</p>
        <Link to="/surahlist" className="cta-button">ابدأ الآن</Link>
      </section>
      <section className="features">
        <h2>ميزات التطبيق</h2>
        <div className="feature-grid">
          <div className="feature-item">
            <h3>قراءة سلسة</h3>
            <p>تصفح القرآن الكريم بسهولة بمساعدة ميزات تفاعلية.</p>
          </div>
          <div className="feature-item">
            <h3>بحث سريع</h3>
            <p>ابحث عن السور بسرعة باستخدام أداة البحث الفعالة.</p>
          </div>
        </div>
      </section>
    </div>
    </>
  );
};

export default Home;
