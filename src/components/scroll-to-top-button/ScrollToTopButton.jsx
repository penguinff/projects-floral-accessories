import styles from './scroll-to-top-button.module.scss';

import { ReactComponent as ScrollToTopIcon } from '../../assets/chevron-up-icon.svg';

const ScrollToTopButton = () => {
	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			left: 0,
			behavior: 'smooth'
		})
	}

	return (
		<div 
			className={styles.scrollToTopButton}
			onClick={scrollToTop}
		>
			<ScrollToTopIcon />
		</div>
	)
}

export default ScrollToTopButton;