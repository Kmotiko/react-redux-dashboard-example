import React from 'react'
import PropTypes from 'prop-types'

import { withRouter } from "react-router";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import CommentIcon from '@material-ui/icons/Comment';

import DashboardDrawer from '../components/DashboardDrawer'




class PageB extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      pageb: {details: {}}
    }
  }

  render() {
    const { classes, pageb } = this.props;
    return (
      <div>
      Page B
        <List>
          { pageb.data.map((id, index) => (
            <ListItem
              key={index}
              dense
              button
              //onClick={}
              //className={classes.listItem}
            >
              <ListItemText primary={`id : ${id}`} />
              <ListItemSecondaryAction>
                <IconButton aria-label="Comments">
                  <CommentIcon />
                </IconButton>
              </ListItemSecondaryAction>
            </ListItem>
          ))}
        </List>
      </div>
    );
  }
}

class PageBMain extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      pageb: {}
    }
  }

  componentDidMount(){
    this.props.actions.pageBRequest()
  }

  render() {
    const { classes, pageb } = this.props;
    return(
      <section>
        <DashboardDrawer actions={this.props.actions} menuOpen={this.props.menuOpen} pageb={this.props.pageb}>
          <PageB actions={this.props.actions} pageb={this.props.pageb}/>
        </DashboardDrawer>
      </section>
    );
  }
}

PageBMain.propTypes = {
}

export default PageBMain;
