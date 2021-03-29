import styles from './footer.module.scss';

import { ReactComponent as FacebookIcon } from '../../assets/facebook-icon.svg';
import { ReactComponent as InstagramIcon } from '../../assets/instagram-icon.svg';
import { ReactComponent as YoutubeIcon } from '../../assets/youtube-icon.svg';
import { ReactComponent as LineIcon } from '../../assets/line-icon.svg';


const Footer = () => (
  <div className={styles.footer}>
    <div className={styles.lists}>

      <ul className={styles.list}>
        <li className={styles.title}>關於我們</li>
        <li>品牌故事</li>
        <li>設計師們</li>
        <li>門市資訊</li>
      </ul>

      <ul className={styles.list}>
        <li className={styles.title}>購物說明</li>
        <li>付款方式</li>
        <li>貨物運送</li>
        <li>退換貨方式</li>
      </ul>

      <ul className={styles.list}>
        <li className={styles.title}>客服資訊</li>
        <li>客服留言</li>
        <li>常見問題</li>
        <li>聯絡我們</li>
      </ul>

      <ul className={styles.list}>
        <li className={styles.title}>追蹤我們</li>
        <div className={styles.socialList}>
          <li><FacebookIcon /></li>
          <li><InstagramIcon /></li>
          <li><YoutubeIcon /></li>
          <li><LineIcon /></li>
        </div>
      </ul>

    </div>
    <span className={styles.copyright}>Copyright © 2021 by Floral Accessories</span>
    <div className={styles.footnote}>
      <span>練習作品 | 作者：Chirstine Fong | <a href='https://github.com/penguinff' target='_blank' rel='noreferrer noopener'>Github</a></span>
      <span>圖片來源：<a href='https://unsplash.com/' target='_blank' rel='noreferrer noopener'>https://unsplash.com/</a></span>
      </div>
  </div>
);

export default Footer;