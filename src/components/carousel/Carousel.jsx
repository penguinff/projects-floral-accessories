import { useState, useEffect } from 'react';
import CSSTransition from 'react-transition-group/CSSTransition';
import SwitchTransition from 'react-transition-group/SwitchTransition';
import styles from './carousel.module.scss';
import slideTransition from './slide.module.scss';

import { ReactComponent as LeftIcon } from '../../assets/left-icon.svg';
import { ReactComponent as RightIcon } from '../../assets/right-icon.svg';

const carouselSlides = [
  {
    id: 0,
    imageUrl: 'https://images.unsplash.com/photo-1573227895118-8f8fa1172a09?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80'
  },
  {
    id: 1,
    imageUrl: 'https://images.unsplash.com/photo-1531995811006-35cb42e1a022?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1050&q=80'
  },
  {
    id: 2,
    imageUrl: 'https://images.unsplash.com/photo-1584302179602-e4c3d3fd629d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80'
  },
  {
    id: 3,
    imageUrl: 'https://images.unsplash.com/photo-1550597734-2d270e74b44f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1159&q=80'
  },
  {
    id: 4,
    imageUrl: 'https://images.unsplash.com/photo-1613498509814-5927a34a47cf?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80'
  },
];

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Slide functions
  const plusSlides = (n) => {
    if (currentSlide === 0 && n === -1) {
      setCurrentSlide(carouselSlides.length - 1)
    } else if (currentSlide === carouselSlides.length - 1 && n === 1) {
      setCurrentSlide(0)
    } else {
      setCurrentSlide(currentSlide + n);
    }
  }
  const clickSlide = (n) => {
    setCurrentSlide(n)
  }

  useEffect(() => {
    const autoSlide = setInterval(() => {
      plusSlides(1);
    }, 8000);
    return () => clearInterval(autoSlide)
  }, [currentSlide])

  return (
    <div className={styles.carouselContainer}>
    
      <div className={styles.carouselSlide}>
        <SwitchTransition>
          <CSSTransition
            key={currentSlide}
            timeout={{ enter: 300, exit: 300 }}
            classNames={slideTransition}
          >
            <img src={carouselSlides[currentSlide].imageUrl} alt='accessories' className={styles.image} />
          </CSSTransition>
        </SwitchTransition>
      </div>  

      <div className={styles.prevnext}>
        <div className={styles.prev} onClick={e => plusSlides(-1)}><LeftIcon /></div>
        <div className={styles.next} onClick={e => plusSlides(1)}><RightIcon /></div>
      </div>
  
      <div className={styles.carouselDots}>
        {carouselSlides.map((item, index) => (
          <span className={`${styles.carouselDot} ${index === currentSlide ? styles.carouselDotCurrent : ''}`} key={index} onClick={e => clickSlide(index)}></span>
        ))}
      </div>
      
    </div>
  );
}

export default Carousel;