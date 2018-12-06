import {connect} from 'react-redux';
import {actions} from '../actions/actions';
import PageB from '../components/PageB';
import {bindActionCreators} from 'redux';


const mapStateToProps = (state) => {
  return {
    pageb: state.pageb,
    menuOpen: state.main.menuOpen
  }
}

const mapDispatchToProps = (dispatch) => {
  return { 
    actions: bindActionCreators(actions, dispatch)
  }
}

const PageBComponents = connect(
    mapStateToProps,
    mapDispatchToProps
)(PageB)


export default PageBComponents
