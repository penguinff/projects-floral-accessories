import { useState } from 'react'
import { useTranslation } from 'react-i18next'

import CustomButton from '../custom-button/CustomButton';
import { ReactComponent as GlobeIcon } from '../../assets/globe-icon.svg';

import styles from './language-selector.module.scss';

const languages = [
  {code: "en", lang: "English"},
  {code: "zh", lang: "中文"}
]

const LanguageSelector = () => {
  const {i18n} = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  }

  const [isShowLanguages, setIsShowLanguage] = useState(false);

  const toggleIsShowLanguage = () => {
    setIsShowLanguage(prev => !prev);
  }

  return (
    <div className={styles.languageSelector}>
      <GlobeIcon className={styles.globeIcon} onClick={toggleIsShowLanguage}/>
      {
        isShowLanguages ? 
          <div className={styles.languageList}>
            {
              languages.map((lng) => 
                <CustomButton 
                  key={lng.code} 
                  onClick={() => {
                    changeLanguage(lng.code);
                    toggleIsShowLanguage();
                  }}
                >
                  {lng.lang}
                </CustomButton>
              )
            } 
          </div> 
          : null
      }
    </div>
  )
}

export default LanguageSelector