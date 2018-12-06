import {connect} from 'react-redux';
import PageA from '../components/PageA';
import {actions} from '../actions/actions';
import {bindActionCreators} from 'redux';


const mapStateToProps = (state) => {
  return {
    pagea: state.pagea,
    menuOpen: state.main.menuOpen
  }
}

const mapDispatchToProps = (dispatch) => {
  return { 
    actions: bindActionCreators(actions, dispatch)
  }
}


const PageAComponents= connect(
    mapStateToProps,
    mapDispatchToProps
)(PageA)


export default PageAComponents
