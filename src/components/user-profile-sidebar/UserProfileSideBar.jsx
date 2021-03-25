import { connect } from 'react-redux';

import { signOutStart } from '../../redux/user/user-actions'

import CustomButton from '../custom-button/CustomButton';

import styles from './user-profile-sidebar.module.scss';

const UserProfileSidebar = ({ signOutStart }) => {
  return (
    <div>
    HIHI
    <CustomButton onClick={signOutStart}>
      登出
    </CustomButton>
    </div>
  )
}

const mapDispatchToProps = dispatch => ({
  signOutStart: () => dispatch(signOutStart())
})

export default connect(null, mapDispatchToProps)(UserProfileSidebar);