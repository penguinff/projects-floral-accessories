import { useState } from 'react';
import FormInput from '../form-input/FormInput';
import CustomButton from '../custom-button/CustomButton';
import styles from './sign-up.module.scss';

const SignUp = () => {
  const [userCredentials, setUserCredentials] = useState({
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleChange = event => {
    const { name, value } = event.target;
    setUserCredentials({ ...userCredentials, [name]: value });
  }

  // handleSubmit function set later after redux setup
  const handleSubmit = () => {
    console.log(userCredentials);
  }

  return (
    <div className={styles.signUp}>
      <h2>立即註冊</h2>
      <span>立即註冊即可獲得官網會員獨家首購禮</span>
      <form className={styles.signUpForm} onSubmit={handleSubmit}>
        <FormInput 
          type='text'
          name='displayName'
          value={userCredentials.displayName}
          onChange={handleChange}
          label='賬戶名稱'
          required
        />
        <FormInput 
          type='email'
          name='email'
          value={userCredentials.email}
          onChange={handleChange}
          label='電子信箱'
          required
        />
        <FormInput 
          type='password'
          name='password'
          value={userCredentials.password}
          onChange={handleChange}
          label='密碼'
          required
        />
        <FormInput 
          type='password'
          name='confirmPassword'
          value={userCredentials.confirmPassword}
          onChange={handleChange}
          label='確認密碼'
          required
        />
        <CustomButton type='submit'>註冊</CustomButton>
      </form>
    </div>
  )
}

export default SignUp;