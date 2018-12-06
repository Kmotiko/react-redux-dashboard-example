import React from 'react'
import PropTypes from 'prop-types'

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import CommentIcon from '@material-ui/icons/Comment';

import DashboardDrawer from './DashboardDrawer';



class Components extends React.Component {
  constructor(props){
    super(props);
    this.state = {}
  }


  render() {
    const { classes } = this.props;

    return (
      <div>
        Home
      </div>
    );
  }
}


class Home extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount(){
  }

  render() {
    return(
      <section>
        <DashboardDrawer actions={this.props.actions} menuOpen={this.props.menuOpen} >
          <Components actions={this.props.actoions} />
        </DashboardDrawer>
      </section>
    );
  }
}


Home.propTypes = {
  ids: PropTypes.array
}

export default Home;
