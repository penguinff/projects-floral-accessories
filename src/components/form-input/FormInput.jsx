import styles from './form-input.module.scss';

const FormInput = ({ handleChange, label, ...otherProps }) => (
  <div className={styles.formInputGroup}>
    <input className={styles.formInput} onChange={handleChange} {...otherProps} />
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