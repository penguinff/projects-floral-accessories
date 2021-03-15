import Breadcrumb from '../../components/breadcrumb/Breadcrumb';
import styles from './signin-signup-page.module.scss';

const SignInSignUpPage = ({ location }) => (
  <div className={styles.signInSignUpPage}>
    <Breadcrumb location={location}/>
    Sign In & Sign Up Page
  </div>
);

export default SignInSignUpPage;