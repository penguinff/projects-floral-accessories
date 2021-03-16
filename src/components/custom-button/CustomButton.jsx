import styles from './custom-button.module.scss';

const CustomButton = ({ children, ...props }) => (
  <button {...props } className={styles.customButton}>
    {children}
  </button>
);

export default CustomButton;