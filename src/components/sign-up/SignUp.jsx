import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory, useLocation } from 'react-router-dom';

import FormInput from '../form-input/FormInput';
import CustomButton from '../custom-button/CustomButton';

import { selectCurrentUser } from '../../redux/user/user-selectors';
import { signUpStart } from '../../redux/user/user-slice';

import styles from './sign-up.module.scss';
import { useTranslation } from 'react-i18next';

// TODO: Redirect to /cart not working!!
const SignUp = () => {
  const {t} = useTranslation();

  const history = useHistory();
  const { state } = useLocation();

  // react-redux hooks
  const dispatch = useDispatch();
  const currentUser = useSelector(selectCurrentUser);
  
  const [userCredentials, setUserCredentials] = useState({
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const { displayName, email, password, confirmPassword } = userCredentials;

  // redirect after signup
  const redirect = () => {
    currentUser && (state ? history.push(state.from) : history.push('/user-profile'));
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
    dispatch(signUpStart({ displayName, email, password }));
    redirect();
  }

  return (
    <div className={styles.signUp}>
      <h2>{t('立即註冊')}</h2>
      <span>{t('立即註冊即可獲得官網會員獨家優惠')}</span>
      <form className={styles.signUpForm} onSubmit={handleSubmit}>
        <FormInput 
          type='text'
          name='displayName'
          value={displayName}
          onChange={handleChange}
          label={t('賬戶名稱')}
          required
        />
        <FormInput 
          type='email'
          name='email'
          value={email}
          onChange={handleChange}
          label={t('電子信箱')}
          required
        />
        <FormInput 
          type='password'
          name='password'
          value={password}
          onChange={handleChange}
          label={t('密碼')}
          required
        />
        <FormInput 
          type='password'
          name='confirmPassword'
          value={confirmPassword}
          onChange={handleChange}
          label={t('確認密碼')}
          required
        />
        <CustomButton type='submit'>{t('註冊')}</CustomButton>
      </form>
    </div>
  );
}

export default SignUp;