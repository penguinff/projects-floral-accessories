import styles from './form-input.module.scss';

const FormInput = ({ label, textArea, ...otherProps }) => (
  <div className={styles.formInputGroup}>
    {textArea ? 
      <textarea className={`${styles.formInput} ${styles.textArea}`} {...otherProps} />
    :
      <input className={styles.formInput} {...otherProps} />
    }
    
    {label ? (
      <label
        className={`${styles.formInputLabel} ${otherProps.value.length ? styles.shrink : ''}`} 
      >
        {label}
      </label>
    ) : null}
  </div>
);

export default FormInput;