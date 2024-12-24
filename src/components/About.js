import React from 'react';
import '../styles/About.css'; 

const About = () => {
  return (
    <div className="about">
      <h1>معلومات عنا</h1>
      <p>هذا تطبيق لاستكشاف القرآن الكريم، يمكنك التنقل بين السور والآيات بسهولة.</p>
      <section className="app-info">
        <h2>مميزات التطبيق</h2>
        <ul>
          <li>استعراض السور والآيات بسهولة.</li>
          <li>بحث سريع ودقيق عن السور والآيات.</li>
          <li>إمكانية حفظ الآيات والسور المفضلة للوصول السريع.</li>
          <li>واجهة مستخدم بسيطة وسهلة الاستخدام.</li>
        </ul>
      </section>
      <section className="creator-info">
        <h2>المطور</h2>
        <p>تم إنشاء هذا التطبيق بواسطة محمود الترابي</p>
        <a href="https://matmood.netlify.app" target="_blank" rel="noopener noreferrer">Mahmood AlTurabi</a>
      </section>
    </div>
  );
};

export default About;
