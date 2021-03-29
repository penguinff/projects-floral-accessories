import { useState } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import FormInput from '../form-input/FormInput';
import CustomButton from '../custom-button/CustomButton';

import { signUpStart } from '../../redux/user/user-actions';

import styles from './sign-up.module.scss';

const SignUp = ({ signUpStart, location, history }) => {
  const [userCredentials, setUserCredentials] = useState({
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const { displayName, email, password, confirmPassword } = userCredentials;

  // redirect after signup
  const redirect = () => {
    location.state ? history.push(location.state.from) : history.push('/user-profile');
  }

  const handleChange = event => {
    const { name, value } = event.target;
    setUserCredentials({ ...userCredentials, [name]: value });
  }

  const handleSubmit = async event => {
    event.preventDefault();
    if (password !== confirmPassword) {
      alert('password not match');
      return;
    }
    signUpStart({ displayName, email, password });
    redirect();
  }

  return (
    <div className={styles.signUp}>
      <h2>立即註冊</h2>
      <span>立即註冊即可獲得官網會員獨家優惠</span>
      <form className={styles.signUpForm} onSubmit={handleSubmit}>
        <FormInput 
          type='text'
          name='displayName'
          value={displayName}
          onChange={handleChange}
          label='賬戶名稱'
          required
        />
        <FormInput 
          type='email'
          name='email'
          value={email}
          onChange={handleChange}
          label='電子信箱'
          required
        />
        <FormInput 
          type='password'
          name='password'
          value={password}
          onChange={handleChange}
          label='密碼'
          required
        />
        <FormInput 
          type='password'
          name='confirmPassword'
          value={confirmPassword}
          onChange={handleChange}
          label='確認密碼'
          required
        />
        <CustomButton type='submit'>註冊</CustomButton>
      </form>
    </div>
  );
}

const mapDispatchToProps = dispatch => ({
  signUpStart: userCredentials => dispatch(signUpStart(userCredentials))
})

export default connect(null, mapDispatchToProps)(withRouter(SignUp));