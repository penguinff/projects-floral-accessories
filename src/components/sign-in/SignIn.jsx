import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory, useLocation } from 'react-router-dom';

import FormInput from '../form-input/FormInput';
import CustomButton from '../custom-button/CustomButton';

import { selectCurrentUser, selectUserError } from '../../redux/user/user-selectors';
import { googleSignInStart, facebookSignInStart, emailSignInStart } from '../../redux/user/user-slice';

import { ReactComponent as GoogleIcon } from '../../assets/google-color-icon.svg';
import { ReactComponent as FacebookIcon } from '../../assets/facebook-color-icon.svg';

import styles from './sign-in.module.scss';

// TODO: SignIn error -> firebase API problem?
// TODO: Redirect to /cart not working!!
const SignIn = () => {
  const history = useHistory();
  const { state } = useLocation();

  // react-redux hooks
  const dispatch = useDispatch();
  const currentUser = useSelector(selectCurrentUser);
  const userError = useSelector(selectUserError);
  
  const [userCredentials, setUserCredentials] = useState({
    email: '', 
    password: '' 
  });

  const { email, password } = userCredentials;
  
  // redirect after signin
  const redirect = () => {
    currentUser && (state ? history.push(state.from) : history.push('/user-profile'));
  }

  const handleChange = event => {
    const { value, name } = event.target;
    setUserCredentials({ ...userCredentials, [name]: value });
  }

  const handleSubmit = async event => {
    event.preventDefault();
    dispatch(emailSignInStart({ email, password }));
    redirect();
  }

  return (
    <div className={styles.signIn}>
      <div className={styles.clickSignIn}>
        <h2>一鍵登入</h2>
        <GoogleIcon onClick={() => dispatch(googleSignInStart())} />
        <FacebookIcon onClick={() => dispatch(facebookSignInStart())} />
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
          { userError && 
            <div className={styles.errorMessage}>{userError.message}</div>
          }
        </form>
      </div>
    </div>
  );
};

export default SignIn;