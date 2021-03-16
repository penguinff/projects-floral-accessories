import { useState } from 'react';
import FormInput from '../form-input/FormInput';
import CustomButton from '../custom-button/CustomButton';
import { signInWithGoogle, signInWithFacebook } from '../../firebase/firebase.utils';

import { ReactComponent as GoogleIcon } from '../../assets/google-color-icon.svg';
import { ReactComponent as FacebookIcon } from '../../assets/facebook-color-icon.svg';

import styles from './sign-in.module.scss';

const SignIn = () => {
  const [userCredentials, setUserCredentials] = useState({ email: '', password: '' });

  const handleChange = event => {
    const { value, name } = event.target;
    setUserCredentials({ ...userCredentials, [name]: value });
  }

  const handleSubmit = event => {
    event.preventDefault();
    setUserCredentials({ email: '', password: '' });
  }

  return (
    <div className={styles.signIn}>
      <div className={styles.clickSignIn}>
        <h2>一鍵登入</h2>
        <GoogleIcon onClick={signInWithGoogle} />
        <FacebookIcon onClick={signInWithFacebook} />
      </div>

      <div className={styles.typeSignIn}>
        <h2>官網會員登入</h2>
        <span>請輸入您的電子信箱和密碼</span>
        <form className={styles.signInForm} onSubmit={handleSubmit}>
          <FormInput 
            name='email'
            type='email'
            value={userCredentials.email}
            onChange={handleChange}
            label='電子信箱'
            required />
          <FormInput 
            name='password'
            type='password'
            value={userCredentials.password}
            onChange={handleChange}
            label='密碼'
            required />
          <CustomButton type='submit'>登入</CustomButton>
        </form>
      </div>
    </div>
  );

};

export default SignIn;