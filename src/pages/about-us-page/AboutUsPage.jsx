import styles from './about-us-page.module.scss';

import companyBanner from '../../assets/logo_banner.png';

const AboutUsPage = () => (
  <div className={styles.aboutUsPage}>
    <div className={styles.banner}>
      <img src={companyBanner} alt='company banner' />
    </div>
  </div>
)

export default AboutUsPage;