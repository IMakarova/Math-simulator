import LoginModal from '../LoginModal';
import { connect } from 'react-redux';

const mapStateToProps = (state, ownProps) => ({
  isLoginModal: state?.auth?.isLoginModal,
});

const ModalManager = ({ isLoginModal }) => {

    return (
        <>{isLoginModal && <LoginModal />}</>
    )
};

export default connect(mapStateToProps)(ModalManager);