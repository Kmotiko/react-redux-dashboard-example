import {connect} from 'react-redux';
import Home from '../components/Home';
import {actions} from '../actions/actions';
import {bindActionCreators} from 'redux';


const mapStateToProps = (state) => {
  return { 
    home: state.home,
    menuOpen: state.main.menuOpen
  }
}

const mapDispatchToProps = (dispatch) => {
  return { 
    actions: bindActionCreators(actions, dispatch)
  }
}

const HomeComponents = connect(
    mapStateToProps,
    mapDispatchToProps
)(Home)


export default HomeComponents
