import React from 'react';
import { useTranslation } from 'react-i18next';
import {  LanguageContext } from './store/LanguageContext';

function App() {
  const { t } = useTranslation();
  const { language, changeLanguage } = React.useContext(LanguageContext);

  return (
    <div className="App">
      <header className="App-header">
        <h1>{t('title')}</h1>
        <p>{t('greeting')}</p>
        <button onClick={() => {changeLanguage(language === 'tr' ? 'en' : 'tr');
        console.log('Test',language)}}>
          {language === 'en' ? 'Switch to Turkish' : 'Switch to English'}
        </button>
      </header>
    </div>
  );
}



export default App;