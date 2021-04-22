import styles from './form-input.module.scss';

const FormInput = ({ handleChange, label, textArea, ...otherProps }) => (
  <div className={styles.formInputGroup}>
    {textArea ? 
      <textarea className={`${styles.formInput} ${styles.textArea}`} onChange={handleChange} {...otherProps} />
    :
      <input className={styles.formInput} onChange={handleChange} {...otherProps} />
    }
    {label ? (
      <label
        className={`${otherProps.value.length ? styles.shrink : ''} ${styles.formInputLabel}`} 
      >
        {label}
      </label>
    ) : null}
  </div>
);

export default FormInput;