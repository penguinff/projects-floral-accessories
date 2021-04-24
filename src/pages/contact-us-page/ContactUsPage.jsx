import { useState } from 'react';

import Breadcrumb from '../../components/breadcrumb/Breadcrumb';
import FormInput from '../../components/form-input/FormInput';
import CustomButton from '../../components/custom-button/CustomButton';

import styles from './contact-us-page.module.scss';

import { ReactComponent as AddressIcon } from '../../assets/address-map-icon.svg';
import { ReactComponent as PhoneIcon } from '../../assets/phone-icon.svg';
import { ReactComponent as EmailIcon } from '../../assets/email-icon.svg';
import { ReactComponent as FacebookIcon } from '../../assets/facebook-icon.svg';
import { ReactComponent as InstagramIcon } from '../../assets/instagram-icon.svg';
import { ReactComponent as YoutubeIcon } from '../../assets/youtube-icon.svg';
import { ReactComponent as LineIcon } from '../../assets/line-icon.svg';

const ContactUsPage = ({ location }) => {
  const [contactInfo, setContactInfo] = useState({
    displayName: '',
    email: '',
    message: ''
  });

  const { displayName, email, message } = contactInfo;

  const handleChange = event => {
    const { value, name } = event.target;
    setContactInfo({ ...contactInfo, [name]: value });
  }

  const handleSubmit = event => {
    event.preventDefault();
    // can connect to firebase later
    console.log(contactInfo);
    setContactInfo({
      displayName: '',
      email: '',
      message: ''
    })
    alert('謝謝您的意見！我們會儘快回覆您。');
  }

  return (
    <section className={styles.contactUsPage}>
      <Breadcrumb location={location}/>

      <div className={styles.containers}>
        <div className={styles.container}>
          <h2>聯絡我們</h2>
          <div className={styles.infoCards}>
            <div className={styles.infoCard}>
              <AddressIcon />
              <div>
                <h3>實體店地址</h3>
                <span><a href='https://goo.gl/maps/byBcss7v5p7G3H8u8' target='_blank' rel='noreferrer'>台北市信義區信義路五段7號</a></span>
              </div>
            </div>
            <div className={styles.infoCard}>
              <PhoneIcon />
              <div>
                <h3>客服專綫</h3>
                <span><a href='tel:0960888333'>0960-888-333</a></span>
              </div>
            </div>
            <div className={styles.infoCard}>
              <EmailIcon />
              <div>
                <h3>客服信箱</h3>
                <span><a href='mailto:enquiry@floral-accessories.com'>enquiry@floral-accessories.com</a></span>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.container}>
          <h2>我們希望聽到您的意見</h2>
          <form onSubmit={handleSubmit}>
            <FormInput 
              name='displayName'
              type='text'
              value={displayName}
              onChange={handleChange}
              label='你的名字'
              required />
            <FormInput 
              name='email'
              type='email'
              value={email}
              onChange={handleChange}
              label='電子信箱'
              required />
            <FormInput
              textArea
              name='message'
              type='text'
              value={message}
              onChange={handleChange}
              label='輸入評論'
              required />
            <CustomButton type='submit'>送出</CustomButton>
          </form>
        </div>

        <div className={styles.container}>
          <h2>追蹤我們</h2>
          <div className={styles.infoCards}>
            <div className={`${styles.infoCard} ${styles.socialMedia}`}>
              <FacebookIcon />
              <h3>Facebook</h3>
            </div>
            <div className={`${styles.infoCard} ${styles.socialMedia}`}>
              <InstagramIcon />
              <h3>Instagram</h3>
            </div>
            <div className={`${styles.infoCard} ${styles.socialMedia}`}>
              <YoutubeIcon />
              <h3>YouTube</h3>
            </div>
            <div className={`${styles.infoCard} ${styles.socialMedia}`}>
              <LineIcon />
              <h3>Line</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
};

export default ContactUsPage;