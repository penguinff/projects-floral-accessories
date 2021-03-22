import { useState } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import FormInput from '../form-input/FormInput';
import CustomButton from '../custom-button/CustomButton';

import { googleSignInStart, facebookSignInStart, emailSignInStart } from '../../redux/user/user-actions';

import { ReactComponent as GoogleIcon } from '../../assets/google-color-icon.svg';
import { ReactComponent as FacebookIcon } from '../../assets/facebook-color-icon.svg';

import styles from './sign-in.module.scss';

const SignIn = ({ googleSignInStart, facebookSignInStart, emailSignInStart, location, history }) => {
  const [userCredentials, setUserCredentials] = useState({
    email: '', 
    password: '' 
  });

  const { email, password } = userCredentials;
  
  // redirect after signin
  const redirect = () => {
    location.state ? history.push(location.state.from) : history.push('/userprofile');
  }

  const handleChange = event => {
    const { value, name } = event.target;
    setUserCredentials({ ...userCredentials, [name]: value });
  }

  const handleSubmit = async event => {
    event.preventDefault();
    emailSignInStart(email, password);
    redirect();
  }

  return (
    <div className={styles.signIn}>
      <div className={styles.clickSignIn}>
        <h2>一鍵登入</h2>
        <GoogleIcon onClick={googleSignInStart} />
        <FacebookIcon onClick={facebookSignInStart} />
      </div>

      <div className={styles.typeSignIn}>
        <h2>官網會員登入</h2>
        <span>請輸入您的電子信箱和密碼</span>
        <form className={styles.signInForm} onSubmit={handleSubmit}>
          <FormInput 
            name='email'
            type='email'
            value={email}
            onChange={handleChange}
            label='電子信箱'
            required />
          <FormInput 
            name='password'
            type='password'
            value={password}
            onChange={handleChange}
            label='密碼'
            required />
          <CustomButton type='submit'>登入</CustomButton>
        </form>
      </div>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  googleSignInStart: () => dispatch(googleSignInStart()),
  facebookSignInStart: () => dispatch(facebookSignInStart()),
  emailSignInStart: (email, password) => dispatch(emailSignInStart({ email, password }))
})

export default connect(null, mapDispatchToProps)(withRouter(SignIn));