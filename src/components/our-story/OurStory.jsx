import { Link } from 'react-router-dom';

import CustomButton from '../custom-button/CustomButton';

import styles from './our-story.module.scss';

const OurStory = () => {
  const imageUrl = 'https://images.unsplash.com/photo-1603228693968-3bc8f76690c4?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80';
  
  return (
    <div className={styles.ourStory}>
      <div className={styles.imageContainer}>
        <img src={imageUrl} alt='our story' />
      </div>

      <div className={styles.wordContainer}>
        <div className={styles.title}>Our Story</div>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        <Link to='/about-us'><CustomButton>Learn More</CustomButton></Link>
      </div>
    </div>
  )
};

export default OurStory;