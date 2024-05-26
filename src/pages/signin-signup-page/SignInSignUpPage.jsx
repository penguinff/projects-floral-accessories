import Breadcrumb from '../../components/breadcrumb/Breadcrumb';

import SignIn from '../../components/sign-in/SignIn';
import SignUp from '../../components/sign-up/SignUp';
import styles from './signin-signup-page.module.scss';

const SignInSignUpPage = () => (
  <section className={styles.signInSignUpPage}>
    <Breadcrumb />
    <div className={styles.signInSignUpGroup}>
      <SignIn />
      <SignUp />
    </div>
  </section>
);

export default SignInSignUpPage;